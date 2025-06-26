import * as THREE from 'three';
import Editor from '../Editor';

class PanoramaModel {
    editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }
}

class PanoramaMaterial extends THREE.ShaderMaterial {
    constructor() {
        super({
            side: THREE.BackSide,
            transparent: true,
            defines: {
                Not_Cube: false
            },
            uniforms: {
                pano0Map: { value: null },
                pano0Position: { value: new THREE.Vector3() },
                pano0Matrix: { value: new THREE.Matrix4() },
                pano1Map: { value: null },
                pano1Position: { value: new THREE.Vector3() },
                pano1Matrix: { value: new THREE.Matrix4() },
                opacity: { value: 1 },
                progress: { value: 0 },

                hasDiffuse: { value: true },
                brightness: { value: 0.5 },
                contrast: { value: 0 },
                saturation: { value: 0 },
                darkEnhance: { value: 0 },
                highlightEnhance: { value: 0 },
            },
            vertexShader: /*glsl*/ `
                uniform vec3 pano0Position;
                uniform mat4 pano0Matrix;
                uniform vec3 pano1Position;
                uniform mat4 pano1Matrix;

                varying vec2 vUv;
                varying vec3 vWorldPosition0;
                varying vec3 vWorldPosition1;

                void main() 
                {
                    vec4 worldPosition =  vec4(position.xyz, 1.0);
                    vec3 positionLocalToPanoCenter0 = position.xyz - pano0Position;
                    vWorldPosition0 = (vec4(positionLocalToPanoCenter0, 1.0) * pano0Matrix).xyz;
                    vWorldPosition0.x *= -1.0;

                    vec3 positionLocalToPanoCenter1 = position.xyz - pano1Position;
                    vWorldPosition1 = (vec4(positionLocalToPanoCenter1, 1.0) * pano1Matrix).xyz;
                    vWorldPosition1.x *= -1.0;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                }
            `,
            fragmentShader: /*glsl*/ `
                uniform float opacity;
                uniform float progress;
                uniform vec3 pano0Position;
                uniform vec3 pano1Position;

                uniform bool hasDiffuse;
                uniform float brightness;
                uniform float contrast;
                uniform float saturation;
                uniform float darkEnhance;
                uniform float highlightEnhance;

                #if defined(Not_Cube)
                    #define PI 3.141592653 

                    uniform sampler2D pano0Map;
                    uniform sampler2D pano1Map;
                    vec4 texCubemapWith2D(sampler2D t,vec3 dir)
                    {
                        dir=normalize(dir);
                        float tx=atan(dir.x,dir.z)/(PI*2.0)+0.5;
                        float ty=acos(dir.y)/PI;
                        vec4 color=texture2D(t,vec2(tx, 1.0 - ty));
                        return color;
                    }

                #else

                    uniform samplerCube pano0Map;
                    uniform samplerCube pano1Map;

                #endif

                varying vec2 vUv;
                varying vec3 vWorldPosition0;
                varying vec3 vWorldPosition1;
      

                // �Աȶ�
                vec4 updateBright(vec4 color,float brightness,float contrast)
                {
                    color *= (1.0+(brightness-0.5) * 2.0);
                    float c = (contrast - 0.5)*2.0;
                    if (c>0.0) {
                        color.rgb = (color.rgb-0.5)/(1.0-contrast)+0.5;
                    } else {
                        color.rgb =(color.rgb-0.5)*(1.0+contrast)+0.5;
                    }
                    return color;
                }

                // ���Ͷ�
                vec4 updateSaturation(vec4 color,float saturation)
                {
                    float average=(color.r+color.g+color.b)/3.0;
                    if(saturation>0.0){
                        color.rgb+=(average-color.rgb)*(1.0-1.0/(1.001-saturation));
                    } else{
                        color.rgb+=(average-color.rgb)*(-saturation);
                    }
                    return color;
                }

                // ���ȵ��� dh �������� hh �߹����
                vec4 updateLight(vec4 color,float dh, float hh)
                {
                    float v = dh;
                    float adjust_ratio = 4.0;
                    float adjust_range = 256.0;
                    float ref_gamma = 2.0;
                    float gamma = 0.0;
                    float r = 0.0;
                    if(v > 0.001){
                        v = 1.0 - v;
                        v = v * adjust_ratio;
                        r = 1.0 - color.r;
                        gamma = 1.0 + pow(r, ref_gamma)* (adjust_ratio * 0.5 - v*0.5);
                        color.r = 1.0-pow(r, gamma);
                        r = 1.0 - color.g;
                        gamma = 1.0 + pow(r, ref_gamma)* (adjust_ratio * 0.5 - v*0.5);
                        color.g = 1.0-pow(r, gamma);
                        r = 1.0 - color.b;
                        gamma = 1.0 + pow(r, ref_gamma)* (adjust_ratio * 0.5 - v*0.5);
                        color.b = 1.0-pow(r, gamma);
                    }
                    v = hh;
                    if(v >= 0.001){
                        ref_gamma = 4.0;
                        adjust_ratio = 8.0;
                        adjust_range = 256.0;
                        float left_unchanged = 256.0 - adjust_range;
                        v = (1.0 - v) * adjust_ratio;
                        r = color.r;
                        if(r > 0.0){
                            float ratio = r;
                            gamma = 1.0 + pow(ratio, ref_gamma) * (adjust_ratio * 0.5 - v*0.5);
                            r = pow(r, gamma);
                        }
                        color.r = r;
                        r = color.g;
                        if(r > 0.0){
                            float ratio = r;
                            gamma = 1.0 + pow(ratio, ref_gamma) * (adjust_ratio * 0.5 - v*0.5);
                            r = pow(r, gamma);
                        }
                        color.g = r;
                        r = color.b;
                        if(r > 0.0){
                            float ratio = r;
                            gamma = 1.0 + pow(ratio, ref_gamma) * (adjust_ratio * 0.5 - v*0.5);
                            r = pow(r, gamma);
                        }
                        color.b = r;
                    }
                    return color;
                }

                void main() 
                {
                    vec3 direction0 = vWorldPosition0;
                    vec3 direction1 = vWorldPosition1;

                    #if defined(Not_Cube)
                        vec4 colorFromPano0 = texCubemapWith2D( pano0Map, direction0.xyz );
                        vec4 colorFromPano1 = texCubemapWith2D( pano1Map, direction1.xyz );
                    #else
                        vec4 colorFromPano0 = textureCube( pano0Map, direction0.xyz );
                        vec4 colorFromPano1 = textureCube( pano1Map, direction1.xyz );
                    #endif

                    vec4 colorFromPanos = mix(colorFromPano0, colorFromPano1, progress);
                    float whiteness = 1.0 - smoothstep(0.1, 0.2, opacity);
                    colorFromPanos = mix(colorFromPanos, vec4(0.5, 0.5, 0.5, 1.0), whiteness);
        

                    if(!hasDiffuse || opacity==0.0){
                    discard;
                    }

                    vec4 pixel = colorFromPanos;
                    pixel = updateLight(pixel,darkEnhance,highlightEnhance);
                    pixel = updateSaturation(pixel,saturation);
                    pixel = updateBright(pixel,brightness,contrast);
                    pixel.a = opacity;

                    gl_FragColor = pixel;
                }
            `,
        })
    }
}
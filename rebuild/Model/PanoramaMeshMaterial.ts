import * as THREE from 'three'

import { Panorama } from './Panorama'

export default class PanoramaMeshMaterial extends THREE.ShaderMaterial {
    constructor(notCube: boolean, map?: THREE.Texture) {
        super({
            transparent: false,
            defines: {
                Not_Cube: notCube,
            },
            clipping: true,
            clipIntersection: true,
            clippingPlanes: [],
            uniforms: {
                pano0Position: { value: new THREE.Vector3() },
                pano1Position: { value: new THREE.Vector3() },
                pano0Matrix: { value: new THREE.Matrix4() },
                pano1Matrix: { value: new THREE.Matrix4() },
                pano0Map: { value: null },
                pano1Map: { value: null },
                map: { value: map },
                blackout: { value: 0 },
                progress: { value: 0 },
                modelAlpha: { value: 1 },
                opacity: { value: 1 },

                hasDiffuse: { value: true },
                brightness: { value: 0.5 },
                contrast: { value: 0 },
                saturation: { value: 0 },
                darkEnhance: { value: 0 },
                highlightEnhance: { value: 0 },

                clippingPlaneOpacity: { value: 0.2 }
            },

            vertexShader: /*glsl*/`
                uniform vec3 pano0Position;
                uniform mat4 pano0Matrix;

                uniform vec3 pano1Position;
                uniform mat4 pano1Matrix;

                varying vec2 vUv;
                varying vec3 vWorldPosition0;
                varying vec3 vWorldPosition1;

                #include <logdepthbuf_pars_vertex>
                #include <clipping_planes_pars_vertex>



                void main() {
                    vUv = uv;
                    vec4 worldPosition = vec4(position, 1.0);
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);


                    #include <logdepthbuf_vertex>
                    #include <clipping_planes_vertex>


                    vec3 positionLocalToPanoCenter0 = worldPosition.xyz - pano0Position;
                    vWorldPosition0 = (vec4(positionLocalToPanoCenter0, 1.0) * pano0Matrix).xyz;
                    vWorldPosition0.x *= -1.0;

                    vec3 positionLocalToPanoCenter1 = worldPosition.xyz - pano1Position;
                    vWorldPosition1 = (vec4(positionLocalToPanoCenter1, 1.0) * pano1Matrix).xyz;
                    vWorldPosition1.x *= -1.0;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                }
            `,

            fragmentShader: /*glsl*/`
                uniform sampler2D map;
                uniform float modelAlpha;
                uniform float opacity;
                uniform float progress;
                uniform int blackout;
                uniform vec3 pano0Position;
                uniform vec3 pano1Position;

                varying vec2 vUv;
                varying vec3 vWorldPosition0;
                varying vec3 vWorldPosition1;

                uniform bool hasDiffuse;
                uniform float brightness;
                uniform float contrast;
                uniform float saturation;
                uniform float darkEnhance;
                uniform float highlightEnhance;


                #include <clipping_planes_pars_fragment>
                #include <logdepthbuf_pars_fragment>

                #define PI 3.141592653 

                #if defined(Not_Cube)

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



                const vec4 BLACK=vec4(0.0,0.0,0.0,1.0);
                const vec4 GREY=vec4(0.5,0.5,0.5,1.0);


                // 对比度
                vec4 updateBright(vec4 color,float brightness,float contrast){
                color *= (1.0+(brightness-0.5) * 2.0);
                float c = (contrast - 0.5)*2.0;
                if (c>0.0) {
                    color.rgb = (color.rgb-0.5)/(1.0-contrast)+0.5;
                } else {
                    color.rgb =(color.rgb-0.5)*(1.0+contrast)+0.5;
                }
                return color;
                }

                // 饱和度
                vec4 updateSaturation(vec4 color,float saturation){
                    float average=(color.r+color.g+color.b)/3.0;
                    if(saturation>0.0){
                        color.rgb+=(average-color.rgb)*(1.0-1.0/(1.001-saturation));
                    } else{
                        color.rgb+=(average-color.rgb)*(-saturation);
                    }
                    return color;
                }

                // 亮度调节 dh 暗部改善 hh 高光调节
                vec4 updateLight(vec4 color,float dh, float hh){
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


                void main(){
                    #include <clipping_planes_fragment>
                    #include <logdepthbuf_fragment>

                    vec4 colorFromPanos;

                    #if defined(Not_Cube)

                    vec4 colorFromPano0 = texCubemapWith2D(pano0Map,vWorldPosition0);
                    vec4 colorFromPano1 = texCubemapWith2D(pano1Map,vWorldPosition1);

                    #else

                    vec4 colorFromPano0 = textureCube(pano0Map,vWorldPosition0.xyz);
                    vec4 colorFromPano1 = textureCube(pano1Map,vWorldPosition1.xyz);

                    #endif

                    if(blackout==0)
                    {
                        colorFromPanos=mix(colorFromPano0,colorFromPano1,progress);
                    }
                    else if(blackout==1)
                    {
                        colorFromPanos=mix(colorFromPano0,BLACK,min(1.0,progress*2.0));
                        colorFromPanos=mix(colorFromPanos,colorFromPano1,max(0.0,progress*2.0-1.0));
                    }
                    else if(blackout==2)
                    {
                        colorFromPanos=mix(colorFromPano0,BLACK,progress);
                    }
                    else if(blackout==3)
                    {
                        colorFromPanos=mix(BLACK,colorFromPano1,max(0.0,progress*2.0-1.0));
                    }

                    colorFromPanos = updateLight(colorFromPanos,darkEnhance,highlightEnhance);
                    colorFromPanos = updateSaturation(colorFromPanos, saturation);
                    colorFromPanos = updateBright(colorFromPanos,brightness,contrast);


                    vec4 colorFromTexture=texture2D(map,vUv);
                    colorFromPanos=mix(colorFromPanos,colorFromTexture,modelAlpha);
                    float whiteness=1.0-smoothstep(0.1,0.2,opacity);
                    vec4 pixel=mix(colorFromPanos, GREY,whiteness);
                    pixel.a =  NUM_CLIPPING_PLANES > 0 ? finalClippingPlaneOpacity : opacity;

                    gl_FragColor= pixel; 
                }
            `,
        })
    }
  
    setView0(panorama: Panorama) {
  
        const panoTexture = panorama.resource.type == 'cube' ? panorama.cubeTexture : panorama.panoTexture

        this.uniforms['pano0Map'].value = panoTexture
        this.uniforms['pano0Position'].value.copy(panorama.position)
        this.uniforms['pano0Matrix'].value.copy(panorama.matrix)
  
    }
  
    setView1(panorama: Panorama) {
  
        const panoTexture = panorama.resource.type == 'cube' ? panorama.cubeTexture : panorama.panoTexture

        this.uniforms['pano1Map'].value = panoTexture
        this.uniforms['pano1Position'].value.copy(panorama.position)
        this.uniforms['pano1Matrix'].value.copy(panorama.matrix)
  
    }
  
  
  
    // //透明度
    // getOpacity() {
  
    //   return this.uniforms['opacity'].value
  
    // }
  
    setOpacity(value: number) {

        this.uniforms['opacity'].value = value
        const isTransparent = value < 1

        if (isTransparent != this.transparent) {
            this.transparent = isTransparent
            this.needsUpdate = true
        }

    }
  
  
    // //亮度
    // getBrightness(): number {
  
    //   return this.uniforms['brightness'].value
  
    // }
  
    setBrightness(value: number) {
  
        this.uniforms['brightness'].value = value
  
    }
  
  
    // //对比度
    // getContrast(): number {
  
    //   return this.uniforms['contrast'].value
  
    // }
  
    setContrast(value: number) {
  
        this.uniforms['contrast'].value = value
  
    }
  
  
    // //饱和度
    // getSaturation(): number {
  
    //   return this.uniforms['saturation'].value
  
    // }
  
    setSaturation(value: number) {
  
        this.uniforms['saturation'].value = value
  
    }
  
  
    // //暗部改善
    // getDarkEnhance(): number {
  
    //   return this.uniforms['darkEnhance'].value
  
    // }
  
    setDarkEnhance(value: number) {
  
        this.uniforms['darkEnhance'].value = value
  
    }
  
  
    // //亮部改善
    // getHighlightEnhance(): number {
  
    //   return this.uniforms['highlightEnhance'].value
  
    // }
  
    setHighlightEnhance(value: number) {
  
        this.uniforms['highlightEnhance'].value = value
  
    }
  
    setClippingOpacity(value: number) {
  
        this.uniforms['clippingPlaneOpacity'].value = value;
  
    }
  }
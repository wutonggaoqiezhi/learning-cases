import * as THREE from 'three'

import Editor from "./Editor"
import ViewPort from "./ViewPort"

class Main {
    editor: Editor

    constructor() {
        const editor = new Editor()
        new ViewPort(editor, document.getElementById("container"))

        editor.getMsg()

        this.editor = editor
    }

    main() {}
}

THREE.ShaderChunk.clipping_planes_pars_fragment = /*glsl*/ `

    #if NUM_CLIPPING_PLANES > 0
        varying vec3 vClipPosition;
        uniform float clippingPlaneOpacity;
        uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
    #endif

`

THREE.ShaderChunk.clipping_planes_fragment = /*glsl*/ `

    float finalClippingPlaneOpacity = 1.0;
    
    #if NUM_CLIPPING_PLANES > 0
        vec4 plane;
        #pragma unroll_loop_start
        for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) 
        {
            plane = clippingPlanes[ i ];
            if ( dot( vClipPosition, plane.xyz ) > plane.w ) 
            {
                if(clippingPlaneOpacity==0.0)
                {
                    discard;
                }
                else
                {
                    finalClippingPlaneOpacity = clippingPlaneOpacity;
                }
             
            }
           
        }
        #pragma unroll_loop_end
        #if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
            bool clipped = true;

            #pragma unroll_loop_start
            for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) 
            {
                plane = clippingPlanes[ i ];
                clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
            }
            #pragma unroll_loop_end

            if ( clipped )
            {
                if(clippingPlaneOpacity==0.0)
                {
                    discard;            
                }
                else
                {
                    finalClippingPlaneOpacity = clippingPlaneOpacity;
                }
            }
        #endif
    #endif

`

new Main()

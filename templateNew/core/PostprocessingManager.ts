import * as THREE from 'three'
import { EffectComposer, OutlinePass, RenderPass, ShaderPass, FXAAShader, OutputPass } from "three/examples/jsm/Addons.js"
import { Vector2, Object3D } from "three"
import Editor from "../Editor"

export default class PostProcessingManager {
    editor: Editor

    private composer: EffectComposer
    private outlinePass: OutlinePass | undefined
    private fxaaPass: ShaderPass | undefined
    private outputPass: OutputPass | undefined

    constructor(editor: Editor) {
        this.editor = editor
        editor.ppManager = this

        this.init()
    }

    init(): this {
        // 初始化后期处理
        this.composer = new EffectComposer(this.editor.rendererManager.current)
        // 添加渲染通道
        const renderPass = new RenderPass(this.editor.sceneManager.current, this.editor.sceneManager.current.cameraManager.current)
        this.composer.addPass(renderPass)

        return this
    }

    /**
     * 启用outlinePass并设置高亮对象
    */
    enableOutline(objects: Object3D[]): void {
        if( !this.outlinePass ) {
            // 添加轮廓通道
            const { width, height } = this.editor.rendererManager.current.getSize(new Vector2())
            const outlinePass = new OutlinePass(
                new Vector2(width, height),
                this.editor.sceneManager.current,
                this.editor.sceneManager.current.cameraManager.current
            )
            this.outlinePass = outlinePass

            const textureLoader = new THREE.TextureLoader();
            textureLoader.load( 'static/images/tri_pattern.jpg', function ( texture ) {
                outlinePass.patternTexture = texture;
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
            } );

            // 配置轮廓效果
            // outlinePass.edgeStrength = 3.0;
            // outlinePass.edgeGlow = 1.0;
            // outlinePass.edgeThickness = 2.0;
            // outlinePass.visibleEdgeColor.set(visibleEdgeColor);
            // outlinePass.hiddenEdgeColor.set(hiddenEdgeColor);
            this.composer.addPass(this.outlinePass) 

            this.outputPass = new OutputPass()
            this.composer.addPass( this.outputPass )
            // 添加抗锯齿
            this.fxaaPass = new ShaderPass(FXAAShader)
            this.fxaaPass.uniforms['resolution'].value.set(1 / width, 1 / height)
            this.composer.addPass(this.fxaaPass)

            console.log('aaa')
        }
        console.log('objects - ', objects)

        this.outlinePass.selectedObjects = objects
    }

    /**
     * 移除outlinePass相关
    */
    disableOutline() {
        this.composer.removePass(this.fxaaPass!)
        this.fxaaPass?.dispose()
        this.fxaaPass = undefined
        
        this.composer.removePass( this.outputPass! )
        this.outputPass?.dispose()
        this.outputPass = undefined

        this.composer.removePass(this.outlinePass!)
        this.outlinePass?.dispose()
        this.outlinePass = undefined
    }

    /**
     * 渲染
    */
    render(): void {
        this.composer.render()
    }
}

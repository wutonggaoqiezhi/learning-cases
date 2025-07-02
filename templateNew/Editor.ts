import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'

import SceneManager from './core/SceneManager'
import CameraManager from './core/CameraManager'
import RendererManager from './core/RendererManager'
import ControlsManager from './core/ControlsManager'
import LoaderManager from './core/LoaderManager'

/**
 * camera renderer scene light
 * loader mesh layer listener
*/
export default class Editor {
    dom: HTMLElement
    stats: Stats

    sceneManager: SceneManager
    cameraManager: CameraManager
    rendererManager: RendererManager
    loaderManager: LoaderManager

    constructor(dom?: HTMLElement | null) {
        if(dom) this.dom = dom

        this.cameraManager = new CameraManager(this)
        this.loaderManager = new LoaderManager(this)
        this.sceneManager = new SceneManager(this)
        this.rendererManager = new RendererManager(this)

        this.stats = new Stats()
        this.stats.dom.setAttribute('class', 'stats')
        document.body.appendChild(this.stats.dom)

        window['editor'] = this
        this.animate()

        window.addEventListener('resize', this.onWindowResize.bind(this))
        dom?.addEventListener('mousemove', this.onMouseMove.bind(this))
        dom?.addEventListener('mousedown', this.onMouseDown.bind(this))
        dom?.addEventListener('mouseup', this.onMouseUp.bind(this))
        dom?.addEventListener('dblclick', this.onMouseDoubleClick.bind(this))
    }

    animate() {
        this.rendererManager.current.setAnimationLoop(this.render.bind(this))
    }

    /**
     * 渲染方法
    */
    render() {
        this.stats.update()
        // this.sceneManager.current.
        this.rendererManager.current.render( this.sceneManager.current, this.cameraManager.current )
    }

    /**
     * 自适应窗口
    */
    onWindowResize() {
        if( this.cameraManager.current.constructor.name == 'PerspectiveCamera' ) {
            (this.cameraManager.current as THREE.PerspectiveCamera).aspect = window.innerWidth / window.innerHeight
            this.cameraManager.current.updateProjectionMatrix()
        }

        this.rendererManager.current.setSize( window.innerWidth, window.innerHeight )
        this.rendererManager.current.setPixelRatio( window.devicePixelRatio )
    }

    /**
     * 鼠标监听函数，后续可能会封装
    */
    onMouseMove(event: MouseEvent) {
        event.preventDefault()

        const mouse = new THREE.Vector2()
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1
    }

    onMouseDown(event: MouseEvent) {
        event.preventDefault()
    }

    onMouseUp(event: MouseEvent) {
        event.preventDefault()
    }

    onMouseDoubleClick(event: MouseEvent) {
        event.preventDefault()

        // TODO:暂时禁用，全屏后点击有问题，待解决
        // if (!document.fullscreenElement) {
        //     this.rendererManager.current.domElement.requestFullscreen();  // 进入全屏
        // } else {
        //     document.exitFullscreen();               // 退出全屏
        // }
    }
}


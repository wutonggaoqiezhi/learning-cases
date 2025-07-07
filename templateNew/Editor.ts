import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';

import SceneManager from './core/SceneManager'
import RendererManager from './core/RendererManager'
import LoaderManager from './core/LoaderManager'

import { ToolType } from './core/Base/Enum'
import ToolManager from './core/ToolManager';
import PostProcessingManager from './core/PostprocessingManager';

/**
 * camera renderer scene light
 * loader mesh layer listener
*/
export default class Editor {
    dom: HTMLElement
    stats: Stats

    gui: GUI = new GUI({width: 300, title: 'Scene List'})
    sceneFolder: GUI = this.gui.addFolder('Scene Info')
    toolFolder: GUI = this.gui.addFolder('Tool Select')

    currentTool: number = ToolType.None

    sceneManager: SceneManager
    rendererManager: RendererManager
    loaderManager: LoaderManager
    toolManager: ToolManager
    ppManager: PostProcessingManager

    constructor(dom?: HTMLElement | null) {
        if(dom) this.dom = dom

        new LoaderManager(this)
        new SceneManager(this)
        new RendererManager(this)
        new ToolManager(this).active('SelectTool')
        new PostProcessingManager(this)

        this.stats = new Stats()
        this.stats.dom.setAttribute('class', 'stats')
        document.body.appendChild(this.stats.dom)

        window['editor'] = this
        this.animate()

        window.addEventListener('resize', this.onWindowResize.bind(this))
    }

    addGUI() {
        // TODO:将此处gui置于GUI面板最上方
        this.gui.add(this.sceneManager.current, 'name', Array.from(this.sceneManager.sceneMap.keys())).name('Scene Name').onChange((value) => {
            this.sceneManager.switchToScene(this.sceneManager.sceneMap.get(value)!)
        })
    }

    animate() {
        this.rendererManager.current.setAnimationLoop(this.render.bind(this))
    }

    /**
     * 渲染方法
    */
    render() {
        this.stats.update()
        this.sceneManager.current.render()
        this.ppManager.render()
    }

    /**
     * 自适应窗口
    */
    onWindowResize() {
        if( this.sceneManager.current.currentCamera.constructor.name == 'PerspectiveCamera' ) {
            (this.sceneManager.current.currentCamera as THREE.PerspectiveCamera).aspect = window.innerWidth / window.innerHeight
            this.sceneManager.current.currentCamera.updateProjectionMatrix()
        }

        this.rendererManager.current.setSize( window.innerWidth, window.innerHeight )
        this.rendererManager.current.setPixelRatio( window.devicePixelRatio )
    }
}


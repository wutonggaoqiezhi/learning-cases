import SceneManager from './core/SceneManager'
import CameraManager from './core/CameraManager'
import RendererManager from './core/RendererManager'
import ControlsManager from './core/ControlsManager'

/**
 * camera renderer scene light
 * loader mesh layer listener
*/
export default class Editor {
    dom: HTMLElement

    sceneManager: SceneManager
    cameraManager: CameraManager
    rendererManager: RendererManager
    controlsManager: ControlsManager

    constructor(dom?: HTMLElement | null) {
        if(dom) this.dom = dom

        this.sceneManager = new SceneManager(this)
        this.cameraManager = new CameraManager(this)
        this.rendererManager = new RendererManager(this)
        this.controlsManager = new ControlsManager(this)

        window['editor'] = this
        this.animate()
    }

    animate() {
        this.rendererManager.current.setAnimationLoop(this.render.bind(this))
    }

    render() {
        // this.stats.update()
        this.controlsManager.current.update()

        this.rendererManager.current.render( this.sceneManager.current, this.cameraManager.current )
    }
}


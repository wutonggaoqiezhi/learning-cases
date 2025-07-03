import { Clock, Scene, Vector2 } from "three";
import Editor from "../../Editor";
import History from "../History";
import CameraManager from "../CameraManager";
import ControlsManager from "../ControlsManager";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

/**
 * editor 总控
 * sceneManager控制场景切换
 * scene通过BaseScene创建
 * BaseScene包含轨道控制器、GUI、监听函数、历史记录等
*/
export default class BaseScene extends Scene {
    editor: Editor

    gui: GUI
    history: History = new History()

    mouse: Vector2 = new Vector2()

    cameraManager: CameraManager
    controlsManager: ControlsManager

    clock: Clock = new Clock()

    constructor(editor: Editor) {
        super();
        this.editor = editor

        this.cameraManager =  new CameraManager(this)
        this.controlsManager = new ControlsManager(this)

        this.addListener()
    }

    GUI(gui: GUI) {
        this.gui = gui

        return this
    }

    /**
     * 获取当前的camera
    */
    get currentCamera() {
        return this.cameraManager.current
    }

    render() {
        this.editor.rendererManager.current.render(this, this.cameraManager.current)
        this.controlsManager.Orbit.update()
        if( this.controlsManager.Person.enabled ) this.controlsManager.Person.update( this.clock.getDelta() )
    }

    /**
     * 添加鼠标以及键盘的监听
    */
    addListener() {
        window.addEventListener('mousedown', this.onMouseDown.bind(this))
        window.addEventListener('mouseup', this.onMouseUp.bind(this))
        window.addEventListener('mousemove', this.onMouseMove.bind(this))
        window.addEventListener('keydown', this.onKeyDown.bind(this))
        window.addEventListener('keyup', this.onKeyUp.bind(this))
    }

    /**
     * 移除鼠标以及键盘的监听
    */
    removeListener() {
        window.removeEventListener('mousedown', this.onMouseDown.bind(this))
        window.removeEventListener('mouseup', this.onMouseUp.bind(this))
        window.removeEventListener('mousemove', this.onMouseMove.bind(this))
        window.removeEventListener('keydown', this.onKeyDown.bind(this))
        window.removeEventListener('keyup', this.onKeyUp.bind(this))
    }

    onMouseDown(event: MouseEvent) {}

    onMouseUp(event: MouseEvent) {}

    onMouseMove(event: MouseEvent) {
        this.mouse.x = (event.offsetX / this.editor.dom.offsetWidth) * 2 - 1
        this.mouse.y = -(event.offsetY / this.editor.dom.offsetHeight) * 2 + 1
    }

    onKeyDown(event: KeyboardEvent) {
        switch (event.key) {
            case 'r':
            case 'R':
                this.controlsManager.Transform.mode = 'rotate'
                break
            case 's':
            case 'S':
                this.controlsManager.Transform.mode = 'scale'
                break
            case 't':
            case 'T':
                this.controlsManager.Transform.mode = 'translate'
                break
            case 'z':
            case 'Z':
                if(event.ctrlKey) this.history.undo()
                break
            case 'y':
            case 'Y':
                if(event.ctrlKey) this.history.redo()
                break
        }
    }

    onKeyUp(event: KeyboardEvent) {}
}

import { Scene } from "three";
import Editor from "../../Editor";
import History from "../History";
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

    controlsManager: ControlsManager

    constructor(editor: Editor) {
        super();
        this.editor = editor;

        this.controlsManager = new ControlsManager(this)
    }

    GUI(gui: GUI) {
        this.gui = gui

        return this
    }
}

import { OrbitControls } from "three/examples/jsm/Addons.js";
import Editor from "../Editor";
import { Scene } from "three";
import BaseScene from "./Scene/BaseScene";

/**
 * 控制轨道控制器
*/
export default class ControlsManager {
    // editor: Editor
    scene: BaseScene

    all: OrbitControls[]
    current: OrbitControls

    constructor(scene: BaseScene) {
        this.scene = scene

        this.current = this.createControls()
        this.all = [this.current]
    }

    createControls() {
        const controls = new OrbitControls(this.scene.editor.cameraManager.current, this.scene.editor.dom)
        controls.target.set( 0, 0, 0 )

        return controls
    }
}

import { OrbitControls } from "three/examples/jsm/Addons.js";
import Editor from "../Editor";

/**
 * 控制轨道控制器
*/
export default class ControlsManager {
    editor: Editor

    all: OrbitControls[]
    current: OrbitControls

    constructor(editor: Editor) {
        this.editor = editor

        this.current = this.createControls()
        this.all = [this.current]
    }

    createControls() {
        const controls = new OrbitControls(this.editor.cameraManager.current, this.editor.dom)
        controls.target.set( 0, 0, 0 )

        return controls
    }
}

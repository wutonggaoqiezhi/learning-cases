import { Scene } from "three";
import Editor from "../../Editor";

/**
 * editor 总控
 * sceneManager控制场景切换
 * scene通过BaseScene创建
 * BaseScene包含轨道控制器、GUI、监听函数、历史记录等
*/
export default class BaseScene extends Scene {
    editor: Editor;

    constructor(editor: Editor) {
        super();
        this.editor = editor;
    }
}

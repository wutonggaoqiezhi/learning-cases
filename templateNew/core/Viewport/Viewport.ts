import { Scene } from 'three';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Editor from '../../Editor';

export default class Viewport {
    editor: Editor
    scene: Scene
    gui: GUI = new GUI({ width: 300 })
    guiList: any[]

    constructor(scene: Scene, editor?: Editor) {
        this.gui.title('Base Info')
        console.log( this.gui )
        this.scene = scene
        if(editor) this.editor = editor
    }

    init() {
        // 所有viewport都存在的gui选项
        const sceneName = this.gui.add(this.scene, 'name').name('场景名称')
        this.guiList = [sceneName]
    }

    destory() {
        this.gui.destroy()
    }
}

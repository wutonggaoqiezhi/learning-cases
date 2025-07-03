import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Editor from '../Editor';
import BaseScene from './Scene/BaseScene';
import DefaultScene from './Scene/DefaultScene';

/**
 * 场景控制器
 * 场景列表 - 场景切换
*/
export default class SceneManager {
    editor: Editor
    gui: GUI = new GUI({width: 300, title: 'Scene List'})
    guiFolder: GUI = this.gui.addFolder('Scene Info')
    sceneMap: Map<string, BaseScene> = new Map()
    current: BaseScene

    constructor(editor: Editor) {
        this.editor = editor

        this.current = new DefaultScene(editor).GUI(this.guiFolder)
        this.add( this.current )

        // TODO:将此处gui置于GUI面板最上方
        this.gui.add(this.current, 'name', Array.from(this.sceneMap.keys())).name('Scene Name').onChange((value) => {
            this.switchToScene(this.sceneMap.get(value)!)
        })
    }

    /**
     * 添加scene到管理器
    */
    add(scene: BaseScene) {
        if(Array.from(this.sceneMap.keys()).indexOf(scene.name) == -1) {
            this.sceneMap.set(scene.name, scene)
        } else {
            console.warn('already a scene with this name.')
        }
    }

    /**
     * 转换到指定场景
    */
    switchToScene(scene: BaseScene) {
        this.current = scene
    }

    /**
     * 通过场景名字转换到指定场景
    */
    switchToSceneByName(sceneName: string) {
        const scene = this.sceneMap.get(sceneName)
        if(scene) {
            this.current = scene
        } else {
            console.warn('no scene with this name.')
        }
    }
}

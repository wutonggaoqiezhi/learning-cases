import * as THREE from 'three';
import { Scene, GridHelper } from 'three';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Editor from '../Editor';
import ViewportDefault from './Viewport/Viewport.default';
import Viewport from './Viewport/Viewport';

/**
 * 场景控制
*/
export default class SceneManager {
    editor: Editor

    gui: GUI = new GUI({width: 300, title: 'Scene List'})

    sceneMap: Map<string, Scene> = new Map()

    all: Scene[] = []
    current: Scene

    viewport: Viewport

    constructor(editor: Editor) {
        this.editor = editor

        this.default()
        this.sceneMap.set('defaultA', this.test())

        this.gui.add({ name: 'default' }, 'name', Array.from(this.sceneMap.keys())).name('Scene Name').onChange((value) => {
            this.switchToScene(this.sceneMap.get(value)!)
        })
    }

    /**
     * 添加scene到管理器
    */
    add(scene: Scene) {
        if(Array.from(this.sceneMap.keys()).indexOf(scene.name) == -1) {
            this.all.push( scene )
            this.sceneMap.set(scene.name, scene)
        } else {
            console.warn('already a scene with this name.')
        }
    }

    /**
     * 默认场景创建
    */
    default() {
        this.current = new Scene()
        this.current.name = 'default'

        const hdrDir = 'static/images/HDR/'
        this.editor.loaderManager.loadHDR('chinese_garden_1k.hdr', hdrDir).then((texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping
            this.current.background = texture
            this.current.environment = texture
        })

        this.add( this.current )

        // 创建坐标轴辅助器
        const axes = new THREE.AxesHelper(1)
        // 创建地面网格
        const grid = new GridHelper( 20, 40, 0xffffff * Math.random(), 0xffffff )
        grid.material.opacity = 0.2
        grid.material.depthWrite = false
        grid.material.transparent = true

        // this.current.add(axes, grid)

        // this.viewport = new ViewportDefault(this.current, this.editor)
    }

    test() {
        const scene = new Scene()

        // 创建坐标轴辅助器
        const axes = new THREE.AxesHelper(1)
        // 创建地面网格
        const grid = new GridHelper( 20, 40, 0xffffff * Math.random(), 0xffffff )
        grid.material.opacity = 0.2
        grid.material.depthWrite = false
        grid.material.transparent = true

        scene.add(axes, grid)

        return scene
    }

    /**
     * 转换到指定场景
    */
    switchToScene(scene: Scene) {
        if(this.all.indexOf(scene) != -1) {
            this.current = scene
        } else {
            this.all.push( scene )
            this.current = scene
        }
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

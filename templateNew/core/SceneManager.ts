import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Editor from '../Editor';
import BaseScene from './Scene/BaseScene';
import DefaultScene from './Scene/DefaultScene';
import { Ray, Raycaster, Quaternion } from 'three';

/**
 * 场景控制器
 * 场景列表 - 场景切换
 * TODO:想到做的场景
 * 数学 + 三维基础
 *      旋转的各种展示（Euler,rotation,Quaternion,Matrix)以及转换的可视化
 *      矩阵变化
 *      空间索引
 *      计算几何
 *      坐标系转换
 * 材质
 *      纹理压缩
 *      PBR
 * 灯光
 *      光照烘焙
 *      汽车模型灯光实现
 * 渲染
 *      实时渲染性能调优
 *      渲染管线
 *      shader（原理 + 实现）
 *      后处理postpass
 *      lut滤镜
 *      动画
 * 常见的算法实现
 *      数值算法（游戏？？？）
 *      三角剖分算法
 *          delaunay | Lawson算法 | Bowyer-Watson算法
 *          波前法
 *          八叉树方法
 * 模型
 *      支持各种格式的模型加载
 *          ply
 *          glb/gltf
 *              模型压缩
 *          obj
 *          laz/las
 *          fbx
 *          stl
 *          3ds
 *          tiles
 *      模型加载优化
 * 物理引擎
 * WebGPU
 * OpenGL
 * OSG（老旧，待定）
 * Babylon.js
 * canvas
 * webcodecs
 * ffmpeg
 *      视频抽帧
 * ant design pro
 * echarts
 * react（R3F）
*/
export default class SceneManager {
    editor: Editor
    sceneMap: Map<string, BaseScene> = new Map()
    current: BaseScene
    ray: Ray = new Ray()
    caster: Raycaster = new Raycaster()

    constructor(editor: Editor) {
        this.editor = editor

        this.current = new DefaultScene(editor).GUI(this.editor.sceneFolder)
        this.add( this.current )

        editor.sceneManager = this
        editor.addGUI()
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

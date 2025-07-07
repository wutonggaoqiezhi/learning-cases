import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Editor from '../Editor';
import BaseScene from './Scene/BaseScene';
import DefaultScene from './Scene/DefaultScene';
import RotationScene from './Scene/RotationScene';
import { Ray, Raycaster, Quaternion } from 'three';

/**
 * 场景控制器
 * 场景列表 - 场景切换
 * TODO:想到做的场景
 * 数学 + 三维基础
 *      旋转的各种展示（Euler,rotation,Quaternion,Matrix)以及转换的可视化
 *      矩阵变换
 *          视图变换
 *          投影变换
 *          模型变换
 *      计算几何
 *          点和线的基本操作
 *              距离计算：计算点到点、点到线、线到线的距离；
 *              线段相交判断：判断两条线段是否相交；
 *              点的定位：判断点是否在多边形内部、外部或边界上。
 *          凸包问题（Convex Hull）
 *              Gift Wrapping 算法（Jarvis 步进法，时间复杂度 O (nh)，n 为点数，h 为凸包顶点数）；
 *              Graham 扫描法（时间复杂度 O (n log n)）；
 *              QuickHull 算法（类似快速排序，平均时间复杂度 O (n log n)）。
 *          最近点对问题（Closest Pair of Points）
 *              在平面上给定 n 个点，找出距离最近的一对点。常用分治法解决，时间复杂度 O (n log n)。
 *          线段交点问题
 *              计算一组线段中所有的交点。高效算法的时间复杂度为 O ((n + k) log n)，其中 k 是交点数量。
 *          多边形三角剖分（Triangulation）
 *              将一个多边形分解为多个不重叠的三角形。这在计算机图形学中用于渲染复杂形状。
 *          几何查询
 *              范围查询：找出落在给定区域内的所有几何对象；
 *              最近邻查询：找出距离给定点最近的几何对象；
 *              空间索引（如 R 树、四叉树）用于加速这些查询。
 *                  R-Tree
 *                  R+-Tree
 *                  四叉树   Quadtree
 *                  格网索引 Grid Index
 *                  KD 树    KD-Tree
 *                  球树     Ball Tree
 *                  范围树（Range Tree）
 *                  二维点数据 + 附近查询：优先四叉树、格网索引；
 *                  高维复杂形状 + 区域查询：优先 R * 树；
 *                  最近邻查询：优先 KD 树（低维）或球树（高维）。
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

        this.add( new DefaultScene(editor).GUI(this.editor.sceneFolder) )
        
        this.current = new RotationScene(editor).GUI(this.editor.sceneFolder)
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

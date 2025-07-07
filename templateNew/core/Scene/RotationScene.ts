import * as THREE from 'three'
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import Editor from "../../Editor";
import BaseScene from "./BaseScene";
import { GridHelper } from 'three';

/**
 * 通过各种方式操纵Mesh旋转
*/
export default class RotationScene extends BaseScene {
    constructor(editor: Editor) {
        super(editor)

        this.name = 'Rotation'

        // 创建坐标轴辅助器
        const axes = new THREE.AxesHelper(1)
        // 创建地面网格
        const grid = new GridHelper( 20, 40, 0xffffff * Math.random(), 0xffffff )
        grid.material.opacity = 0.2
        grid.material.depthWrite = false
        grid.material.transparent = true

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({
                color: 0xffffff * Math.random(),
                side: THREE.DoubleSide
            })
        )

        this.add(axes, grid, cube)
    }

    /**
     * 设置当前场景的GUI面板
    */
    GUI(gui: GUI) {
        super.GUI(gui)

        return this
    }
}

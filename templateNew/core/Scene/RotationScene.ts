import * as THREE from 'three'
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import Editor from "../../Editor";
import BaseScene from "./BaseScene";
import { GridHelper } from 'three';

/**
 * 通过各种方式操纵Mesh旋转
*/
export default class RotationScene extends BaseScene {
    cube: THREE.Mesh

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

        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            [
                new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() }),
                new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() }),
                new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() }),
                new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() }),
                new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() }),
                new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() }),
            ]
        )

        console.log( this.cube )

        this.add(axes, grid, this.cube)
    }

    /**
     * 设置当前场景的GUI面板
    */
    GUI(gui: GUI) {
        super.GUI(gui)

        const API = {
            EulerX: 0,
            EulerY: 0,
            EulerZ: 0,
        }

        const _Eluer = new THREE.Euler()
        const EulerFunc = (value: number, axes: string) => {
            console.log( axes, value )
            if(axes == 'X') _Eluer.x = value
            if(axes == 'Y') _Eluer.y = value
            if(axes == 'Z') _Eluer.z = value
            this.cube.rotation.copy( _Eluer )
        }

        this.gui.add(this.cube.rotation, 'x', -Math.PI, Math.PI).name('Rotation.x')
        this.gui.add(this.cube.rotation, 'y', -Math.PI, Math.PI).name('Rotation.y')
        this.gui.add(this.cube.rotation, 'z', -Math.PI, Math.PI).name('Rotation.z')

        this.gui.add(API, 'EulerX', -Math.PI, Math.PI).name('Euler.x').onChange( value => EulerFunc(value, 'X') )
        this.gui.add(API, 'EulerY', -Math.PI, Math.PI).name('Euler.y').onChange( value => EulerFunc(value, 'Y') )
        this.gui.add(API, 'EulerZ', -Math.PI, Math.PI).name('Euler.z').onChange( value => EulerFunc(value, 'Z') )

        this.gui.parent.addFolder('Quaternion')
        console.log( this.gui.parent )
        
        return this
    }
}

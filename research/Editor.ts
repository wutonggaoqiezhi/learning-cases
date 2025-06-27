/*
 * @Author: VCheng
 * @Date: 2025-06-21 23:31:37
 * @LastEditors: VCheng
 * @LastEditTime: 2025-06-22 17:17:49
 * @FilePath: \learning-cases\research\Editor.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by vcheng, All Rights Reserved. 
 */
import * as THREE from 'three'
import { PerspectiveCamera } from 'three'
import ViewPort from './ViewPort'

import Loader from './Loader'

export default class Editor {
    scene: THREE.Scene
    camera: PerspectiveCamera
    renderer: THREE.WebGLRenderer
    loader: Loader

    viewport: ViewPort

    meshs: any[] = []

    constructor() {
        this.camera = new PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.0001, 10000 )
        this.camera.position.set(0.2, 0.5, 1)
        this.scene = new THREE.Scene()

        // this.camera.up = new THREE.Vector3(-1, 0, 0)

        const axesHelper = new THREE.AxesHelper(10)
        this.scene.add(axesHelper)

        this.loader = new Loader(this)
        // 中式庭院天空盒
        this.loader.loadHDR('static/images/chinese_garden_1k.hdr').then((texture) => {
            // 设置等距柱状映射
            texture.mapping = THREE.EquirectangularReflectionMapping
            // 设置场景背景
            this.scene.background = texture;
            
            // 设置环境光照（影响物体反射）
            // this.scene.environment = texture;

            console.log('HDR texture loaded:', texture);
            
            // 可选参数调整
            texture.minFilter = THREE.LinearFilter;
        })

        window['editor'] = this
    }

    test() {
        const loader = new THREE.CubeTextureLoader()
        const texture = loader.load([
            'static/images/000001/0.jpg',
            'static/images/000001/1.jpg',
            'static/images/000001/2.jpg',
            'static/images/000001/3.jpg',
            'static/images/000001/4.jpg',
        ])
        const geometry = new THREE.BoxGeometry(10, 10, 10)
        geometry.scale(-1, 1, 1)
        const material = new THREE.MeshBasicMaterial({
            envMap: texture,
            // side: THREE.BackSide,
            // color: 0xffffff
        })
        const cube = new THREE.Mesh(geometry, material)
        this.scene.add(cube)
    }
}


import * as THREE from 'three';
import { Scene, GridHelper } from 'three';

import Editor from '../Editor';

export default class SceneManager {
    editor: Editor

    all: Scene[] = []
    current: Scene

    constructor(editor: Editor) {
        this.editor = editor

        this.current = this.default()
        this.all = [this.current]
    }

    default() {
        const scene = new Scene()
        scene.name = 'default'

        const axes = new THREE.AxesHelper(1)

        const grid = new GridHelper( 20, 40, 0xffffff * Math.random(), 0xffffff )
        grid.material.opacity = 0.2
        grid.material.depthWrite = false
        grid.material.transparent = true

        scene.add(axes, grid)

        return scene
    }
}

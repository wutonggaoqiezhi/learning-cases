import * as THREE from 'three'
import { PerspectiveCamera } from 'three'
import ViewPort from './ViewPort'

import Loader from './Loader'
import { EffectComposer } from 'three/examples/jsm/Addons.js'

export default class Editor {
    scene: THREE.Scene
    camera: PerspectiveCamera
    renderer: THREE.WebGLRenderer
    composer: EffectComposer
    loader: Loader

    viewport: ViewPort

    meshs: any[] = []

    constructor() {
        this.camera = new PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.0001, 10000 )
        this.camera.position.set(-0.2, 0.5, 1)
        this.scene = new THREE.Scene()

        // this.camera.up = new THREE.Vector3(-1, 0, 0)

        const axesHelper = new THREE.AxesHelper(10)
        this.scene.add(axesHelper)

        this.loader = new Loader(this)

        window['editor'] = this
    }
}


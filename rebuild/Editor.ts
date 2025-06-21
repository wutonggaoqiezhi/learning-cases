import * as THREE from 'three'
import { OrthographicCamera, PerspectiveCamera } from 'three'

import { RoomEnvironment } from 'three/examples/jsm/Addons.js'

import axios from 'axios'

import { IModelMsg } from './interface/ModelMsg'
import ModelRenderer from './Model/Model.Render'

import Loader from './Loader'

export default class Editor {
    scene: THREE.Scene
    camera: PerspectiveCamera
    renderer: THREE.WebGLRenderer
    modelRenderer: ModelRenderer
    loader: Loader

    constructor() {
        this.camera = new PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 10000 )
        this.camera.position.set(10, 10, 10)
        this.scene = new THREE.Scene()

        const axesHelper = new THREE.AxesHelper(10)
        this.scene.add(axesHelper)

        this.loader = new Loader(this)
        this.modelRenderer = new ModelRenderer(this)

        window['editor'] = this
    }

    getMsg(url: string = '') {
        // url = './data/Normal.json'
        // url = './data/Inclined.json'
        // url = './data/Panorama.json'
        // url = './data/PointCloud.json'
        // url = './data/Gaussian.json'
        // url = './data/LocalObj.json'
        url = './data/LocalDS.json'
        

        axios.get(url, {headers: {"Cache-Control": "no-cache"}}).then((response) => {
            this.renderModelByMsg(response.data)
        })
    }

    renderModelByMsg(modelMsg: IModelMsg) {
        this.modelRenderer.render(modelMsg)
    }
}


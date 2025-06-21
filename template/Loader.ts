import * as THREE from 'three'
import Editor from "./Editor";

import { GLTFLoader } from './utiles/loader/GLTFLoader' 
import { OBJLoader, MTLLoader, DRACOLoader, KTX2Loader } from "three/examples/jsm/Addons.js";

export default class Loader {
    editor: Editor
    gltfLoader: GLTFLoader
    objLoader: OBJLoader
    mtlLoader: MTLLoader
    dracoLoader: DRACOLoader
    ktx2Loader: KTX2Loader

    constructor(editor: Editor) {
        this.editor = editor

        // TODO: 暂不添加loadingManager
        this.gltfLoader = new GLTFLoader()
        this.objLoader = new OBJLoader()
        this.mtlLoader = new MTLLoader()
        this.dracoLoader = new DRACOLoader()
        this.ktx2Loader = new KTX2Loader()


        // this.dracoLoader.setDecoderPath('libs/draco/gltf/')

        this.gltfLoader.setDRACOLoader(this.dracoLoader)
        this.gltfLoader.setKTX2Loader(this.ktx2Loader)

        this.gltfLoader.setPath('data/')
    }

    async getJson(url: string) {
        return (await fetch(url)).json()
    }

    // 加载gltf文件
    loadGLTF(url: string) {
        return this.gltfLoader.loadAsync(url)
    }
}

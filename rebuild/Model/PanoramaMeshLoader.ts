import { OBJLoader, MTLLoader } from "three/examples/jsm/Addons.js"

export default class PanoramaMeshLoader {
    objLoader: OBJLoader
    mtlLoader: MTLLoader

    constructor() {
        this.objLoader = new OBJLoader()
        this.mtlLoader = new MTLLoader()
    }

    loadOBJ(urls: { mtl: string; obj: string; texture: string }) {
        this.mtlLoader.setResourcePath(`${urls.texture}`)
        return this.mtlLoader.loadAsync(urls.mtl).then((matInfo) => this.objLoader.setMaterials(matInfo).loadAsync(urls.obj))
    }
}

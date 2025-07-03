import { Camera, PerspectiveCamera, OrthographicCamera } from 'three'
import BaseScene from './Scene/BaseScene'

/**
 * 镜头控制
*/
export default class CameraManager {
    scene: BaseScene

    cameraMap: Map<string, Camera> = new Map()
    current: PerspectiveCamera | OrthographicCamera

    constructor(scene: BaseScene) {
        this.scene = scene

        this.current = this.create3DCamera()
    }

    /**
     * 创建透视相机
    */
    create3DCamera(name: string = 'default 3D') {
        const camera = new PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.0001, 10000 )
        camera.position.set(-0.2, 0.5, 1)
        camera.name = name

        this.cameraMap.set(name, camera)
        return camera
    }

    /**
     * 创建正交相机
    */
    create2DCamera(name: string = 'default 2D') {
        const camera = new OrthographicCamera(
            window.innerWidth / - 2, 
            window.innerWidth / 2, 
            window.innerHeight / 2, 
            window.innerHeight / - 2, 
            1, 
            1000
        )
        camera.name = name

        this.cameraMap.set(name, camera)
        return camera
    }

    /**
     * 通过相机名字获取相机
    */
    getCameraByName(name: string) {
        return this.cameraMap.get(name)
    }
}

import * as THREE from 'three'
import { Camera, PerspectiveCamera, OrthographicCamera } from 'three'
import Editor from '../Editor'

/**
 * 镜头控制
*/
export default class CameraManager {
    editor: Editor

    all: Camera[]
    current: PerspectiveCamera | OrthographicCamera

    constructor(editor: Editor) {
        this.editor = editor

        this.current = this.create3DCamera()
        this.all = [this.current]
    }

    create3DCamera() {
        const camera = new PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.0001, 10000 )
        camera.position.set(-0.2, 0.5, 1)
        camera.name = 'default 3D'

        return camera
    }

    create2DCamera() {
        const camera = new OrthographicCamera(
            window.innerWidth / - 2, 
            window.innerWidth / 2, 
            window.innerHeight / 2, 
            window.innerHeight / - 2, 
            1, 
            1000
        )

        return camera
    }
}

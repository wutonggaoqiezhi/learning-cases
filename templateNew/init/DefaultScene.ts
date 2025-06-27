import * as THREE from 'three';
import { Scene } from 'three';

export default class DefaultScene {
    scene: Scene = new Scene()

    constructor() {
        this.scene.name = 'default'
    }
}

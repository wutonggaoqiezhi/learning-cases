import * as THREE from 'three';
import Editor from './Editor';

export default class Scene {
    editor: Editor;
    scene: THREE.Scene;

    constructor(editor: Editor) {
        this.editor = editor;
        this.scene = new THREE.Scene();
        this.init();
    }

    init() {
        // Initialize the scene with basic settings
        this.scene.background = new THREE.Color(0x1b1c1e);
        this.scene.fog = new THREE.FogExp2(0x1b1c1e, 0.01);

        // Add axes helper for debugging
        const axesHelper = new THREE.AxesHelper(10);
        this.scene.add(axesHelper);

        // Set the editor's scene
        this.editor.scene = this.scene;
    }
}
import * as THREE from 'three'

import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls, RoomEnvironment } from 'three/examples/jsm/Addons.js'
import { WebGLRenderer, GridHelper } from 'three'

import Editor from './Editor'

const geometry = new THREE.SphereGeometry(0.001)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})

export default class ViewPort {
    stats: Stats
    dom: HTMLElement | null
    editor: Editor
    controls: OrbitControls
    renderer: WebGLRenderer
    grid: GridHelper

    mouse: THREE.Vector2 = new THREE.Vector2()
    rayCaster: THREE.Raycaster = new THREE.Raycaster()

    activeMesh: THREE.Mesh
    points: THREE.Vector3[] = []

    constructor(editor: Editor, dom: HTMLElement | null) {
        editor.viewport = this
        this.editor = editor
        this.dom = dom

        this.stats = new Stats()
        this.stats.dom.setAttribute('class', 'stats');
        document.body.appendChild(this.stats.dom)

        this.controls = new OrbitControls( this.editor.camera, this.dom )
        this.controls.target.set( 0, 0, 0 )

        this.grid = new GridHelper( 20, 40, 0xff0000, 0xffffff );
        this.grid.material.opacity = 0.2;
        this.grid.material.depthWrite = false;
        this.grid.material.transparent = true;
        // this.editor.scene.add( this.grid );

        this.createRenderer()

        window.addEventListener('resize', this.onWindowResize.bind(this))
        dom?.addEventListener('mousemove', this.onMouseMove.bind(this))
        dom?.addEventListener('mousedown', this.onMouseDown.bind(this))
        dom?.addEventListener('mouseup', this.onMouseUp.bind(this))
    }

    createRenderer() {
        this.renderer = new WebGLRenderer({ antialias: true })
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.localClippingEnabled = true
        this.renderer.xr.enabled = true;
		this.renderer.setClearColor( 0x1b1c1e );

        this.editor.renderer = this.renderer as WebGLRenderer

        this.editor.scene.environment = new THREE.PMREMGenerator( this.renderer ).fromScene(new RoomEnvironment()).texture as THREE.Texture

        (this.dom as HTMLElement).appendChild( this.renderer.domElement )

        this.animate()
    }

    animate() {
        this.renderer.setAnimationLoop(this.render.bind(this));
    }

    render() {
        // 射线
        this.rayCaster.setFromCamera(this.mouse, this.editor.camera)

        this.stats.update()
        this.controls.update()

        this.renderer.render( this.editor.scene, this.editor.camera )
    }
    
    onWindowResize() {
        this.editor.camera.aspect = window.innerWidth / window.innerHeight;
        this.editor.camera.updateProjectionMatrix();

        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }

    onMouseMove(event) {
        event.preventDefault()

        this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
        this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1
    }

    setActiveMesh(mesh: THREE.Mesh) {
        this.activeMesh = mesh
    }

    createSphere( position ) {
        const sphere = new THREE.Mesh(geometry, material)
        sphere.position.copy(position)
        this.editor.scene.add(sphere)
    }
      
    onMouseDown(event: MouseEvent) {
        event.preventDefault()
    }

    onMouseUp(event) {
        event.preventDefault()
    }
}


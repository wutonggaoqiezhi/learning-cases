import * as THREE from 'three'

import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d'

import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls, RoomEnvironment } from 'three/examples/jsm/Addons.js'
import { WebGLRenderer, GridHelper, AmbientLight } from 'three'

import Editor from './Editor'
import PanoramaMesh from './Model/PanoramaMesh'

export default class ViewPort {
    stats: Stats
    dom: HTMLElement | null
    editor: Editor
    controls: OrbitControls
    renderer: WebGLRenderer
    grid: GridHelper

    tmpVarible: any[] = []

    mouse: THREE.Vector2 = new THREE.Vector2()
    rayCaster: THREE.Raycaster = new THREE.Raycaster()

    panoCube: THREE.Mesh

    constructor(editor: Editor, dom: HTMLElement | null) {
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

        // const light = new AmbientLight( 0xffffff )
        // const dirLight = new THREE.DirectionalLight(0xffffff, 10)
        // this.editor.scene.add( light, dirLight )

        this.panoCube = new THREE.Mesh(new THREE.BoxGeometry(100,100,100), new THREE.MeshBasicMaterial({color: 0xff00ff}))
        // this.panoCube.geometry.scale(1, 1, 1)
        this.editor.scene.add(this.panoCube)

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

        // const viewer = new GaussianSplats3D.Viewer({
        //     'threeScene': this.editor.scene,
        // });
        // viewer.addSplatScene('https://3d-test.hzdingmao.com/statics/1dcead97-9d81-4beb-bf1a-3a475cc11b62&splat/gs_Gui.ply')
        // .then(() => {
        //     viewer.start();
        // });

        this.animate()
    }

    animate() {
        this.renderer.setAnimationLoop(this.render.bind(this));
    }

    render() {
        if(this.tmpVarible.length) {
            console.log('tmpVarible - ', this.tmpVarible)
            this.tmpVarible.forEach((item) => {
                item.update(this.editor.camera, this.renderer.domElement.width, this.renderer.domElement.height)
            })
        }
        // tiles渲染 - 倾斜模型
        if(this.editor.loader.tiles.length) {
            this.editor.loader.tiles.forEach((tile) => {
                tile.update()
            })
        }
        
        // pointCloud渲染 - 点云模型
        if(this.editor.loader.pointClouds.length) {
            this.editor.loader.pointCloudLoader.updatePointClouds(
                this.editor.loader.pointClouds, 
                this.editor.camera, 
                this.renderer
            )
        }

        // ply渲染 - 高斯模型
        if(this.editor.loader.gsMeshes.length > 0) {
            for (let i = 0; i < this.editor.loader.gsMeshes.length; i++) {
                const element = this.editor.loader.gsMeshes[i];
                element.update(this.editor.camera, this.renderer.domElement.width, this.renderer.domElement.height)
            }
        }

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

    onMouseDown(event) {
        event.preventDefault()

        // 全景图切换场景
        let panoramaMesh = this.getPanoramaMesh()
        if( panoramaMesh ) {
            const instancedPanorama = panoramaMesh.instancedPanorama
            const intersection = this.rayCaster.intersectObject( instancedPanorama.mesh )
            if(intersection.length > 0) {
                const instanceId = intersection[ 0 ].instanceId as number
                console.log(instancedPanorama.infoArr[instanceId])
                instancedPanorama.mesh.setColorAt( instanceId, new THREE.Color().setHex( Math.random() * 0xffffff ) );
                (instancedPanorama.mesh.instanceColor as THREE.InstancedBufferAttribute).needsUpdate = true

                const mat = new THREE.Matrix4()
                instancedPanorama.mesh.getMatrixAt(instanceId, mat)
                const position = new THREE.Vector3()
                const quaternion = new THREE.Quaternion()
                const scale = new THREE.Vector3()
                mat.decompose(position, quaternion, scale)
                this.editor.camera.position.copy(position)
                this.editor.camera.position.y += 1.6
                this.controls.target.copy(position)
                // this.controls.enableZoom = false

                this.generatePano(position, instancedPanorama.infoArr[instanceId])
            }
        }
    }

    onMouseUp(event) {
        event.preventDefault()
    }

    // 获取全景模型PanoramaMesh，从而获取到该Mesh的instacedMesh
    getPanoramaMesh() {
        return this.editor.scene.children.filter((obj) => {
            return obj instanceof PanoramaMesh
        })[0]
    }

    generatePano(position, info) {
        this.panoCube.position.copy(position)
        this.panoCube.position.y += 1.6
        const loader = new THREE.CubeTextureLoader()
        loader.setPath('data/DS5/')
        // DS5 [info.back, info.front, info.left, info.right, info.up, info.down]
        // DS5 [info.back, info.up, info.left, info.right, info.front, info.down]
        const text = loader.load([info.back, info.front, info.left, info.right, info.up, info.down], () => {
            console.log('onload')
        }, () => {
            console.log('onprocess')
        },(err) => {
            console.log('err - ', err)
        })
        // text.repeat.set(1,1)
        text.wrapS = THREE.RepeatWrapping
        // text.wrapS = THREE.MirroredRepeatWrapping
        // text.repeat.x = -1
        text.wrapT = THREE.RepeatWrapping
        text.generateMipmaps = false
        text.magFilter = THREE.NearestFilter
        text.minFilter = THREE.NearestFilter
        // text.rotation = Math.PI / 2
        // text.flipY = true
        text.needsUpdate = true
        this.panoCube.material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            envMap: text,
            side: THREE.DoubleSide,
            // envMapRotation: new THREE.Euler(0, -Math.PI, 0),
            depthTest: false
        })
        
        // const quaternion = new THREE.Quaternion(info.quaternion.x, info.quaternion.z, -info.quaternion.y, info.quaternion.w)
        // this.panoCube.geometry.applyQuaternion(quaternion)
        console.log('panoCube - ', this.panoCube)
    }
}


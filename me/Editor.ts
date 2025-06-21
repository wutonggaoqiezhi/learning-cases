import * as THREE from 'three'
import { OrthographicCamera, PerspectiveCamera } from 'three'

import { RoomEnvironment } from 'three/examples/jsm/Addons.js'

import axios from 'axios'
import ViewPort from './ViewPort'

import { ModelRenderer } from './Model/Model.renderer'
import Loader from './Loader'

import LineHelper from './helper/LineHelper'

import { ConvexGeometry } from 'three/examples/jsm/Addons.js'
import { ModelDiffer } from './Model/Model.diff'
import PointHelper from './helper/PointHelper'

export default class Editor {
    scene: THREE.Scene
    camera: PerspectiveCamera
    renderer: THREE.WebGLRenderer
    modelRenderer: ModelRenderer
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
        this.modelRenderer = new ModelRenderer(this)

        window['editor'] = this
    }

    renderByUrl(uri: string) {
        const scale = 0.05

        const material = new THREE.MeshBasicMaterial({color: 0xff0000})
        const createSphere = ( position, size = 0.001 ) => {
            const geometry = new THREE.SphereGeometry(size)
            const sphere = new THREE.Mesh(geometry, material)
            sphere.position.copy(position)
            this.scene.add(sphere)
        }

        const makeCSG = (convexPoints, mesh) => {
            const geom = new ConvexGeometry(convexPoints)
            const convexMesh = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({color: 0xff00ff}))

            const position = convexMesh.geometry.attributes.position
            const uvs: number[] = []
            for(let i = 0;i < position.count;i++) {
                const x = position.getX(i)
                const y = position.getY(i)
                const z = position.getZ(i)

                const u = (x + 1) / 2
                const v = (z + 1) / 2
                uvs.push(u, v);
            }

            convexMesh.geometry.setAttribute(
                "uv",
                new THREE.BufferAttribute(new Float32Array(uvs), 2)
            )

            const modelDiffer = new ModelDiffer()
            const res = modelDiffer.active(convexMesh, mesh)

            const groups = res.geometry.groups
            const start = (groups[0].count < groups[1].count) ? groups[0].count : groups[1].count
            res.geometry.drawRange.start = start

            const newMesh = new THREE.Mesh(res.geometry, (mesh as THREE.Mesh).material)
            this.scene.add(newMesh)
        }

        this.loader.loadGLTF(uri).then((gltf) => {
            const mesh = gltf.scene.children[0]
            // this.scene.add(mesh)
            // console.log('mesh - ', mesh)
            this.meshs.push(mesh)
            this.viewport.setActiveMesh(mesh as THREE.Mesh)

            const center = new THREE.Vector3()
            const box = new THREE.Box3().setFromObject(mesh)
            box.getCenter(center)

            // createSphere(center, 0.01)

            const storage = JSON.parse(localStorage.getItem('points') as string)

            const convexPoints = PointHelper.expandPointsA(storage, this.scene)
            makeCSG(convexPoints, mesh)
            return

            // const  convexPoints: THREE.Vector3[] = []

            for(let i = 0;i < storage.length;i++) {
                const prevPoint = (i == 0) ? storage[storage.length - 1] : storage[i - 1]
                const nextPoint = (i == storage.length - 1) ? storage[0] : storage[i + 1]
                // this.scene.add(LineHelper.drawLine(storage[i], nextPoint)) 

                const prevVertex = new THREE.Vector3(prevPoint.x, prevPoint.y, prevPoint.z)
                const currVertex = new THREE.Vector3(storage[i].x, storage[i].y, storage[i].z)
                const nextVertex = new THREE.Vector3(nextPoint.x, nextPoint.y, nextPoint.z)
                
                createSphere(currVertex)

                const vecA = prevVertex.clone().sub(currVertex)
                const vecB = nextVertex.clone().sub(currVertex)

                const crossVec = vecA.clone().cross(vecB).negate()

                const crossVertexA = currVertex.clone().add(crossVec.clone().setLength(0.03))
                const crossVertexB = nextVertex.clone().add(crossVec.clone().setLength(0.03))

                convexPoints.push(currVertex, crossVertexA, crossVertexB)
                // this.scene.add(LineHelper.drawLine(currVertex, crossVertexA))
                // this.scene.add(LineHelper.drawLine(nextVertex, crossVertexB))
            }

            const geom = new ConvexGeometry(convexPoints)
            const convexMesh = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({color: 0xff00ff}))
            // this.scene.add(convexMesh)

            const tempFrame = new THREE.LineSegments( new THREE.WireframeGeometry(convexMesh.geometry) );
            (tempFrame.material as THREE.Material).depthTest = false
            this.scene.add(tempFrame)

            const position = convexMesh.geometry.attributes.position
            const uvs: number[] = []
            for(let i = 0;i < position.count;i++) {
                const x = position.getX(i)
                const y = position.getY(i)
                const z = position.getZ(i)

                const u = (x + 1) / 2
                const v = (z + 1) / 2
                uvs.push(u, v);
            }

            convexMesh.geometry.setAttribute(
                "uv",
                new THREE.BufferAttribute(new Float32Array(uvs), 2)
            );

            const modelDiffer = new ModelDiffer()
            const res = modelDiffer.active(convexMesh, mesh)

            console.log('geom - ', res.geometry)
            // res.geometry.groups.splice(0, 1)
            // res.geometry.drawRange.start = 6300

            const newMesh = new THREE.Mesh(res.geometry, (mesh as THREE.Mesh).material)
            this.scene.add(newMesh)
        })
    }

    computeTriangleArea() {}
}


import * as THREE from 'three'
import { PanoramaResource } from '../interface/ModelMsg'
import PanoramaMesh from './PanoramaMesh'

const geometry = new THREE.CircleGeometry(0.1, 20, 20)
geometry.rotateX(-0.5 * Math.PI)
// geometry.rotateY(-0.5 * Math.PI)

const panoMarker = new THREE.Texture()
panoMarker.image = new Image()
panoMarker.image.setAttribute('crossOrigin', 'anonymous')
panoMarker.image.src = 'https://dev-3d.oss-cn-hangzhou.aliyuncs.com/texture/panoMarker.png'
panoMarker.image.onload = (event) => {
    panoMarker.needsUpdate = true
}

const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, map: panoMarker })

// 站立位置小圆盘？
export class Panorama extends THREE.Object3D {
    readonly isPanorama = true
    resource: PanoramaResource
  
    mesh: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>
    cubeTexture: THREE.CubeTexture
    panoTexture: THREE.Texture
  
    constructor() {
        super()
    }
  
    load(resource: PanoramaResource) {
        this.resource = resource
        this.name = resource.name
        this.uuid = resource.panoramaId
        this.position.fromArray(this.resource.position)
        this.quaternion.set(
            this.resource.quaternion.x, 
            this.resource.quaternion.y, 
            this.resource.quaternion.z, 
            this.resource.quaternion.w
        )   // TODO 完善数据结构

        this.build()
    }
  
    build() {
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.userData.isPanoramaMaker = true
        this.mesh.userData.panoramaId = this.uuid

        //TODO: 关于floorHeight，为地面相对镜头的高度差，数据来自于硬件规格，影响地板上的UI高度。
        //非必要数据，可以考虑替换/升级交互方式
        const floorHeight = -1.3

        this.mesh.position.set(0, floorHeight,0).applyQuaternion(this.quaternion.clone().invert())
        this.mesh.quaternion.copy(this.quaternion).invert()
        this.mesh.renderOrder = 100

        this.add(this.mesh)
    }
  
    // isReadyToView() {
    //   return !!this.panoTexture
    // }
  
    loadTexture() {
        const resourceManager = window['editor'].loader
        const { front, back, left, right, up, down } = this.resource
        const urls = [right, left, up, down, front, back].map((item) => THREE.LoaderUtils.resolveURL(item, this.resource.resourcePath))

        if (this.panoTexture) {
            return Promise.resolve(this.panoTexture)
        } else {
            return resourceManager.loadCubeMap(urls).then((texture) => {
                this.panoTexture = texture
                return texture
            })
        }
    }
  
    // disposeTexture() {
  
    //   this.panoTexture.dispose()
  
    // }
  
    // setActive(active: boolean) {
  
    //   this.mesh.material.opacity = active ? 0 : 1
  
    // }
}

// 使用InstancedMesh生成小圆盘
export class InstancedPanorama {
    panoramaMesh: PanoramaMesh
    mesh: THREE.InstancedMesh
    infoArr: any[] = []
    matrix: THREE.Matrix4 = new THREE.Matrix4()
    vec3: THREE.Vector3 = new THREE.Vector3()

    constructor(panoramaMesh: PanoramaMesh, count: number) {
        this.panoramaMesh = panoramaMesh
        this.mesh = new THREE.InstancedMesh( geometry, material, count )
        this.mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage )

        panoramaMesh.instancedPanorama = this
    }

    parseInfo(info: any, index: number) {
        console.log('info - ', index, info)
        this.vec3.fromArray(info.position)
        this.vec3.add(this.panoramaMesh.position)
        this.vec3.x += 16.950000
        this.vec3.y += 4.920000
        this.vec3.z += 4.180000

        this.vec3.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2))
        this.vec3.y -= 1.7
        this.mesh.setMatrixAt( index, this.matrix.setPosition(this.vec3) )
        this.infoArr.push(info)

        // let quaternion = new THREE.Quaternion(info.quaternion.x, info.quaternion.y, info.quaternion.z, info.quaternion.w)
        // this.vec3.set(0, 1.3, 0).applyQuaternion(quaternion.clone().invert())
        // quaternion.invert()
        // this.matrix.setPosition(this.vec3)
        // this.matrix.makeRotationFromQuaternion(quaternion)
        // this.mesh.setMatrixAt( index, this.matrix )
    }

    // 生成全景
    generatePanorama() {}
}


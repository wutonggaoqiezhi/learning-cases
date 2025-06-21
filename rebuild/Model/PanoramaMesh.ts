import * as THREE from 'three'

import { InstancedPanorama, Panorama } from './Panorama'
import PanoramaMeshLoader from './PanoramaMeshLoader'
import PanoramaMeshChunk from './PanoramaMeshChunk'
import { PanoramaMeshResource } from '../interface/ModelMsg'
import PanoramaMeshMaterial from './PanoramaMeshMaterial'

//model
function isMesh(object: unknown): object is THREE.Mesh {
    return (<THREE.Mesh>object).isMesh
}

// 全景模型
export default class PanoramaMesh extends THREE.Object3D {
    loader: PanoramaMeshLoader
    panos: Panorama[] = []

    chunks: PanoramaMeshChunk[] = []             // 直接访问children?

    instancedPanorama: InstancedPanorama
  
    constructor() {
        super()
        this.loader = new PanoramaMeshLoader()
    }
  
    load(panoMeshResource: PanoramaMeshResource, callback?: Function) {
        const objFile = THREE.LoaderUtils.resolveURL(panoMeshResource.objFile, panoMeshResource.resourcePath)
        const mtlFile = THREE.LoaderUtils.resolveURL(panoMeshResource.mtlFile, panoMeshResource.resourcePath)
        const textDir = THREE.LoaderUtils.resolveURL(panoMeshResource.textureDir, panoMeshResource.resourcePath)

        this.loader.loadOBJ({ obj: objFile, mtl: mtlFile, texture: textDir }).then((objgroup) => {
            objgroup.traverse((item) => {
                if (isMesh(item)) {
                    item.geometry.rotateX(-Math.PI) //FIXME 多元融合时把定位梳理一遍

                    let material: PanoramaMeshMaterial | PanoramaMeshMaterial[]

                    if (Array.isArray(item.material)) {
                        //item.material.forEach(item => item.dispose())
                        // material = item.material.map((mat: THREE.MeshPhongMaterial) => new PanoramaMeshMaterial(false, mat.map))
                        material = item.material.map((mat) => new PanoramaMeshMaterial(false, ((mat as THREE.MeshPhongMaterial).map) as THREE.Texture))
                    } else {
                        // item.material.dispose()
                        // material = new PanoramaMeshMaterial(false, (item.material as THREE.MeshPhongMaterial).map)
                        material = new PanoramaMeshMaterial(false, (item.material as THREE.MeshPhongMaterial).map as THREE.Texture)
                    }
                    const chunk = new PanoramaMeshChunk(item.geometry, material)
                    chunk.renderOrder = 100
                    this.add(chunk)
                    this.chunks.push(chunk)
                }
            })

            if (callback) {
                callback(this)
            }
        })
    }

    async test(index, count, panoMeshResource) {
        const content = index.toString().padStart(3, '0')
        const objFile = THREE.LoaderUtils.resolveURL(`${content}/${content}.obj`, panoMeshResource.resourcePath)
        const mtlFile = THREE.LoaderUtils.resolveURL(`${content}/${content}.mtl`, panoMeshResource.resourcePath)
        const textDir = THREE.LoaderUtils.resolveURL(`${content}/`, panoMeshResource.resourcePath)
        this.loader.loadOBJ({obj: objFile, mtl: mtlFile, texture: textDir}).then((objgroup) => {
            objgroup.traverse((item) => {
                if(isMesh(item)) {
                    item.geometry.rotateX(-Math.PI / 2)
                    let material: PanoramaMeshMaterial | PanoramaMeshMaterial[]
                    if(Array.isArray(item.material)) {
                        material = item.material.map((mat) => new PanoramaMeshMaterial(false, ((mat as THREE.MeshPhongMaterial).map) as THREE.Texture))
                    } else {
                        material = new PanoramaMeshMaterial(false, (item.material as THREE.MeshPhongMaterial).map as THREE.Texture)
                    }
                    const chunk = new PanoramaMeshChunk(item.geometry, material)
                    this.add(chunk)
                    this.chunks.push(chunk)
                }
            })
        })
    }

    loadDS(panoMeshResource: PanoramaMeshResource, callback?: Function) {
        const activeFunc = (index: number = 0) => {
            const content = index.toString().padStart(3, '0')
            const objFile = THREE.LoaderUtils.resolveURL(`${content}/${content}.obj`, panoMeshResource.resourcePath)
            const mtlFile = THREE.LoaderUtils.resolveURL(`${content}/${content}.mtl`, panoMeshResource.resourcePath)
            const textDir = THREE.LoaderUtils.resolveURL(`${content}/`, panoMeshResource.resourcePath)

            this.loader.loadOBJ({obj: objFile, mtl: mtlFile, texture: textDir}).then((objgroup) => {
                objgroup.traverse((item) => {
                    if(isMesh(item)) {
                        item.geometry.rotateX(-Math.PI / 2)
                        let material: PanoramaMeshMaterial | PanoramaMeshMaterial[]
                        if(Array.isArray(item.material)) {
                            material = item.material.map((mat) => new PanoramaMeshMaterial(false, ((mat as THREE.MeshPhongMaterial).map) as THREE.Texture))
                        } else {
                            material = new PanoramaMeshMaterial(false, (item.material as THREE.MeshPhongMaterial).map as THREE.Texture)
                        }
                        const chunk = new PanoramaMeshChunk(item.geometry, material)
                        this.add(chunk)
                        this.chunks.push(chunk)
                    }

                    if(index + 1 < panoMeshResource.subContent!) {
                        activeFunc(index + 1)
                    } else {
                        if(callback) callback(this)
                    }
                })
            })
        }
        activeFunc()
    }
  
    private applyChunksOperator(operator: (chunk: PanoramaMeshChunk) => void) {
  
      this.chunks.forEach(item => operator(item))
  
    }
  
    setView0(panorama: Panorama) {
  
      this.applyChunksOperator(chunk => chunk.setView0(panorama))
  
    }
  
    // setView1(panorama: Panorama) {
  
    //   this.applyChunksOperator(chunk => chunk.setView1(panorama))
  
    // }
  
  
    // setOpacity(opacity: number) {
  
    //   this.applyChunksOperator(chunk => chunk.setOpacity(opacity))
  
    // }
  
  
    // setBrightness(value: number) {
  
    //   this.applyChunksOperator(chunk => chunk.setBrightness(value))
  
    // }
  
    // setContrast(value: number) {
  
    //   this.applyChunksOperator(chunk => chunk.setContrast(value))
  
    // }
  
    // setSaturation(value: number) {
  
    //   this.applyChunksOperator(chunk => chunk.setSaturation(value))
  
    // }
  
  
    // setDarkEnhance(value: number) {
  
    //   this.applyChunksOperator(chunk => chunk.setDarkEnhance(value))
  
    // }
  
    // setHighlightEnhance(value: number) {
  
    //   this.applyChunksOperator(chunk => chunk.setDarkEnhance(value))
  
    // }
  
    // setClippingPlanes(clippingPlanes: THREE.Plane[]) {
  
    //   this.applyChunksOperator(chunk => chunk.setClippingPlanes(clippingPlanes))
    // }
  
    // setClipIntersection(interesction: boolean) {
  
    //   this.applyChunksOperator(chunk => chunk.setClipIntersection(interesction))
    // }
  
    // setClippingOpacity(opacity: number) {
    //   this.applyChunksOperator(chunk => chunk.setClippingOpacity(opacity))
    // }
  }
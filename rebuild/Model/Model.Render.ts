import * as THREE from 'three'
import lodash from 'lodash'

import { Group, Mesh, Object3D, Scene } from 'three'

import Editor from '../Editor'
import { EModelType, IModelMsg, PanoramaMeshResource } from '../interface/ModelMsg'

import { Panorama, InstancedPanorama } from './Panorama'
import PanoramaMesh from './PanoramaMesh'

export default class ModelRenderer {
    editor: Editor
    modelMsg: IModelMsg
    parent: Group | Mesh | Object3D | Scene
    meshArr: any[] = []         // TODO - 存储加载模型生成的Mesh
    panos: Panorama[] = []      // 存储每个Panorama

    constructor(editor: Editor) {
        this.editor = editor
        this.parent = this.editor.scene
    }

    render(modelMsg: IModelMsg) {
        this.modelMsg = modelMsg
        console.log('modelMsg - ', modelMsg)

        if(this.modelMsg.modelType === EModelType.Normal) this.renderNormal()
        if(this.modelMsg.modelType === EModelType.Panorama) this.renderPanorama()
        if(this.modelMsg.modelType === EModelType.Inclined) this.renderInclined()
        if(this.modelMsg.modelType === EModelType.PointTree) this.renderPointCloud()
        if(this.modelMsg.modelType === EModelType.GaussianSplatting) this.renderGaussian()
        // if(this.modelMsg.modelType === EModelType.BaseMap) this.renderMap()
        if(this.modelMsg.modelType === EModelType.LocalObj) this.renderLocalObj()
        if(this.modelMsg.modelType === EModelType.LocalDS) this.renderDS()
    }

    // 渲染常规模型
    renderNormal() {
        const resourceFile = THREE.LoaderUtils.resolveURL(this.modelMsg.modelPath, this.modelMsg.resourcePath)

        this.editor.loader.loadGLTF(resourceFile).then((gltf) => {
            this.parent.add(gltf.scene)

            const { center } = this.getBoxInfo(gltf.scene)
            gltf.scene.position.copy(center.multiplyScalar(-1))
        })
    }

    // 渲染倾斜模型
    renderInclined() {
        const resourceFile = THREE.LoaderUtils.resolveURL(this.modelMsg.modelPath, this.modelMsg.resourcePath)

        this.editor.loader.loadTile(resourceFile).then((tile) => {
            this.parent.add(tile.group)

            // tile.onTileVisibilityChange = (scene) => {
            //     Model.applyOpacity(scene, this.modelMsg.opacity)
            // }

            tile.onLoadModel = (scene) => {
                scene.traverse(item => {
                    item.renderOrder = 100
                })
            }
        })
    }

    // 渲染点云模型
    renderPointCloud() {
        const resourceFile = this.modelMsg.modelPath + '/metadata.json'

        this.editor.loader.loadPointCloud(resourceFile).then((pointTree) => {
            this.parent.add(pointTree)

            pointTree.material.opacity = this.modelMsg.opacity
        })
    }

    // 渲染全景图的obj
    renderPanorama() {
        const panoMeshResource = new PanoramaMeshResource()
        panoMeshResource.resourcePath = `${this.modelMsg.resourcePath}/`
        panoMeshResource.mtlFile = 'obj/output_00.mtl' //FIXEME hack
        panoMeshResource.objFile = 'obj/output_00.obj' //FIXEME hack
        panoMeshResource.textureDir = 'obj/'           //FIXEME hack

        const panoramaMesh = new PanoramaMesh()
        panoramaMesh.load(panoMeshResource, (panoMesh: PanoramaMesh) => {
            // const {center, size} = this.getBoxInfo(panoMesh)
            // panoMesh.position.copy(center.multiplyScalar(-1))
            // panoMesh.position.y += size.y / 2
            console.log('panoramaMesh.load')
            this.generatePanorama(panoramaMesh)
        })
        panoramaMesh.renderOrder = 100

        this.parent.add(panoramaMesh)
    }

    // 测试大势新数据渲染
    async renderDS() {
        const panoMeshResource = new PanoramaMeshResource()
        panoMeshResource.resourcePath = `${this.modelMsg.resourcePath}/`
        // panoMeshResource.subContent = this.modelMsg.subContent

        this.modelMsg.panoramaChildren = await this.editor.loader.getJson(`${this.modelMsg.modelPath}/panorama.json`)
        // this.modelMsg.panoramaChildren??[].forEach((item) => {})
        panoMeshResource.subContent = this.modelMsg.panoramaChildren![0].subContent

        const panoramaMesh = new PanoramaMesh()
        panoramaMesh.loadDS(panoMeshResource, (panoMesh: PanoramaMesh) => {
            console.log('after loadDS')
            this.generatePanorama(panoramaMesh)
        })
        panoramaMesh.renderOrder = 100

        this.parent.add(panoramaMesh)
    }

    // 生成全景点标识 - 全景
    generatePanorama(panoramaMesh: PanoramaMesh) {
        const panoramaModelDataResource = lodash.cloneDeep(this.modelMsg) as any
        panoramaModelDataResource.mesh = new PanoramaMeshResource()
        panoramaModelDataResource.mesh.resourcePath = `${panoramaModelDataResource.resourcePath}/`
        panoramaModelDataResource.mesh.mtlFile = 'obj/output_00.mtl' //FIXEME hack
        panoramaModelDataResource.mesh.objFile = 'obj/output_00.obj' //FIXEME hack
        panoramaModelDataResource.mesh.textureDir = 'obj/'           //FIXEME hack

        // 使用InstancedMesh生成全景点
        const instancedPanorama = new InstancedPanorama(panoramaMesh, this.modelMsg.panoramaChildren!.length)
        this.parent.add(instancedPanorama.mesh)
        console.log(instancedPanorama)

        panoramaModelDataResource.panoramaChildren.forEach((panoRes: any, index: number) => {
            instancedPanorama.parseInfo(panoRes, index)     // 通过每个全景点的信息设置全景点位置
            
            // panoRes.resourcePath = `${panoramaModelDataResource.resourcePath}/`
            // const panorama = new Panorama()
            // panorama.load(panoRes)
            // panorama.visible = false

            // this.parent.add(panorama)           // 加入场景但不可见，需要时调整visible属性即可
            // panoramaMesh.panos.push(panorama)   // 存入相关panoramaMesh中

            // panorama.traverse((object: any) => {
            //     object.name = 'enableRay|panorama|' + panoRes.panoramaId
            // })
        })
        // panoramaMesh.panos[0].loadTexture().then(() => {
        //     console.log(panoramaMesh.panos[0])
        //     panoramaMesh.setView0(panoramaMesh.panos[0])
        // })
    }

    // 渲染高斯模型
    renderGaussian() {
        const resourceFile = THREE.LoaderUtils.resolveURL(this.modelMsg.modelPath, this.modelMsg.resourcePath)

        this.editor.loader.loadGaussianSplatting(resourceFile).then((gsModel) => {
            this.parent.add(gsModel)
        })
    }

    // 获取模型盒子信息
    getBoxInfo(mesh) {
        let box = new THREE.Box3().setFromObject(mesh)
        let center = new THREE.Vector3()
        let size = new THREE.Vector3()
        box.getCenter(center)
        box.getSize(size)

        return { center, size }
    }

    // 本地测试渲染obj
    renderLocalObj() {
        console.log('renderLocalObj')

        let fileName = 'Tile_+000_+001'

        const panoMeshResource = new PanoramaMeshResource()
        panoMeshResource.resourcePath = `${this.modelMsg.resourcePath}/`
        panoMeshResource.mtlFile = `${fileName}/${fileName}.mtl` //FIXEME hack
        panoMeshResource.objFile = `${fileName}/${fileName}.obj` //FIXEME hack
        panoMeshResource.textureDir = `${fileName}/`           //FIXEME hack
        
        const panoramaMesh = new PanoramaMesh()
        panoramaMesh.load(panoMeshResource, (panoMesh: PanoramaMesh) => {
            console.log('loading complete')
        })
        panoramaMesh.rotateX(Math.PI / 2)
        this.parent.add(panoramaMesh)
    }
}

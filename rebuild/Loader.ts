import * as THREE from 'three'
import Editor from "./Editor";

import { GLTFLoader } from './utils/loader/GLTFLoader' 
import { OBJLoader, MTLLoader, DRACOLoader, KTX2Loader } from "three/examples/jsm/Addons.js";
import { TilesRenderer, LRUCache, WGS84_ELLIPSOID } from "3d-tiles-renderer";
import { Potree, PointCloudOctree } from 'potree-core';

import { GaussianSplattingMesh, GSPLYLoader } from './utils/gaussian-splatting'

export default class Loader {
    editor: Editor
    gltfLoader: GLTFLoader
    objLoader: OBJLoader
    mtlLoader: MTLLoader
    dracoLoader: DRACOLoader
    ktx2Loader: KTX2Loader

    cubeTextureloader: THREE.CubeTextureLoader

    pointCloudLoader: Potree
    pointClouds: PointCloudOctree[] = []

    tiles: TilesRenderer[] = []
    tilesCache: LRUCache

    gsLoader: GSPLYLoader
    gsMeshes: GaussianSplattingMesh[] = []

    constructor(editor: Editor) {
        this.editor = editor

        // TODO: 暂不添加loadingManager
        this.gltfLoader = new GLTFLoader()
        this.objLoader = new OBJLoader()
        this.mtlLoader = new MTLLoader()
        this.dracoLoader = new DRACOLoader()
        this.ktx2Loader = new KTX2Loader()

        this.cubeTextureloader = new THREE.CubeTextureLoader()

        this.dracoLoader.setDecoderPath('libs/draco/gltf/')

        this.tilesCache = new LRUCache()
        this.tilesCache.minSize = 400
        this.tilesCache.maxSize = 600

        this.gltfLoader.setDRACOLoader(this.dracoLoader)
        this.gltfLoader.setKTX2Loader(this.ktx2Loader)

        this.pointCloudLoader = new Potree()
        this.pointCloudLoader.pointBudget = 10000000            //没经过压力测试

        this.gsLoader = new GSPLYLoader()
    }

    async getJson(url: string) {
        return (await fetch(url)).json()
    }

    // 加载材质map贴图
    loadCubeMap(url: string[]) {
        return this.cubeTextureloader.loadAsync(url)
    }

    // 加载gltf文件
    loadGLTF(url: string) {
        return this.gltfLoader.loadAsync(url)
    }

    // 加载tiles文件
    loadTile(url: string) {
        const renderCamera = this.editor.camera
        const renderer = this.editor.renderer

        const tile = new TilesRenderer(url)
        tile.manager.addHandler(/\.drc$/, this.dracoLoader)
        tile.manager.addHandler(/\.gltf$/, this.gltfLoader)
        tile.manager.addHandler(/\.ktx2$/, this.ktx2Loader)
        tile.errorTarget = 2
        tile.lruCache = this.tilesCache
        tile.loadSiblings = true
        tile.autoDisableRendererCulling = true
        tile.setCamera(renderCamera)
        tile.setResolutionFromRenderer(renderCamera, renderer)
        this.tiles.push(tile)
        tile.onLoadTileSet = (tileset) => {
            console.log('loadTile - ', tileset);
            if (tileset && tileset.root) {
                //@ts-ignore :tileset 定义中是有parent
                if (tileset.root.parent) return

                if(tileset.root.transform) {
                //       new THREE.Matrix4()
                //       .fromArray(tileset.root.transform)
                //       .multiply(new THREE.Matrix4().makeRotationX(0.5 * Math.PI))
                //       .invert()
                //       .decompose(tile.group.position, tile.group.quaternion, tile.group.scale)
                } else if (tileset.root.boundingVolume) {
                    const wordToLocal = new THREE.Matrix4()
                    const center = new THREE.Vector3()
                    const boundingVolume = tileset.root.boundingVolume
                    if (boundingVolume.box) {
                        // tile.group.position.set(boundingVolume.box[0], boundingVolume.box[1], boundingVolume.box[2])
                        // .multiplyScalar(-1)

                        // console.log(tile.group)
                    } else if (boundingVolume.sphere) {
                        center.set(
                            boundingVolume.sphere[0],
                            boundingVolume.sphere[1],
                            boundingVolume.sphere[2]
                        )
                        console.log(tile.group)
                        tile.group.position.copy(center.multiplyScalar(-1))
                        // wordToLocal.setPosition(center)
                        // .invert()
                        // .decompose(
                        //     tile.group.position,
                        //     tile.group.quaternion,
                        //     tile.group.scale
                        // )
                    }
                }
            }
        }
    
        return Promise.resolve(tile)
    }

    // 加载点云文件
    loadPointCloud(url: string) {
        return this.pointCloudLoader
        .loadPointCloud('metadata.json', (fileName) => url)
        .then((pointTree) => {
            console.log('position - ', pointTree.position)
            // const poistionOld = pointTree.position.clone()
            // pointTree.rotation.x = -Math.PI * 0.5
            // pointTree.position.y = poistionOld.z
            // pointTree.position.z = -poistionOld.y

            pointTree.material.inputColorEncoding = 0
            pointTree.material.outputColorEncoding = 1
            pointTree.material.pointColorType = 2
            pointTree.material.size = 0.3
            this.pointClouds.push(pointTree)

            return pointTree
        })
    }

    // 加载高斯文件
    loadGaussianSplatting(url: string) {
        return this.gsLoader.loadAsync(url).then((data) => {
            data.node.computeBoundingBox()
            this.gsMeshes.push(data.node)
            return data.node
        })
    }
}

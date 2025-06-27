import * as THREE from 'three';
import { Scene, GridHelper } from 'three';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

import Editor from '../Editor';
import { texture } from 'three/tsl';

/**
 * 场景控制
*/
export default class SceneManager {
    editor: Editor
    gui: GUI = new GUI({ width: 300 })

    all: Scene[] = []
    current: Scene

    constructor(editor: Editor) {
        this.editor = editor

        this.default()
    }

    /**
     * 默认场景创建
    */
    default() {
        this.current = new Scene()
        this.current.name = 'default'

        const hdrDir = 'static/images/HDR/'
        const loader = new RGBELoader()
        loader.setPath(hdrDir)
        loader.loadAsync('chinese_garden_1k.hdr').then((texture) => {
            console.log('HDR texture loaded:', texture)
            texture.mapping = THREE.EquirectangularReflectionMapping
            this.current.background = texture
            this.current.environment = texture
        })
        this.all = [this.current]

        // 创建坐标轴辅助器
        const axes = new THREE.AxesHelper(1)

        // 创建地面网格
        const grid = new GridHelper( 20, 40, 0xffffff * Math.random(), 0xffffff )
        grid.material.opacity = 0.2
        grid.material.depthWrite = false
        grid.material.transparent = true

        // 创建GUI面板
        const params = {
            'hdr': 'chinese_garden_1k'
        }

        const hdrList = [
            'chinese_garden_1k',
            'autumn_field_puresky_4k',
            'bambanani_sunset_4k',
            'kloofendal_48d_partly_cloudy_puresky_4k',
            'lilienstein_4k',
            'mud_road_puresky_4k',
            'moonless_golf_4k',
            'qwantani_dawn_puresky_4k',
            'satara_night_4k',
            'spiaggia_di_mondello_4k',
            'the_sky_is_on_fire_4k'
        ]

        this.gui.add(this.current, 'name').name('场景名称')
        this.gui.add(params, 'hdr', hdrList).name('HDR环境贴图').onChange((value) => {
            loader.loadAsync(value + '.hdr').then((texture) => {
                // 设置贴图映射方式
                texture.mapping = THREE.EquirectangularReflectionMapping
                this.current.background = texture
                this.current.environment = texture
            }) 
        })

        this.current.add(axes, grid)
    }
}

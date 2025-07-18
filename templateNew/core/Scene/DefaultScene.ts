import * as THREE from 'three'
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import Editor from "../../Editor";
import BaseScene from "./BaseScene";
import { GridHelper } from 'three';

/**
 * 默认场景
*/
export default class DefaultScene extends BaseScene {
    constructor(editor: Editor) {
        super(editor)

        this.name = 'Default'

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({
                color: 0xffffff * Math.random(),
                side: THREE.DoubleSide
            })
        )

        this.add( cube )

        // this.controlsManager.Transform.attach(cube)
        // this.add( this.controlsManager.Transform.getHelper() )
    }

    /**
     * 设置当前场景的GUI面板
    */
    GUI(gui: GUI) {
        super.GUI(gui)
        const hdrDir = 'static/images/HDR/'
        // this.editor.loaderManager.loadHDR('chinese_garden_1k.hdr', hdrDir).then((texture) => {
        //     texture.mapping = THREE.EquirectangularReflectionMapping
        //     this.background = texture
        //     this.environment = texture
        // })

        // 创建坐标轴辅助器
        const axes = new THREE.AxesHelper(1)
        // 创建地面网格
        const grid = new GridHelper( 20, 40, 0xffffff * Math.random(), 0xffffff )
        grid.material.opacity = 0.2
        grid.material.depthWrite = false
        grid.material.transparent = true
        this.add( axes, grid )

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

        const hdrEnvList = this.gui.add(params, 'hdr', hdrList).name('HDR环境贴图').onChange((value) => {
            this.editor.loaderManager.loadHDR(value + '.hdr', 'static/images/HDR/').then((texture) => {
                // 设置贴图映射方式
                texture.mapping = THREE.EquirectangularReflectionMapping
                this.background = texture
                this.environment = texture
            }) 
        })

        return this
    }
}

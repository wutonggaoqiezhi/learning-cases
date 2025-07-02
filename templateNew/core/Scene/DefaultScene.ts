import * as THREE from 'three'
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import Editor from "../../Editor";
import BaseScene from "./BaseScene";

export default class DefaultScene extends BaseScene {
    constructor(editor: Editor) {
        super(editor)

        this.name = 'Default'

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({
                color: 0xffffff * Math.random(),
                depthTest: true
            })
        )

        this.add( cube )
    }

    /**
     * 设置当前场景的GUI面板
    */
    GUI(gui: GUI) {
        super.GUI(gui)
        const hdrDir = 'static/images/HDR/'
        this.editor.loaderManager.loadHDR('chinese_garden_1k.hdr', hdrDir).then((texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping
            this.background = texture
            this.environment = texture
        })

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

import * as THREE from 'three';
import { Scene } from 'three';
import Viewport from "./Viewport";
import Editor from '../../Editor';

export default class ViewportDefault extends Viewport {
    constructor(scene: Scene, editor: Editor) {
        super(scene, editor)

        this.init()
    }

    init() {
        super.init()
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

        const hdrEnvList = this.gui.add(params, 'hdr', hdrList).name('HDR环境贴图').onChange((value) => {
            this.editor.loaderManager.loadHDR(value + '.hdr', 'static/images/HDR/').then((texture) => {
                // 设置贴图映射方式
                texture.mapping = THREE.EquirectangularReflectionMapping
                this.scene.background = texture
                this.scene.environment = texture
            }) 
        })

        this.guiList.push(hdrEnvList)
    }


}

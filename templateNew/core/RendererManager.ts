import * as THREE from 'three'
import Editor from '../Editor'
import { Renderer } from 'three/webgpu'
import { WebGLRenderer } from 'three'

export default class RendererManager {
    editor: Editor

    all: any[]
    current: WebGLRenderer

    constructor(editor: Editor) {
        this.editor = editor

        this.current = this.default()
        this.all = [this.current]
    }

    /**
     * 初始默认的渲染器
    */
    default() {
        const renderer = new WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.localClippingEnabled = true
        renderer.xr.enabled = true
		renderer.setClearColor( 0x1b1c1e )

        this.editor.dom.appendChild( renderer.domElement )

        return renderer
    }
}

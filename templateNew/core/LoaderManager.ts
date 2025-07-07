import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import Editor from '../Editor';

export default class LoaderManager {
    editor: Editor

    rgbeLoader: RGBELoader = new RGBELoader()

    constructor(editor: Editor) {
        this.editor = editor
        editor.loaderManager = this
    }

    /**
     * url: 网络或者在线资源，或者本地资源的名称
     * path: url为本地资源名称是，传递路径
    */
    loadHDR(url: string, path?: string) {
        if(path) this.rgbeLoader.setPath(path)
        
        return this.rgbeLoader.loadAsync(url)
    }
}

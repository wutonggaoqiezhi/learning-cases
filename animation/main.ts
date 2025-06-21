import * as THREE from 'three'

import Editor from "./Editor"
import ViewPort from "./ViewPort"

import axios from 'axios'

import HarmonicPattern from './spiral'

class Main {
    editor: Editor

    constructor() {
        console.log('adbkjasfasbfhk')
        const editor = new Editor()
        const viewPort = new ViewPort(editor, document.getElementById("container"))
        this.editor = editor

        // const spiral = new HarmonicPattern(editor)
    }

    main() {}
}

new Main()

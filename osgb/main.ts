import * as THREE from 'three'

import Editor from "./Editor"
import ViewPort from "./ViewPort"

import axios from 'axios'

class Main {
    editor: Editor

    constructor() {
        const editor = new Editor()
        const viewPort = new ViewPort(editor, document.getElementById("container"))
        this.editor = editor

        editor.getMsg()
    }

    main() {}
}

new Main()

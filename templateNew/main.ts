import Editor from "./Editor"

import axios from 'axios'

class Main {
    editor: Editor

    constructor() {
        const editor = new Editor( document.getElementById("container") )
        this.editor = editor
    }

    main() {}
}

new Main()

import * as THREE from 'three'

import Editor from '../Editor'

export class ModelRenderer {
    editor: Editor

    constructor(editor: Editor) {
        this.editor = editor
    }

    render(uri: string) {}
}

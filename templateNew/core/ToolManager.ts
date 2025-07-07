import Editor from "../Editor";
import { ToolType } from "./Base/Enum";
import { Tool } from "./Base/Interface";
import { SelectTool } from "./tools/SelectTool";

export default class ToolManager {
    current: number = ToolType.None
    toolMap: Map<string, Tool> = new Map()

    constructor(editor: Editor) {
        editor.toolManager = this
        this.toolMap.set('SelectTool', new SelectTool(editor))
        const gui = editor.toolFolder
        gui.add({selected: ToolType[this.current]}, 'selected', Object.values(ToolType).filter(value => typeof value == 'string')).onChange((index) => {
            this.active(index)
        })
    }

    active(tool: string) {
        this.toolMap.get(tool)?.active()
    }

    deactive(tool: string) {
        this.toolMap.get(tool)?.deactive()
    }
}

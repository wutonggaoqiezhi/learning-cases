import { Object3D, Raycaster, Mesh, MeshBasicMaterial, Material, GridHelper, ArrowHelper, Vector2 } from 'three'
import Editor from "../../Editor"
import { Tool } from "../Base/Interface"
import { ToolState } from '../Base/Enum'

export class SelectTool implements Tool {
    state: ToolState = ToolState.Idle
    editor: Editor
    raycaster: Raycaster = new Raycaster()

    mouse: Vector2 = new Vector2()

    selected: Object3D[]  = []

    private highlightMaterial = new MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true,
        transparent: true,
        opacity: 0.5
    });
    private originalMaterials = new Map<Mesh, Material | Material[]>(); // 保存原始材质

    constructor(editor: Editor) {
        this.editor = editor
    }

    /**
     * 激活工具
    */
    active(): void {
        this.updateStatus(ToolState.Active)
        this.editor.dom.addEventListener('mousedown', this.onMouseDown.bind(this))
        this.editor.dom.addEventListener('mouseup', this.onMouseUp.bind(this))
    }

    /**
     * 取消工具
    */
    deactive(): void {
        this.updateStatus(ToolState.Idle)
    }

    /**
     * 更新工具状态
    */
    updateStatus(state: ToolState) {
        this.state = state
        this.updateCursor()
    }

    /**
     * 根据状态渲染不同的光标
    */
    updateCursor() {
        const cursorStyle = 
            this.state === ToolState.Active ? 'crosshair' :
            this.state === ToolState.Busy ? 'wait' :
            this.state === ToolState.Error ? 'not-allowed' :
            'default'
    
        document.body.style.cursor = cursorStyle;
    }

    onMouseDown(event: MouseEvent): void {
        if (event.button !== 0) return; // 只响应左键
        this.mouse.copy( this.editor.sceneManager.current.mouse )
    }

    onMouseUp(event: MouseEvent): void {
        if (event.button !== 0) return; // 只响应左键
        const mouse = this.editor.sceneManager.current.mouse
        // 认定为一次有效的选择点击
        if( this.mouse.distanceTo(mouse) < 0.01 ) {
            const scene = this.editor.sceneManager.current
            this.raycaster.setFromCamera( scene.mouse, scene.cameraManager.current )
            const intersects = this.raycaster.intersectObjects(scene.children.filter((obj) => !(obj instanceof GridHelper)))

            if(intersects.length > 0) {
                if(!event.shiftKey) this.clearSelection()
                const target = intersects[0].object
                this.toggleSelection(target)
            } else {
                this.clearSelection()
                this.editor.ppManager.disableOutline()
            }
        }
    }

    /**
     * 选中与取消选中
    */
    private toggleSelection(object: Object3D): void {
        const index = this.selected.indexOf(object)
        if(index === -1) {
            this.selected.push(object)
        } else {
            this.selected.splice(index, 1)
        }
        console.log('selected - ', this.selected)
        this.editor.ppManager.init().enableOutline(this.selected)
    }

    /**
     * 高亮选中对象
    */
    private highlightObject(object: Object3D): void {
        if((object as Mesh).isMesh) {

        }
        // if (object.isMesh) {
        //     // 保存原始材质
        //     this.originalMaterials.set(object, object.material);
        //     // 应用高亮材质
        //     object.material = this.highlightMaterial;
        // }
        // 递归处理子对象
        object.children.forEach(child => this.highlightObject(child));
    }

    clearSelection(): void {
        this.selected = []
    }
}

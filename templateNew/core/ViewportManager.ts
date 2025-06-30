import { Scene } from "three"
import Viewport from "./Viewport/Viewport"

export default class ViewportManager {
    viewMap: Map<Scene, Viewport>
    
    constructor() {}
}

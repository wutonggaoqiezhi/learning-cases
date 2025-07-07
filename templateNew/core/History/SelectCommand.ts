import { Object3D } from "three";
import Command from "./Command"

/**
 * TODO:逻辑较为复杂，暂时不列入命令
*/
export class SelectCommand extends Command {
    constructor(obj: Object3D) {
        super(obj)
    }

    invoke(): void {
        
    }

    revoke(): void {
        
    }
}

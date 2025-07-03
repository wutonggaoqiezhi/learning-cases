import { Object3D, Vector3 } from "three";
import Command from "./Command";

export class ScaleCommand extends Command {
    private _from: Vector3 = new Vector3()
    private _to: Vector3 = new Vector3()

    constructor(obj: Object3D, from: Vector3, to: Vector3) {
        super(obj)

        this._from.copy(from)
        this._to.copy(to)
    }

    invoke(): void {
        this.object.scale.copy(this._to)
    }

    revoke(): void {
        this.object.scale.copy(this._from)
    }
}

import { Euler, Object3D } from "three";
import Command from "./Command";

export class RotateCommand extends Command {
    private _from: Euler = new Euler()
    private _to: Euler = new Euler()

    constructor(obj: Object3D, from: Euler, to: Euler) {
        super(obj)
        this._from.copy(from)
        this._to.copy(to)
    }

    invoke(): void {
        this.object.rotation.copy(this._to)
    }

    revoke(): void {
        this.object.rotation.copy(this._from)
    }
}

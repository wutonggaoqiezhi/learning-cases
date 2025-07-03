import { Object3D, Vector3 } from "three";
import Command from "./Command";

export class TranslateCommand extends Command {
    private _from: Vector3 = new Vector3()
    private _to: Vector3 = new Vector3()

    // TODO: translateVec和from&to哪个比较好？
    constructor(obj: Object3D, from: Vector3, to: Vector3) {
        super(obj)

        this._from.copy( from )
        this._to.copy( to )
    }

    invoke(): void {
        this.object.position.copy( this._to )
    }

    revoke(): void {
        this.object.position.copy( this._from )
    }
}

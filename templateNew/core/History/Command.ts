import { Object3D } from "three";

export default abstract class Command {
    public name: string
    public skip: boolean = false;

    protected object: Object3D

    constructor(obj: Object3D) {
        this.object = obj
    }

    /**
     * 调用
    */
    abstract invoke(): void

    /**
     * 撤销
    */
    abstract revoke(): void
}

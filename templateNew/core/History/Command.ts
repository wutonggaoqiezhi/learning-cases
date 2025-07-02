export default abstract class Command {
    public name: string
    public skip: boolean = false;

    constructor() { }

    abstract invoke(): void

    abstract revoke(): void
}

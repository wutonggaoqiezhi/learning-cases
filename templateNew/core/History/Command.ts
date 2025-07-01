export default abstract class Command {
    public skip: boolean = false;

    constructor() { }

    abstract invoke(): void

    abstract revoke(): void
}

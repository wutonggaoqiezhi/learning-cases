import Command from "./Command";

export default class EmptyCommand extends Command {
    constructor() {
        super()
        this.name = 'EmptyCommand'
    }

    invoke(): void {
        
    }

    revoke(): void {
        
    }
}

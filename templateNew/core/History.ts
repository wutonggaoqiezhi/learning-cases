import Command from "./History/Command";
import Chain from "./Base/Chain";

export default class History {
    taskStack: Chain<Command> = new Chain()

    constructor() {}

    addCommand(command: Command) {
        this.taskStack.addCommand(command)
    }

    undo() {
        this.taskStack.undo()
    }

    redo() {
        this.taskStack.redo()
    }

    clear() {
        this.taskStack.init()
    }
}
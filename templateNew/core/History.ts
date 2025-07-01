import Command from "./History/Command";

export default class History {
    undoStack: Stack<Command>
    redoStack: Stack<Command>

    constructor() {}
}
import Command from "../History/Command"
import EmptyCommand from "../History/EmptyCommand"

/**
 * 简单实现
 * 格子尺 + 箭头
 * |0 |1 |2 |3|...|19|
 * |一|二|三|四|...|廿|
 * |E |E |E |E|...|E|
 *                 ⬆
*/
export default class Chain<T extends Command> {
    private list: Array<T>  // 任务列表
    private cursor: number  // 箭头
    // 当前箭头所指之后的元素是否为EmptyCommand
    // 若为true，代表之后元素都是EmptyCommand,无需再次置空
    // 初始化时为true，箭头指向最后一个元素
    private clear: boolean = true

    constructor() {
        this.init()
    }

    /**
     * 记录当前操作
    */
    addCommand(command: T) {
        if(this.cursor == this.list.length - 1) {
            // 目前箭头指向最后一个元素
            this.list.splice(0, 1)
            this.list.push(command)
        } else {
            const len = this.list.length - 1 - this.cursor
            if(!this.clear) {
                this.list.splice(
                    this.cursor + 1,
                    len,
                    ...Array(len).fill(EmptyCommand)
                )
                this.clear = true
            }
            this.next()
            this.list[this.cursor] = command
        }
    }

    /**
     * 箭头前移
    */
    prev() {
        this.cursor -= 1
    }

    /**
     * 获取前一个命令
    */
    getPrev() {
        if(this.cursor == 0) return
        return this.list[this.cursor - 1]
    }

    /**
     * 箭头后移
    */
    next() {
        this.cursor += 1
    }

    /**
     * 获取后一个命令
    */
    getNext() {
        if(this.cursor == this.list.length - 1) return
        return this.list[this.cursor + 1]
    }

    /**
     * 撤销操作
    */
    undo() {
        // 到达首位，无上个命令，直接返回
        if(this.cursor == -1) return
        // 当前不是空命令，撤销当前命令，指向前一个命令
        const currentCommand = this.list[this.cursor]
        if(currentCommand instanceof EmptyCommand) return
        currentCommand.revoke()
        this.prev()
        this.clear = false
    }

    /**
     * 恢复操作
    */
    redo() {
        const nextCommand = this.getNext()
        if(nextCommand) {
            if(nextCommand instanceof EmptyCommand) return
            nextCommand.invoke()
            this.next()
        }
    }

    /**
     * 清空执行队列，恢复初始状态
    */
    init() {
        this.list = Array(20).fill(new EmptyCommand)
        this.cursor = 19
    }
}

/**
 * 简单实现栈的功能
*/
export default class Stack<T> {
    private items: T[] = [];

    // 入栈：添加元素到栈顶
    push(element: T): void {
        this.items.push(element);
    }

    // 出栈：移除并返回栈顶元素
    pop(): T | undefined {
        return this.items.pop();
    }

    // 查看栈顶元素
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // 判断栈是否为空
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // 获取栈的大小
    size(): number {
        return this.items.length;
    }

    // 清空栈
    clear(): void {
        this.items = [];
    }

    // 返回栈的所有元素（数组形式）
    toArray(): T[] {
        return [...this.items];
    }
}

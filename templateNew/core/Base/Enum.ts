export enum ToolType {
    None,
    SelectTool
}

export enum ToolState {
    Idle = 'IDLE',          // 闲置状态
    Active = 'ACTIVE',      // 激活状态（正常工作）
    Busy = 'BUSY',          // 忙碌状态（执行操作中）
    Disabled = 'DISABLED',  // 禁用状态
    Error = 'ERROR'         // 错误状态
}
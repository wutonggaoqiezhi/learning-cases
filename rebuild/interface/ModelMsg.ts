// 模型类型枚举
export enum EModelType {
    Panorama = 1,           // 全景
    Inclined = 2,           // 倾斜
    PointTree = 3,          // 点云
    Normal = 4,             // 常规
    BaseMap = 5,            // 地图
    GaussianSplatting = 6,  // 高斯
    LocalObj = 7,           // 测试查看本地obj
    LocalDS = 8             // 测试大势
}

// 模型加载信息格式 - 通过此格式加载模型
export interface IModelMsg {
    version?: string
    id: string
    modelId: string
    modelType: EModelType
    modelName: string
    modelPath: string
    resourcePath: string
    size: number
    sizeFormatted: string
    backgroundColor: string
    createTime: string
    subContent?: number
    panoramaChildren?: any[]
    splitList?: {
        height: number
        name: string
        uuid: string
    }[]
    visual: {
        far: number
        near: number
        distance: number
    }
    position: {
        x: number
        y: number
        z: number
    }
    rotation: {
        x: number
        y: number
        z: number
    }
    profile: {
        x: number
        y: number
        z: number
    }
    opacity: number
    visible: boolean
}

// 全景Mesh资源
export class PanoramaMeshResource {
    objFile: string
    mtlFile: string
    textureDir: string
    resourcePath: string
    subContent?: number
}

// 全景资源 - 小圆盘和全景图六张图？
export class PanoramaResource {
    panoramaId: string
    name: string
    position: [number, number, number]
    quaternion: {
        x: number
        y: number
        z: number
        w: number
    }
    visible_nodes: number[]
    floor_index: number
    up: string
    down: string
    left: string
    right: string
    front: string
    back: string
    type: 'pano' | 'cube'
    resourcePath: string

    panoramaViewOptions: {
    brightness: number          // 亮部
    contrast: number            // 对比度
    saturation: number          // 饱和度
    darkImprovement: number     // 暗部改善
    lightImprovement: number    // 亮部改善
    }
}

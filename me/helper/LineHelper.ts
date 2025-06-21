import * as THREE from 'three'

import { Vector3, Line, BufferGeometry, LineBasicMaterial } from 'three'
import { Line2 } from 'three/examples/jsm/lines/webgpu/Line2.js'

export default class LineHelper {
    static drawLine(vertexA: Vector3, vertexB: Vector3): Line {
        const geomery = new BufferGeometry().setFromPoints([vertexA, vertexB])
        const material = new LineBasicMaterial({ color: 0xffffff * Math.random() })
        return new Line(geomery, material)
    }
}

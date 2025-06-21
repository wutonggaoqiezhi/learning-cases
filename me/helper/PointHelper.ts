import * as THREE from 'three'
import { Vector2, Vector3 } from 'three'

import MarkHelper from './MarkHelper'
import Editor from '../Editor'

export default class PointHelper {
    // 转化为THREE.Vector3
    static transToVec3(item: {x: number, y: number, z: number}) {
        return new Vector3(
            item.x, item.y, item.z
        )
    }

    // 在数组arr中获取前一个元素
    static getPrevPoint(arr: any[], index: number) {
        if(arr.length == 0) return

        if(index == 0) return arr[arr.length - 1]
        return arr[index - 1]
    }

    // 在数组arr中获取下一个元素
    static getNextPoint(arr: any[], index: number) {
        if(arr.length == 0) return

        if(index == arr.length - 1) return arr[0]
        return arr[index + 1]
    }

    // 根据耳廓周围选择的点来拓展
    static expandPoints(points: any[], parent?) {
        console.log('points - ', points)
        const convexPoints: Vector3[] = []

        for(let i = 0;i < points.length;i++) {
            const prevPoint = this.getPrevPoint(points, i)
            const nextPoint = this.getNextPoint(points, i)

            const prevVertex = this.transToVec3(prevPoint)
            const currVertex = this.transToVec3(points[i])
            const nextVertex = this.transToVec3(nextPoint)

            parent.add( MarkHelper.createSphere(currVertex, 0.001) )

            const vecA = prevVertex.clone().sub(currVertex)
            const vecB = nextVertex.clone().sub(currVertex)

            const crossVec = vecA.clone().cross(vecB).negate()

            const crossVertexA = currVertex.clone().add(crossVec.clone().setLength(0.03))
            const crossVertexB = nextVertex.clone().add(crossVec.clone().setLength(0.03))
            parent.add( MarkHelper.createSphere(crossVertexA, 0.001) )
            parent.add( MarkHelper.createSphere(crossVertexB, 0.001) )
            convexPoints.push(currVertex, crossVertexA, crossVertexB)
        }
        parent.add(MarkHelper.createConvexFrame(convexPoints))
    }

    static expandPointsA(points: any[], parent?) {
        console.log('points - ', points)
        const convexPoints: Vector3[] = []
        const centerPoints: Vector3[] = []

        for(let i = 0;i < points.length;i++) {
            const prevPoint = this.getPrevPoint(points, i)
            const nextPoint = this.getNextPoint(points, i)

            const prevVertex = this.transToVec3(prevPoint)
            const currVertex = this.transToVec3(points[i])
            const nextVertex = this.transToVec3(nextPoint)

            parent.add( MarkHelper.createSphere(currVertex, 0.001) )
            convexPoints.push( currVertex )

            const vecA = prevVertex.clone().sub(currVertex)
            const vecB = nextVertex.clone().sub(currVertex)

            const crossVec = vecA.clone().cross(vecB)

            const center = new Vector3().add(prevVertex).add(currVertex).add(nextVertex).divideScalar(3)
            // parent.add( MarkHelper.createSphere(center, 0.001, 0x00ff00) )

            const tempA = center.clone().add(crossVec.clone().setLength(0.03))
            // parent.add( MarkHelper.createSphere(tempA, 0.001, 0x0000ff) )
            centerPoints.push(tempA)
        }
        const innerPoint = new Vector3()
        centerPoints.forEach(item => innerPoint.add(item) )
        innerPoint.divideScalar(centerPoints.length)
        convexPoints.push(innerPoint)
        // parent.add( MarkHelper.createSphere(innerPoint, 0.001, 0x00ffff) )

        points.forEach(point => {
            const vertex = this.transToVec3(point)
            const vec = vertex.clone().sub(innerPoint)
            const outerPoint = vertex.clone().add(vec)
            convexPoints.push(outerPoint)
        })

        // parent.add(MarkHelper.createConvexFrame(convexPoints))
        return convexPoints
    }
}
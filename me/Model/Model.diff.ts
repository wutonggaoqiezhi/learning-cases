import * as THREE from 'three'
import { Brush, Evaluator, DIFFERENCE, SUBTRACTION, INTERSECTION } from 'three-bvh-csg'

export class ModelDiffer {
    brushA: Brush
    brushB: Brush

    count: number = 0
    topPoint: THREE.Vector3
    backOutside: THREE.Vector3
    downPoint: THREE.Vector3
    frontInside: THREE.Vector3

    constructor() {}

    setFirstMesh(mesh: THREE.Mesh) {
        this.brushA = new Brush(mesh.geometry)
    }

    setSecondMesh(mesh: THREE.Mesh) {
        this.brushB = new Brush(mesh.geometry)
    }

    generateBoxByFourPoint(pointArr: THREE.Vector3[]) {}

    active(meshA, meshB) {
        const brushA = new Brush(meshA.geometry)
        brushA.updateMatrixWorld()

        const brushB = new Brush(meshB.geometry)
        brushB.updateMatrixWorld()

        const evaluator = new Evaluator();
        const result = evaluator.evaluate( brushA, brushB, INTERSECTION  )
        
        return result
    }
}

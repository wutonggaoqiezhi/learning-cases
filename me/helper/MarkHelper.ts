import * as THREE from 'three'
import { ConvexGeometry } from 'three/examples/jsm/Addons.js'

export default class MarkHelper {
    static createSphere(position: THREE.Vector3, size: number, color = 0xff0000) {
        const geometry = new THREE.SphereGeometry(size)
        const sphere = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: color}))
        sphere.position.copy(position)
        return sphere
    }

    static createConvexFrame(points: THREE.Vector3[]) {
        const convex = new ConvexGeometry(points)
        const frame = new THREE.WireframeGeometry(convex)
        return new THREE.LineSegments(frame)
    }
}

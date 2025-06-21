import { BufferGeometry, Float32BufferAttribute, Uint32BufferAttribute, DynamicDrawUsage, InstancedBufferGeometry, InstancedBufferAttribute, Sphere, Box3, Vector3 } from 'three';

/**
 * GaussianSplattingGeometry will be used to render the splats. The geometry is instanced and is made up of
 * vertices for a single quad as well as an attribute buffer for the splat indexes
 */
export class GaussianSplattingGeometry extends BufferGeometry {

	instanceCount: number = 0

	constructor(maxSplatCount: number) {
		super();

		this.setIndex([0, 1, 2, 0, 2, 3]);

		const positionArray = new Float32Array([-1.0, -1.0, 0.0, -1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, -1.0, 0.0]);
		const positionAttribute = new Float32BufferAttribute(positionArray, 3, false)
		this.setAttribute('position', positionAttribute);
		positionAttribute.needsUpdate = true


		const splatIndexArray =  new Uint32Array(maxSplatCount)
		const splatIndexAttribute = new InstancedBufferAttribute(splatIndexArray, 1, false)
		splatIndexAttribute.needsUpdate = true
		splatIndexAttribute.setUsage(DynamicDrawUsage)
		this.setAttribute('splatIndex', splatIndexAttribute);

		
		this.boundingBox = new Box3(new Vector3(-1, -1, -1), new Vector3(1, 1, 1))
		this.boundingSphere = new Sphere(new Vector3(0, 0, 0), 1)

	}
	


	updateSplatIndices(array: ArrayLike<number>, count: number) {

		const splatIndexAttribute = this.getAttribute('splatIndex') as Uint32BufferAttribute
		const splatIndexArray = splatIndexAttribute.array;

		for (let i = 0; i < count; i++) {
			splatIndexArray[i] = array[i];
		}
		splatIndexAttribute.needsUpdate = true

		this.instanceCount = count;
	}

}

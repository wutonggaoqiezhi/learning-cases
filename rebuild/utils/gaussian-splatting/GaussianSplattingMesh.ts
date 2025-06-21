import { Mesh, Matrix4, Box3, Sphere, Camera, PointsMaterial, InstancedMesh, Vector3 } from 'three';
import { GaussianSplattingMaterial } from './GaussianSplattingMaterial';
import { GaussianSplattingGeometry } from './GaussianSplattingGeometry';
import { SplatIndexSortWorker } from './SplatIndexSortWorker';
import { Utils, InternalDataType } from './Utils';

class GaussianSplattingMesh extends InstancedMesh<GaussianSplattingGeometry, GaussianSplattingMaterial> {

	_internalData: InternalDataType | null
	_worker: SplatIndexSortWorker;
	isGaussianSplattingMesh = true;

	constructor(splatBuffer: ArrayBuffer) {

		const internalData = Utils.convertSplatToInternalData(splatBuffer);
		const material = new GaussianSplattingMaterial();
		material.setTextures(internalData);

		const geometry = new GaussianSplattingGeometry(internalData.vertexCount);

		const boundingSphere = geometry.boundingSphere || new Sphere(new Vector3(0, 0, 0), 1)
		const boundingBox = geometry.boundingBox || new Box3(new Vector3(-1, -1, -1), new Vector3(1,1,1)) 

	
		//boundingBox.setFromArray(internalData.positions);
		//boundingBox.getBoundingSphere(boundingSphere) //(internalData.positions);
		
		super(geometry, material, internalData.vertexCount);

		// Initialize worker
		const worker = new SplatIndexSortWorker();
		worker.init(internalData.positions, internalData.vertexCount);
		worker.onUpdate = (indices, count) => {
			geometry.updateSplatIndices(indices, count);
	
		};

		this.frustumCulled = false;

		this._internalData = internalData;
		this._worker = worker;
	}

	update(camera: Camera, width: number, height: number) {
		
		// _mvpMatrix.copy(camera.projectionMatrix);
		// _mvpMatrix.multiply(this.modelViewMatrix);

		_mvpMatrix.copy(camera.projectionMatrix)
		_mvpMatrix.multiply(this.modelViewMatrix)
		
		this._worker.update(_mvpMatrix);

		if (this._internalData && this._internalData.vertexCount > 0) {
			this.material.updateUniforms(camera, width, height);
		}
	}


	dispose() {
		this._worker.dispose();
		this._internalData = null;

		this.geometry.dispose()
		this.material.dispose()

		return this;
	}

}

GaussianSplattingMesh.prototype.isGaussianSplattingMesh = true;

const _mvpMatrix = new Matrix4();

export { GaussianSplattingMesh };
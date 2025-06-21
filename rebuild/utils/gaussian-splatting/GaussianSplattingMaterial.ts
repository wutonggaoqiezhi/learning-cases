import { ShaderMaterial, Camera, DoubleSide } from 'three';
import { GaussianSplattingShader } from './GaussianSplattingShader';
import { Utils, InternalDataType } from './Utils';

class GaussianSplattingMaterial extends ShaderMaterial {

	constructor() {
		super(GaussianSplattingShader);

		this.name = 'gaussian_splatting'

		this.transparent = true;
		this.depthTest = true;
		this.depthWrite = false;
		this.side = DoubleSide;
	}

	setTextures(internalData: InternalDataType) {
		
		const uniforms = this.uniforms;
		uniforms.covariancesTexture.value = Utils.generateCovariancesTexture(internalData);
		uniforms.centersTexture.value = Utils.generateCentersTexture(internalData);
		uniforms.colorsTexture.value = Utils.generateColorsTexture(internalData);

		this.needsUpdate = true
	
	}

	updateUniforms(camera: Camera, width: number, height: number) {
		
		const uniforms = this.uniforms;
		uniforms.basisViewport.value.set(1.0 / width, 1.0 / height)
		uniforms.focal.value.set(camera.projectionMatrix.elements[0] * width * 0.45,camera.projectionMatrix.elements[5] * height * 0.45)

		this.needsUpdate = true

	}

	dispose(): void {
		
		this.uniforms.covariancesTexture?.value?.dispose()
		this.uniforms.centersTexture?.value?.dispose()
		this.uniforms.colorsTexture?.value?.dispose()
	
	}
}

export { GaussianSplattingMaterial };
import {	
   DataTexture as Texture2D,  Matrix3 , Matrix4, Quaternion, 
   MathUtils } from 'three';

import * as THREE from 'three'


const nextPowerOfTwo = (value: number) => {
	value--;
	value |= value >> 1;
	value |= value >> 2;
	value |= value >> 4;
	value |= value >> 8;
	value |= value >> 16;
	value++;

	return value;
}


export type InternalDataType = {
	vertexCount: number
	positions: Float32Array  //ArrayLike<number>
	rotations: Float32Array //ArrayLike<number>
	scales: Float32Array   // ArrayLike<number>
	colors: Uint8Array  // ArrayLike<number>
}

export const Utils = {

	convertSplatToInternalData: (buffer: ArrayBuffer) => {
		const f_buffer = new Float32Array(buffer);
		const u_buffer = new Uint8Array(buffer);

		const rowLength = 3 * 4 + 3 * 4 + 4 + 4;
		const vertexCount = u_buffer.length / rowLength;

		const positions = new Float32Array(3 * vertexCount);
		const rotations = new Float32Array(4 * vertexCount);
		const scales = new Float32Array(3 * vertexCount);
		const colors = new Uint8Array(4 * vertexCount);

		for (let i = 0; i < vertexCount; i++) {
			positions[3 * i + 0] = -f_buffer[8 * i + 0];
			positions[3 * i + 1] = -f_buffer[8 * i + 1];
			positions[3 * i + 2] = f_buffer[8 * i + 2];

			rotations[4 * i + 0] = (u_buffer[32 * i + 28 + 0] - 128) / 128;
			rotations[4 * i + 1] = (u_buffer[32 * i + 28 + 1] - 128) / 128;
			rotations[4 * i + 2] = (u_buffer[32 * i + 28 + 2] - 128) / 128;
			rotations[4 * i + 3] = (u_buffer[32 * i + 28 + 3] - 128) / 128;

			scales[3 * i + 0] = f_buffer[8 * i + 3 + 0];
			scales[3 * i + 1] = f_buffer[8 * i + 3 + 1];
			scales[3 * i + 2] = f_buffer[8 * i + 3 + 2];

			colors[4 * i + 0] = u_buffer[32 * i + 24 + 0];
			colors[4 * i + 1] = u_buffer[32 * i + 24 + 1];
			colors[4 * i + 2] = u_buffer[32 * i + 24 + 2];
			colors[4 * i + 3] = u_buffer[32 * i + 24 + 3];
		}

		return {
			vertexCount,
			positions,
			rotations,
			scales,
			colors
		};
	},

	generateCentersTexture: (internalData: InternalDataType) => {
		const { positions, vertexCount } = internalData;

		const size = Utils.getTextureSize(vertexCount);

		const imageData = new Float32Array(4 * size * size);

		for (let i = 0; i < vertexCount; i++) {
			imageData[i * 4 + 0] = 0;
			imageData[i * 4 + 1] = positions[3 * i + 0];
			imageData[i * 4 + 2] = positions[3 * i + 1];
			imageData[i * 4 + 3] = positions[3 * i + 2];
		}

		const texture = new THREE.DataTexture(
			imageData, 
			size, 
			size, 
			THREE.RGBAFormat, 
			THREE.FloatType,
			THREE.Texture.DEFAULT_MAPPING,
			THREE.ClampToEdgeWrapping,
			THREE.ClampToEdgeWrapping,
			THREE.NearestFilter,
			THREE.NearestFilter,
			THREE.Texture.DEFAULT_ANISOTROPY,
			THREE.NoColorSpace
		);

		texture.generateMipmaps = false
		texture.flipY = false;
		texture.needsUpdate = true;

		return texture;
	},

	generateCovariancesTexture: (internalData: InternalDataType) => {
		const { rotations, scales, vertexCount } = internalData;

		const size = Utils.getTextureSize(vertexCount * 3);

		const imageData = new Float32Array(2 * size * size);

		for (let i = 0; i < vertexCount; i++) {
			_mat3_1.set(
				scales[i * 3 + 0], 0, 0,
				0, scales[i * 3 + 1], 0,
				0, 0, scales[i * 3 + 2]
			);
			_quat_1.set(
				rotations[i * 4 + 1],
				rotations[i * 4 + 2],
				rotations[i * 4 + 3],
				rotations[i * 4 + 0]
			);
			_mat4_1.makeRotationFromQuaternion(_quat_1);
			_mat3_2.setFromMatrix4(_mat4_1);

			_mat3_2.multiply(_mat3_1);
			_mat3_1.copy(_mat3_2).transpose().premultiply(_mat3_2);

			imageData[i * 6 + 0] = _mat3_1.elements[0];
			imageData[i * 6 + 1] = _mat3_1.elements[3];
			imageData[i * 6 + 2] = _mat3_1.elements[6];
			imageData[i * 6 + 3] = _mat3_1.elements[4];
			imageData[i * 6 + 4] = _mat3_1.elements[7];
			imageData[i * 6 + 5] = _mat3_1.elements[8];
		}

		const texture = new THREE.DataTexture(
			imageData, 
			size, 
			size,
			THREE.RGFormat, 
			THREE.FloatType, 
			THREE.UVMapping, 
			THREE.ClampToEdgeWrapping,
			THREE.ClampToEdgeWrapping, 
			THREE.NearestFilter, 
			THREE.NearestFilter, 
			THREE.Texture.DEFAULT_ANISOTROPY, 
			THREE.NoColorSpace
		);
	
		texture.generateMipmaps = false;
		texture.flipY = false;
		texture.needsUpdate = true;

		return texture;
	},

	generateColorsTexture: (internalData: InternalDataType) => {
		const { colors, vertexCount } = internalData;

		const size = Utils.getTextureSize(vertexCount);

		const imageData = new Uint8ClampedArray(4 * size * size);
		imageData.set(colors);

		const texture = new Texture2D();
		texture.image = { data: imageData, width: size, height: size };
		texture.type = THREE.UnsignedByteType;
		texture.format = THREE.RGBAFormat;
		texture.magFilter = THREE.NearestFilter;
		texture.minFilter = THREE.NearestFilter;
		texture.generateMipmaps = false;
		texture.flipY = false;
		texture.colorSpace = THREE.SRGBColorSpace;
		texture.needsUpdate = true;

		return texture;
	},

	getTextureSize: (vertexCount: number) => {
		let size = Math.sqrt(vertexCount);
		size = nextPowerOfTwo(Math.ceil(size));
		return Math.max(4, size);
	}
};

const _quat_1 = new Quaternion();
const _mat3_1 = new Matrix3();
const _mat3_2 = new Matrix3();
const _mat4_1 = new Matrix4();
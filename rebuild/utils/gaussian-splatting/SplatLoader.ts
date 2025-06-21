import { Loader, FileLoader, LoadingManager } from 'three';
import { GaussianSplattingMesh } from './GaussianSplattingMesh';

export type SplatData = { 
	buffer: ArrayBuffer,
	node: GaussianSplattingMesh
}
class SplatLoader extends Loader<SplatData> {

	constructor(manager?: LoadingManager) {
		super(manager);
	}

	load(url: string, onLoad?: (data: { buffer: ArrayBuffer, node: GaussianSplattingMesh }) => void, onProgress?:(event: ProgressEvent) => void, onError?: (error: unknown) => void) {
		const scope = this;

		const loader = new FileLoader(this.manager);
		loader.setResponseType('arraybuffer');
		loader.setRequestHeader(this.requestHeader);
		loader.setPath(this.path);
		loader.setWithCredentials(this.withCredentials);

		loader.load(url, (buffer) => {
			if (onLoad !== undefined) {
				
				buffer instanceof ArrayBuffer && onLoad(scope.parse(buffer));
			}
		}, onProgress, onError);
	}

	parse(buffer: ArrayBuffer) {
		const node = new GaussianSplattingMesh(buffer);
		return { buffer, node };
	}

}

export { SplatLoader };
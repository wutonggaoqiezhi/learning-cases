import * as THREE from 'three'

import PanoramaMeshMaterial from './PanoramaMeshMaterial'
import { Panorama } from './Panorama'

export default class PanoramaMeshChunk extends THREE.Mesh<THREE.BufferGeometry, PanoramaMeshMaterial | PanoramaMeshMaterial[]> {

    constructor(geometry: THREE.BufferGeometry, material: PanoramaMeshMaterial | PanoramaMeshMaterial[]) {
  
      super(geometry, material)
  
    }
  
    private applyMaterialOperate(Operate: (material: PanoramaMeshMaterial) => void) {
  
        if (Array.isArray(this.material)) {

            this.material.forEach(item => Operate(item))

        } else {

            Operate(this.material)

        }

    }
  
  
    setView0(panorama: Panorama) {
  
      this.applyMaterialOperate(material => material.setView0(panorama))
  
    }
  
    setView1(panorama: Panorama) {
  
      this.applyMaterialOperate(mateiral => mateiral.setView1(panorama))
  
    }
  
  
    //透明度
    setOpacity(value: number) {
  
      this.applyMaterialOperate(mateiral => mateiral.setOpacity(value))
  
    }
  
  
    //亮度
    setBrightness(value: number) {
  
      this.applyMaterialOperate(mateiral => mateiral.setBrightness(value))
  
    }
  
  
    //对比度
    setContrast(value: number) {
  
      this.applyMaterialOperate(mateiral => mateiral.setContrast(value))
  
    }
  
  
    //饱和度
    setSaturation(value: number) {
  
      this.applyMaterialOperate(mateiral => mateiral.setSaturation(value))
  
    }
  
  
    //暗部改善
    setDarkEnhance(value: number) {
  
      this.applyMaterialOperate(mateiral => mateiral.setDarkEnhance(value))
  
    }
  
  
    //亮部改善
    setHighlightEnhance(value: number) {
  
      this.applyMaterialOperate(mateiral => mateiral.setHighlightEnhance(value))
  
    }
  
    setClippingPlanes(clippingPlanes: THREE.Plane[]) {
  
      this.applyMaterialOperate(material => material.clippingPlanes = clippingPlanes)
  
    }
  
    setClipIntersection(intersection: boolean) {
  
      this.applyMaterialOperate(material => material.clipIntersection = intersection)
  
    }
  
    setClippingOpacity(opacity: number) {
  
      this.applyMaterialOperate(material => material.setClippingOpacity(opacity))
  
    }
  }
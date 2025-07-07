import { FirstPersonControls, OrbitControls, TransformControls } from "three/examples/jsm/Addons.js";
import { Euler, Matrix4, Quaternion, Vector3 } from "three";
import BaseScene from "./Scene/BaseScene";
import { RotateCommand, ScaleCommand, TranslateCommand } from './History/index'

/**
 * 控制轨道控制器
*/
export default class ControlsManager {
    scene: BaseScene

    _vector3: Vector3 = new Vector3()
    _matrix: Matrix4 = new Matrix4()
    _quaternion: Quaternion = new Quaternion()
    _euler: Euler = new Euler()

    Orbit:  OrbitControls
    Transform: TransformControls
    Person: FirstPersonControls

    constructor(scene: BaseScene) {
        this.scene = scene

        this.createControls()
    }

    /**
     * 每个场景默认创建三个轨道控制器
    */
    createControls(target: Vector3 = new Vector3()) {
        this.Orbit = new OrbitControls(this.scene.currentCamera, this.scene.editor.dom)
        this.Orbit.target.copy( target )

        this.Transform = new TransformControls(this.scene.currentCamera, this.scene.editor.dom)
        // this.Transform.mode = 'scale'
        this.addTransformListener()

        // 默认禁用
        this.Person = new FirstPersonControls(this.scene.currentCamera, this.scene.editor.dom)
        this.Person.movementSpeed = 150
        this.Person.lookSpeed = 0.1
        this.Person.enabled = false
    }

    /**
     * 添加监听函数
    */
    addTransformListener() {
        this.Transform.addEventListener( 'dragging-changed', (event) => {
            // 可在此处添加命令（translateCommand | scaleCommand | rotateCommand）
            console.log(this.Transform.object)
            // 操作时禁用场景轨道旋转
            this.Orbit.enabled = !event.value

            if( event.value ) {
                if(this.Transform.mode == 'rotate') this._euler.copy(this.Transform.object.rotation)
                if(this.Transform.mode == 'scale') this._vector3.copy(this.Transform.object.scale)
                if(this.Transform.mode == 'translate') this._vector3.copy(this.Transform.object.position)
            } else {
                // TODO:用Matrix4统一？？？
                switch(this.Transform.mode) {
                    case 'rotate':
                        if(this.Transform.object.rotation.equals(this._euler)) break
                        this.scene.history.addCommand(
                            new RotateCommand(this.Transform.object, this._euler, this.Transform.object.rotation)
                        )
                        break
                    case 'scale':
                        if(this.Transform.object.position.equals(this._vector3)) break
                        this.scene.history.addCommand(
                            new ScaleCommand(this.Transform.object, this._vector3, this.Transform.object.scale)
                        )
                        break
                    case 'translate':
                        if(this.Transform.object.position.equals(this._vector3)) break
                        this.scene.history.addCommand(
                            new TranslateCommand(this.Transform.object, this._vector3, this.Transform.object.position)
                        )
                        break
                }
            }
        })
        
        // 状态改变就会触发
        // this.Transform.addEventListener('change', () => {
        //     console.log('Transform change')
        // })
    }

    /**
     * 第一人称轨道控制器开关
    */
    set personEnabled(bool: boolean) {
        this.Orbit.enabled = !bool
        this.Transform.enabled = !bool

        this.Person.enabled = bool
    }
}

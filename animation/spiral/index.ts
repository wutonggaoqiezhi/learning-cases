import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/Addons.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { GUI } from "dat.gui";
import Editor from "../Editor";

export default class HarmonicPattern {
  editor: Editor;

  params: {
    radius: number;
    arms: number;
    loops: number;
    rotationSpeed: number;
    flowSpeed: number;
    pulseIntensity: number;
    energyIntensity: number;
    colorTheme: string;
    gradientSpeed: number;
    energyBursts: boolean;
    burstFrequency: number;
    burstIntensity: number;
    bloomStrength: number;
    bloomRadius: number;
    bloomThreshold: number;
  };

  colorThemes: {
    [key: string]: {
      colorA: string;
      colorB: string;
      colorC: string;
      colorD: string;
      colorE: string;
    };
  };

  burstState: {
    active: boolean;
    startTime: number;
    duration: number;
    position: THREE.Vector3;
    maxRadius: number;
  };

  burstTimer: number;
  bloomPass: UnrealBloomPass;

  controls: OrbitControls;
  clock: THREE.Clock;
  mesh: THREE.LineSegments<THREE.BufferGeometry, THREE.ShaderMaterial>;

  constructor(editor: Editor) {
    this.editor = editor;
    this.editor.viewport.controls.enabled = false;

    this.colorThemes = {
      cosmic: {
        colorA: "#20c2ff",
        colorB: "#f030f0",
        colorC: "#ffdd00",
        colorD: "#5050ff",
        colorE: "#ff3090",
      },
      ocean: {
        colorA: "#0077be",
        colorB: "#00cccc",
        colorC: "#90ee90",
        colorD: "#006994",
        colorE: "#40e0d0",
      },
      forest: {
        colorA: "#228b22",
        colorB: "#32cd32",
        colorC: "#ffd700",
        colorD: "#006633",
        colorE: "#7cfc00",
      },
      fire: {
        colorA: "#ff4500",
        colorB: "#ff7f50",
        colorC: "#ffff00",
        colorD: "#8b0000",
        colorE: "#ffd700",
      },
    };

    this.params = {
      radius: 16.0,
      arms: 7,
      loops: 18,
      rotationSpeed: 0.15,
      flowSpeed: 0.55,
      pulseIntensity: 2.0,
      energyIntensity: 3.0,

      colorTheme: "cosmic",
      gradientSpeed: 0.2,

      energyBursts: true,
      burstFrequency: 8,
      burstIntensity: 2.0,

      bloomStrength: 0.8,
      bloomRadius: 0.5,
      bloomThreshold: 0.6,
    };

    this.burstState = {
      active: false,
      startTime: 0,
      duration: 2.0,
      position: new THREE.Vector3(),
      maxRadius: 30,
    };

    this.burstTimer = 0;

    this.init();
    this.setupGUI();
    this.animate();
  }

  init() {
    this.editor.composer.addPass(
      new RenderPass(this.editor.scene, this.editor.camera)
    );

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      this.params.bloomStrength,
      this.params.bloomRadius,
      this.params.bloomThreshold
    );
    this.editor.composer.addPass(this.bloomPass);

    this.controls = new OrbitControls(
      this.editor.camera,
      this.editor.renderer.domElement
    );
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.04;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = this.params.rotationSpeed;
    this.controls.maxDistance = 80;
    this.controls.minDistance = 5;

    this.clock = new THREE.Clock();

    this.createPattern();

    this.editor.renderer.setAnimationLoop(this.animate.bind(this));
  }

  createPatternOld() {
    if (this.mesh) {
      this.editor.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.ShaderMaterial).dispose();
    }

    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const indices: number[] = [];
    const radiusVariations: number[] = [];
    const angles: number[] = [];

    const r = this.params.radius;
    const arms = this.params.arms;
    const loops = this.params.loops;
    const pointsPerArm = loops * 18;

    // 应该是控制形状的
    for (let arm = 0; arm < arms; arm++) {
      const armOffset = (arm * Math.PI * 2) / arms;

      for (let i = 0; i < pointsPerArm; i++) {
        const t = i / (pointsPerArm - 1);
        const angle = armOffset + t * Math.PI * 2 * loops;

        const radius =
          r *
          (0.3 +
            0.7 * t +
            0.2 *
              Math.sin(t * Math.PI * 12 + arm * 0.8) *
              Math.cos(angle * 0.5));
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y =
          Math.sin(t * Math.PI * 6 + angle * 0.5) * 4.0 * (1.0 - t * 0.7);

        positions.push(x, y, z);
        radiusVariations.push(radius / r);
        angles.push(angle);

        if (i < pointsPerArm - 1) {
          indices.push(arm * pointsPerArm + i, arm * pointsPerArm + i + 1);
        }

        const connectFrequency = 3;
        if (i % connectFrequency === 0) {
          const nextArm = (arm + 1) % arms;
          indices.push(arm * pointsPerArm + i, nextArm * pointsPerArm + i);
        }
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "radiusVar",
      new THREE.Float32BufferAttribute(radiusVariations, 1)
    );
    geometry.setAttribute("angle", new THREE.Float32BufferAttribute(angles, 1));
    geometry.setIndex(indices);

    const theme = this.colorThemes[this.params.colorTheme];

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color(theme.colorA) },
        colorB: { value: new THREE.Color(theme.colorB) },
        colorC: { value: new THREE.Color(theme.colorC) },
        colorD: { value: new THREE.Color(theme.colorD) },
        colorE: { value: new THREE.Color(theme.colorE) },

        flowSpeed: { value: this.params.flowSpeed },
        pulseIntensity: { value: this.params.pulseIntensity },
        energyIntensity: { value: this.params.energyIntensity },

        gradientSpeed: { value: this.params.gradientSpeed },

        burstActive: { value: 0.0 },
        burstPosition: { value: new THREE.Vector3(0, 0, 0) },
        burstRadius: { value: 0.0 },
        burstIntensity: { value: this.params.burstIntensity },
      },
      // vertexShader: /*glsl*/`
      //     uniform float time;
      //     uniform float flowSpeed;
      //     uniform float pulseIntensity;

      //     attribute float radiusVar;
      //     attribute float angle;
      //     varying vec3 vPosition;
      //     varying float vRadiusVar;
      //     varying float vAngle;
      //     varying float vYpos;

      //     void main() {
      //       vPosition = position;
      //       vRadiusVar = radiusVar;
      //       vAngle = angle;
      //       vYpos = position.y;

      //       vec3 pos = position;

      //       float wave = sin(pos.y * 0.6 + time * flowSpeed * 1.2 + vAngle * 0.3) *
      //                    cos(length(pos.xz) * 0.2 - time * flowSpeed * 1.0);

      //       float radialPulse = sin(radiusVar * 15.0 - time * flowSpeed * 1.8 + vAngle * 0.5) *
      //                           cos(radiusVar * 7.0 + time * flowSpeed * 0.8);

      //       float spiralFlow = sin(vAngle * 5.0 + time * flowSpeed * 1.4) *
      //                          cos(radiusVar * 12.0 - time * flowSpeed * 1.1);

      //       pos.y += wave * pulseIntensity * 0.5;
      //       pos.xz *= 1.0 + (radialPulse * 0.5 + spiralFlow * 0.5) * pulseIntensity * 0.15;

      //       gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      //     }
      //   `,
      // fragmentShader: /*glsl*/`
      //     uniform float time;
      //     uniform vec3 colorA;
      //     uniform vec3 colorB;
      //     uniform vec3 colorC;
      //     uniform vec3 colorD;
      //     uniform vec3 colorE;

      //     uniform float flowSpeed;
      //     uniform float pulseIntensity;
      //     uniform float energyIntensity;
      //     uniform float gradientSpeed;

      //     uniform float burstActive;
      //     uniform vec3 burstPosition;
      //     uniform float burstRadius;
      //     uniform float burstIntensity;

      //     varying vec3 vPosition;
      //     varying float vRadiusVar;
      //     varying float vAngle;
      //     varying float vYpos;

      //     float noise(vec2 st) {
      //        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      //     }

      //     vec3 hsv2rgb(vec3 c) {
      //        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      //        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      //        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      //     }

      //     void main() {
      //       float cycleTime = mod(time * gradientSpeed, 5.0);

      //       vec3 color1, color2;
      //       float mixFactor;

      //       if (cycleTime < 1.0) {
      //         color1 = colorA;
      //         color2 = colorB;
      //         mixFactor = cycleTime;
      //       } else if (cycleTime < 2.0) {
      //         color1 = colorB;
      //         color2 = colorC;
      //         mixFactor = cycleTime - 1.0;
      //       } else if (cycleTime < 3.0) {
      //         color1 = colorC;
      //         color2 = colorD;
      //         mixFactor = cycleTime - 2.0;
      //       } else if (cycleTime < 4.0) {
      //         color1 = colorD;
      //         color2 = colorE;
      //         mixFactor = cycleTime - 3.0;
      //       } else {
      //         color1 = colorE;
      //         color2 = colorA;
      //         mixFactor = cycleTime - 4.0;
      //       }

      //       float posModulation = vRadiusVar * 0.3 + sin(vAngle * 3.0 + time * 0.2) * 0.2;
      //       mixFactor = mix(mixFactor, posModulation, 0.4);

      //       vec3 baseColor = mix(color1, color2, smoothstep(0.0, 1.0, mixFactor));

      //       float lengthPulse = sin(length(vPosition) * 0.5 - time * flowSpeed * 1.2 + vAngle * 0.5);
      //       lengthPulse = pow(smoothstep(0.0, 1.0, 0.5 + 0.5 * lengthPulse), 3.0);

      //       float energy = sin(vRadiusVar * 20.0 - time * flowSpeed * 2.5 + vAngle * 2.0);
      //       energy = pow(max(0.0, energy), 6.0) * energyIntensity;

      //       energy *= (0.7 + 0.6 * noise(vec2(vRadiusVar * 15.0, time * 0.6)));

      //       float yPulse = pow(max(0.0, sin(vYpos * 1.5 + time * 1.0 - vAngle * 0.8)), 4.0);

      //       float burstEffect = 0.0;
      //       if (burstActive > 0.0) {
      //         float distToBurst = length(vPosition - burstPosition);

      //         float ringWidth = 4.0;
      //         float ringEffect = 1.0 - abs(distToBurst - burstRadius) / ringWidth;
      //         ringEffect = max(0.0, ringEffect);
      //         ringEffect = pow(ringEffect, 3.0);

      //         burstEffect = ringEffect * burstActive * burstIntensity;
      //       }

      //       vec3 finalColor = baseColor;

      //       finalColor = mix(finalColor, colorC, energy * 0.8);

      //       vec3 pulseColor = mix(colorB, colorE, sin(time * 0.5 + vAngle));
      //       finalColor += pulseColor * lengthPulse * pulseIntensity * 0.5;
      //       finalColor += colorC * yPulse * pulseIntensity * 0.3;

      //       finalColor += vec3(1.0, 0.9, 0.5) * burstEffect;

      //       gl_FragColor = vec4(finalColor, 1.0);
      //     }
      //   `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.LineSegments(geometry, material);
    this.editor.scene.add(this.mesh);
  }

  createPatternA() {
    if (this.mesh) {
      this.editor.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.ShaderMaterial).dispose();
    }

    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const indices: number[] = [];
    const radiusVariations: number[] = [];
    const angles: number[] = [];

    const r = this.params.radius;
    const arms = this.params.arms;
    const loops = this.params.loops;
    const pointsPerArm = loops * 18;

    // 修改为心形
    for (let arm = 0; arm < arms; arm++) {
      const armOffset = (arm * Math.PI * 2) / arms;

      for (let i = 0; i < pointsPerArm; i++) {
        const t = i / (pointsPerArm - 1);
        const angle = armOffset + t * Math.PI * 2; // 移除 loops 影响

        // 心形曲线参数方程
        const heartX = 16 * Math.pow(Math.sin(angle), 3);
        const heartY =
          13 * Math.cos(angle) -
          5 * Math.cos(2 * angle) -
          2 * Math.cos(3 * angle) -
          Math.cos(4 * angle);

        // 调整缩放和位置
        const x = (r * heartX) / 20; // 缩小 x 坐标
        const y = (r * heartY) / 20 + 5; // 缩小 y 坐标并向上移动
        const z = 0; // z 坐标设为 0，使心形位于 xy 平面

        positions.push(x, y, z);
        radiusVariations.push(1.0); // 心形不需要半径变化
        angles.push(angle);

        if (i < pointsPerArm - 1) {
          indices.push(arm * pointsPerArm + i, arm * pointsPerArm + i + 1);
        }

        const connectFrequency = 3;
        if (i % connectFrequency === 0) {
          const nextArm = (arm + 1) % arms;
          indices.push(arm * pointsPerArm + i, nextArm * pointsPerArm + i);
        }
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "radiusVar",
      new THREE.Float32BufferAttribute(radiusVariations, 1)
    );
    geometry.setAttribute("angle", new THREE.Float32BufferAttribute(angles, 1));
    geometry.setIndex(indices);

    const theme = this.colorThemes[this.params.colorTheme];

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color(theme.colorA) },
        colorB: { value: new THREE.Color(theme.colorB) },
        colorC: { value: new THREE.Color(theme.colorC) },
        colorD: { value: new THREE.Color(theme.colorD) },
        colorE: { value: new THREE.Color(theme.colorE) },

        flowSpeed: { value: this.params.flowSpeed },
        pulseIntensity: { value: this.params.pulseIntensity },
        energyIntensity: { value: this.params.energyIntensity },

        gradientSpeed: { value: this.params.gradientSpeed },

        burstActive: { value: 0.0 },
        burstPosition: { value: new THREE.Vector3(0, 0, 0) },
        burstRadius: { value: 0.0 },
        burstIntensity: { value: this.params.burstIntensity },
      },
      vertexShader: /*glsl*/ `
          uniform float time;
          uniform float flowSpeed;
          uniform float pulseIntensity;

          attribute float radiusVar;
          attribute float angle;
          varying vec3 vPosition;
          varying float vRadiusVar;
          varying float vAngle;
          varying float vYpos;

          void main() {
            vPosition = position;
            vRadiusVar = radiusVar;
            vAngle = angle;
            vYpos = position.y;

            vec3 pos = position;

            float wave = sin(pos.y * 0.6 + time * flowSpeed * 1.2 + vAngle * 0.3) *
                         cos(length(pos.xz) * 0.2 - time * flowSpeed * 1.0);

            float radialPulse = sin(radiusVar * 15.0 - time * flowSpeed * 1.8 + vAngle * 0.5) *
                                cos(radiusVar * 7.0 + time * flowSpeed * 0.8);

            float spiralFlow = sin(vAngle * 5.0 + time * flowSpeed * 1.4) *
                               cos(radiusVar * 12.0 - time * flowSpeed * 1.1);

            pos.y += wave * pulseIntensity * 0.5;
            pos.xz *= 1.0 + (radialPulse * 0.5 + spiralFlow * 0.5) * pulseIntensity * 0.15;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
      fragmentShader: /*glsl*/ `
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          uniform vec3 colorC;
          uniform vec3 colorD;
          uniform vec3 colorE;

          uniform float flowSpeed;
          uniform float pulseIntensity;
          uniform float energyIntensity;
          uniform float gradientSpeed;

          uniform float burstActive;
          uniform vec3 burstPosition;
          uniform float burstRadius;
          uniform float burstIntensity;

          varying vec3 vPosition;
          varying float vRadiusVar;
          varying float vAngle;
          varying float vYpos;

          float noise(vec2 st) {
             return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }

          vec3 hsv2rgb(vec3 c) {
             vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
             vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
             return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
          }

          void main() {
            float cycleTime = mod(time * gradientSpeed, 5.0);

            vec3 color1, color2;
            float mixFactor;

            if (cycleTime < 1.0) {
              color1 = colorA;
              color2 = colorB;
              mixFactor = cycleTime;
            } else if (cycleTime < 2.0) {
              color1 = colorB;
              color2 = colorC;
              mixFactor = cycleTime - 1.0;
            } else if (cycleTime < 3.0) {
              color1 = colorC;
              color2 = colorD;
              mixFactor = cycleTime - 2.0;
            } else if (cycleTime < 4.0) {
              color1 = colorD;
              color2 = colorE;
              mixFactor = cycleTime - 3.0;
            } else {
              color1 = colorE;
              color2 = colorA;
              mixFactor = cycleTime - 4.0;
            }

            float posModulation = vRadiusVar * 0.3 + sin(vAngle * 3.0 + time * 0.2) * 0.2;
            mixFactor = mix(mixFactor, posModulation, 0.4);

            vec3 baseColor = mix(color1, color2, smoothstep(0.0, 1.0, mixFactor));

            float lengthPulse = sin(length(vPosition) * 0.5 - time * flowSpeed * 1.2 + vAngle * 0.5);
            lengthPulse = pow(smoothstep(0.0, 1.0, 0.5 + 0.5 * lengthPulse), 3.0);

            float energy = sin(vRadiusVar * 20.0 - time * flowSpeed * 2.5 + vAngle * 2.0);
            energy = pow(max(0.0, energy), 6.0) * energyIntensity;

            energy *= (0.7 + 0.6 * noise(vec2(vRadiusVar * 15.0, time * 0.6)));

            float yPulse = pow(max(0.0, sin(vYpos * 1.5 + time * 1.0 - vAngle * 0.8)), 4.0);

            float burstEffect = 0.0;
            if (burstActive > 0.0) {
              float distToBurst = length(vPosition - burstPosition);

              float ringWidth = 4.0;
              float ringEffect = 1.0 - abs(distToBurst - burstRadius) / ringWidth;
              ringEffect = max(0.0, ringEffect);
              ringEffect = pow(ringEffect, 3.0);

              burstEffect = ringEffect * burstActive * burstIntensity;
            }

            vec3 finalColor = baseColor;

            finalColor = mix(finalColor, colorC, energy * 0.8);

            vec3 pulseColor = mix(colorB, colorE, sin(time * 0.5 + vAngle));
            finalColor += pulseColor * lengthPulse * pulseIntensity * 0.5;
            finalColor += colorC * yPulse * pulseIntensity * 0.3;

            finalColor += vec3(1.0, 0.9, 0.5) * burstEffect;

            gl_FragColor = vec4(finalColor, 1.0);
          }
        `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.LineSegments(geometry, material);
    this.editor.scene.add(this.mesh);
  }

  createPattern() {
    if (this.mesh) {
      this.editor.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.ShaderMaterial).dispose();
    }

    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const indices: number[] = [];
    const radiusVariations: number[] = [];
    const angles: number[] = [];

    const r = this.params.radius;
    const arms = this.params.arms;
    const loops = this.params.loops;
    const pointsPerArm = loops * 36; // 增加点数

    // 修改为心形
    for (let arm = 0; arm < arms; arm++) {
      const armOffset = (arm * Math.PI * 2) / arms;

      for (let i = 0; i < pointsPerArm; i++) {
        const t = i / (pointsPerArm - 1);
        const angle = armOffset + t * Math.PI * 2; // 移除 loops 影响

        // 更圆润的心形曲线参数方程
        const heartX = 16 * Math.pow(Math.sin(angle), 3) * 0.7; // 缩小 x 的影响
        const heartY =
          (13 * Math.cos(angle) -
            5 * Math.cos(2 * angle) -
            2 * Math.cos(3 * angle) -
            Math.cos(4 * angle)) *
            0.7 + // 缩小 y 的影响
          3 * Math.sin(angle); // 增加圆润度

        // 调整缩放和位置
        const x = (r * heartX) / 20; // 缩小 x 坐标
        const y = (r * heartY) / 20 + 5; // 缩小 y 坐标并向上移动
        const z = 0; // z 坐标设为 0，使心形位于 xy 平面

        positions.push(x, y, z);
        radiusVariations.push(1.0); // 心形不需要半径变化
        angles.push(angle);

        if (i < pointsPerArm - 1) {
          indices.push(arm * pointsPerArm + i, arm * pointsPerArm + i + 1);
        }

        const connectFrequency = 3;
        if (i % connectFrequency === 0) {
          const nextArm = (arm + 1) % arms;
          indices.push(arm * pointsPerArm + i, nextArm * pointsPerArm + i);
        }
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "radiusVar",
      new THREE.Float32BufferAttribute(radiusVariations, 1)
    );
    geometry.setAttribute("angle", new THREE.Float32BufferAttribute(angles, 1));
    geometry.setIndex(indices);

    const theme = this.colorThemes[this.params.colorTheme];

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color(theme.colorA) },
        colorB: { value: new THREE.Color(theme.colorB) },
        colorC: { value: new THREE.Color(theme.colorC) },
        colorD: { value: new THREE.Color(theme.colorD) },
        colorE: { value: new THREE.Color(theme.colorE) },

        flowSpeed: { value: this.params.flowSpeed },
        pulseIntensity: { value: this.params.pulseIntensity },
        energyIntensity: { value: this.params.energyIntensity },

        gradientSpeed: { value: this.params.gradientSpeed },

        burstActive: { value: 0.0 },
        burstPosition: { value: new THREE.Vector3(0, 0, 0) },
        burstRadius: { value: 0.0 },
        burstIntensity: { value: this.params.burstIntensity },
      },
      vertexShader: /*glsl*/ `
          uniform float time;
          uniform float flowSpeed;
          uniform float pulseIntensity;

          attribute float radiusVar;
          attribute float angle;
          varying vec3 vPosition;
          varying float vRadiusVar;
          varying float vAngle;
          varying float vYpos;

          void main() {
            vPosition = position;
            vRadiusVar = radiusVar;
            vAngle = angle;
            vYpos = position.y;

            vec3 pos = position;

            float wave = sin(pos.y * 0.6 + time * flowSpeed * 1.2 + vAngle * 0.3) *
                         cos(length(pos.xz) * 0.2 - time * flowSpeed * 1.0);

            float radialPulse = sin(radiusVar * 15.0 - time * flowSpeed * 1.8 + vAngle * 0.5) *
                                cos(radiusVar * 7.0 + time * flowSpeed * 0.8);

            float spiralFlow = sin(vAngle * 5.0 + time * flowSpeed * 1.4) *
                               cos(radiusVar * 12.0 - time * flowSpeed * 1.1);

            pos.y += wave * pulseIntensity * 0.5;
            pos.xz *= 1.0 + (radialPulse * 0.5 + spiralFlow * 0.5) * pulseIntensity * 0.15;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
      fragmentShader: /*glsl*/ `
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          uniform vec3 colorC;
          uniform vec3 colorD;
          uniform vec3 colorE;

          uniform float flowSpeed;
          uniform float pulseIntensity;
          uniform float energyIntensity;
          uniform float gradientSpeed;

          uniform float burstActive;
          uniform vec3 burstPosition;
          uniform float burstRadius;
          uniform float burstIntensity;

          varying vec3 vPosition;
          varying float vRadiusVar;
          varying float vAngle;
          varying float vYpos;

          float noise(vec2 st) {
             return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }

          vec3 hsv2rgb(vec3 c) {
             vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
             vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
             return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
          }

          void main() {
            float cycleTime = mod(time * gradientSpeed, 5.0);

            vec3 color1, color2;
            float mixFactor;

            if (cycleTime < 1.0) {
              color1 = colorA;
              color2 = colorB;
              mixFactor = cycleTime;
            } else if (cycleTime < 2.0) {
              color1 = colorB;
              color2 = colorC;
              mixFactor = cycleTime - 1.0;
            } else if (cycleTime < 3.0) {
              color1 = colorC;
              color2 = colorD;
              mixFactor = cycleTime - 2.0;
            } else if (cycleTime < 4.0) {
              color1 = colorD;
              color2 = colorE;
              mixFactor = cycleTime - 3.0;
            } else {
              color1 = colorE;
              color2 = colorA;
              mixFactor = cycleTime - 4.0;
            }

            float posModulation = vRadiusVar * 0.3 + sin(vAngle * 3.0 + time * 0.2) * 0.2;
            mixFactor = mix(mixFactor, posModulation, 0.4);

            vec3 baseColor = mix(color1, color2, smoothstep(0.0, 1.0, mixFactor));

            float lengthPulse = sin(length(vPosition) * 0.5 - time * flowSpeed * 1.2 + vAngle * 0.5);
            lengthPulse = pow(smoothstep(0.0, 1.0, 0.5 + 0.5 * lengthPulse), 3.0);

            float energy = sin(vRadiusVar * 20.0 - time * flowSpeed * 2.5 + vAngle * 2.0);
            energy = pow(max(0.0, energy), 6.0) * energyIntensity;

            energy *= (0.7 + 0.6 * noise(vec2(vRadiusVar * 15.0, time * 0.6)));

            float yPulse = pow(max(0.0, sin(vYpos * 1.5 + time * 1.0 - vAngle * 0.8)), 4.0);

            float burstEffect = 0.0;
            if (burstActive > 0.0) {
              float distToBurst = length(vPosition - burstPosition);

              float ringWidth = 4.0;
              float ringEffect = 1.0 - abs(distToBurst - burstRadius) / ringWidth;
              ringEffect = max(0.0, ringEffect);
              ringEffect = pow(ringEffect, 3.0);

              burstEffect = ringEffect * burstActive * burstIntensity;
            }

            vec3 finalColor = baseColor;

            finalColor = mix(finalColor, colorC, energy * 0.8);

            vec3 pulseColor = mix(colorB, colorE, sin(time * 0.5 + vAngle));
            finalColor += pulseColor * lengthPulse * pulseIntensity * 0.5;
            finalColor += colorC * yPulse * pulseIntensity * 0.3;

            finalColor += vec3(1.0, 0.9, 0.5) * burstEffect;

            gl_FragColor = vec4(finalColor, 1.0);
          }
        `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.LineSegments(geometry, material);
    this.editor.scene.add(this.mesh);
  }

  triggerEnergyBurst() {
    if (!this.burstState.active) {
      this.burstState.active = true;
      this.burstState.startTime = this.clock.getElapsedTime();

      const angle = Math.random() * Math.PI * 2;
      const radius = this.params.radius * (0.3 + Math.random() * 0.7);
      const y = (Math.random() - 0.5) * 10;

      this.burstState.position.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );

      if (this.mesh && this.mesh.material.uniforms) {
        this.mesh.material.uniforms.burstPosition.value.copy(
          this.burstState.position
        );
      }
    }
  }

  setupGUI() {
    const gui = new GUI();

    const patternFolder = gui.addFolder("Pattern Shape");
    patternFolder
      .add(this.params, "radius", 5, 30)
      .name("Radius")
      .onChange(() => this.createPattern());
    patternFolder
      .add(this.params, "arms", 3, 15, 1)
      .name("Arms")
      .onChange(() => this.createPattern());
    patternFolder
      .add(this.params, "loops", 10, 50, 1)
      .name("Loops")
      .onChange(() => this.createPattern());

    const themeFolder = gui.addFolder("Color Theme");
    themeFolder
      .add(this.params, "colorTheme", Object.keys(this.colorThemes))
      .name("Theme")
      .onChange((value) => {
        const theme = this.colorThemes[value];
        if (this.mesh && this.mesh.material.uniforms) {
          this.mesh.material.uniforms.colorA.value.set(theme.colorA);
          this.mesh.material.uniforms.colorB.value.set(theme.colorB);
          this.mesh.material.uniforms.colorC.value.set(theme.colorC);
          this.mesh.material.uniforms.colorD.value.set(theme.colorD);
          this.mesh.material.uniforms.colorE.value.set(theme.colorE);
        }
      });
    themeFolder
      .add(this.params, "gradientSpeed", 0.05, 0.5)
      .name("Gradient Speed")
      .onChange((value) => {
        if (this.mesh) this.mesh.material.uniforms.gradientSpeed.value = value;
      });

    const effectsFolder = gui.addFolder("Animation & Effects");
    effectsFolder
      .add(this.params, "rotationSpeed", 0, 1)
      .name("Rotation Speed")
      .onChange((value) => {
        this.controls.autoRotateSpeed = value;
      });
    effectsFolder
      .add(this.params, "flowSpeed", 0, 2)
      .name("Flow Speed")
      .onChange((value) => {
        if (this.mesh) this.mesh.material.uniforms.flowSpeed.value = value;
      });
    effectsFolder
      .add(this.params, "pulseIntensity", 0, 4)
      .name("Pulse Intensity")
      .onChange((value) => {
        if (this.mesh) this.mesh.material.uniforms.pulseIntensity.value = value;
      });
    effectsFolder
      .add(this.params, "energyIntensity", 0, 4)
      .name("Energy Intensity")
      .onChange((value) => {
        if (this.mesh)
          this.mesh.material.uniforms.energyIntensity.value = value;
      });

    const burstFolder = gui.addFolder("Energy Bursts");
    burstFolder.add(this.params, "energyBursts").name("Enable Bursts");
    burstFolder
      .add(this.params, "burstFrequency", 1, 15)
      .name("Burst Interval (s)");
    burstFolder
      .add(this.params, "burstIntensity", 0.5, 5)
      .name("Burst Intensity")
      .onChange((value) => {
        if (this.mesh) this.mesh.material.uniforms.burstIntensity.value = value;
      });
    burstFolder.add(this, "triggerEnergyBurst").name("Trigger Burst Now");

    const bloomFolder = gui.addFolder("Bloom Effect");
    bloomFolder
      .add(this.params, "bloomStrength", 0, 3)
      .name("Strength")
      .onChange((value) => {
        this.bloomPass.strength = value;
      });
    bloomFolder
      .add(this.params, "bloomRadius", 0, 2)
      .name("Radius")
      .onChange((value) => {
        this.bloomPass.radius = value;
      });
    bloomFolder
      .add(this.params, "bloomThreshold", 0, 1)
      .name("Threshold")
      .onChange((value) => {
        this.bloomPass.threshold = value;
      });

    patternFolder.open();
    themeFolder.open();
    effectsFolder.open();
    burstFolder.open();
    bloomFolder.open();
  }

  animate() {
    const time = this.clock.getElapsedTime();
    const delta = this.clock.getDelta();

    if (this.mesh && this.mesh.material.uniforms) {
      this.mesh.material.uniforms.time.value = time;
    }

    if (this.params.energyBursts) {
      this.burstTimer += delta;
      if (this.burstTimer > this.params.burstFrequency) {
        this.triggerEnergyBurst();
        this.burstTimer = 0;
      }

      if (this.burstState.active) {
        const burstAge = time - this.burstState.startTime;
        const burstProgress = burstAge / this.burstState.duration;

        if (burstProgress >= 1.0) {
          this.burstState.active = false;
          if (this.mesh && this.mesh.material.uniforms) {
            this.mesh.material.uniforms.burstActive.value = 0.0;
          }
        } else {
          const radius = this.burstState.maxRadius * burstProgress;
          const intensity = Math.sin(burstProgress * Math.PI);

          if (this.mesh && this.mesh.material.uniforms) {
            this.mesh.material.uniforms.burstRadius.value = radius;
            this.mesh.material.uniforms.burstActive.value = intensity;
          }
        }
      }
    }

    this.controls.update();

    this.editor.composer.render();
  }
}

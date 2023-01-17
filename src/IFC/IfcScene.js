import {
  MathUtils,
  Box3,
  Vector3,
  Clock,
  AmbientLight,
  Color,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  GridHelper,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControlsCannon } from './PointerLockControlsCannon.js';
import * as CANNON from 'cannon-es';
import { threeToCannon, ShapeType } from 'three-to-cannon';
import { SHAPE_TYPES } from 'cannon-es';

export class IfcScene {
  constructor(id) {
    this.clock = new Clock();
    const self = this;
    this.ifcModel = null;
    this.canvasId = id;
    this.threeCanvas = document.getElementById(id);
    this.calculateWidthHeight(this);
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: this.threeCanvas,
    });
    this.renderer.setSize(this.width, this.height);
    this.ifcModels = [];
    this.grid = new GridHelper();
    this.scene.background = new Color(0x6c757d);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.camera.position.z = 5;
    this.setupLights();
    this.setupWindowResize();

    this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);

    // physics
    this.world = new CANNON.World();
    this.world.gravity.set(0, -20, 0);
    const physicsMaterial = new CANNON.Material('physics');
    const physics_physics = new CANNON.ContactMaterial(physicsMaterial, physicsMaterial, {
      friction: 0.0,
      restitution: 0.3,
    });
    // Create the user collision sphere
    const radius = 1.3;
    const sphereShape = new CANNON.Sphere(radius);
    this.cameraBody = new CANNON.Body({ mass: 5, material: physicsMaterial });
    this.cameraBody.addShape(sphereShape);
    this.cameraBody.position.set(
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z,
    );
    this.cameraBody.linearDamping = 0.9;
    this.world.addBody(this.cameraBody);

    this.firstPersonControls = new PointerLockControlsCannon(this.camera, this.cameraBody);

    this.setupAnimation(self);
    this.setupCamera();
    this.scene.add(this.grid);
    this.scene.add(this.firstPersonControls.getObject());

    this.currentControls = 'orbit';
  }

  setupAnimation(self) {
    const delta = self.clock.getDelta();
    if (this.currentControls === 'orbit') {
      self.orbitControls.update();
    } else {
      self.firstPersonControls.update(delta);
    }
    self.world.step(delta);

    self.renderer.render(self.scene, self.camera);
    requestAnimationFrame(function () {
      self.setupAnimation(self);
    });
  }

  calculateWidthHeight() {
    this.width = document.getElementById(this.canvasId).offsetWidth;
    this.height = document.getElementById(this.canvasId).offsetHeight;
  }

  setupLights() {
    const directionalLight1 = new DirectionalLight(0xffeeff, 0.8);
    directionalLight1.position.set(1, 1, 1);
    this.scene.add(directionalLight1);
    const directionalLight2 = new DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-1, 0.5, -1);
    this.scene.add(directionalLight2);
    const ambientLight = new AmbientLight(0xffffee, 0.25);
    this.scene.add(ambientLight);
  }

  setupWindowResize() {
    window.addEventListener('resize', () => {
      this.calculateWidthHeight();
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
    window.addEventListener('mouseup', () => {
      // this.firstPersonControls.activeLook = false;
    });
    window.addEventListener('mousedown', () => {
      // this.firstPersonControls.activeLook = true;
    });
  }

  setupCamera() {
    this.camera.position.set(10, 10, 10);
    this.orbitControls.target.set(0, 0, 0);
    this.orbitControls.enableDamping = true;
  }

  add(obj) {
    this.ifcModel = this.scene.add(obj);
    this.ifcModels.push(this.ifcModel);
    /*
    const result = threeToCannon(obj, {type: ShapeType.MESH});
    const {shape, offset, quaternion} = result;

    const rigidBody = new CANNON.Body({
      mass: 0,
      shape: shape,
    });

    // Add the shape to a CANNON.Body.
    this.world.addBody(rigidBody);
    */
  const planeShape = new CANNON.Plane()
  
  const planeBody = new CANNON.Body({ mass: 0 })
  planeBody.addShape(planeShape);
  planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)
  this.world.addBody(planeBody)

  }

  fitModelToFrame(model) {
    const { boxCenter, distance } = this.getBoxCenterAndDistance(model);
    const direction = new Vector3()
      .subVectors(this.camera.position, boxCenter)
      .multiply(new Vector3(1, 0, 1))
      .normalize();
    this.camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    this.camera.updateProjectionMatrix();
    this.orbitControls.target.set(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  getBoxCenterAndDistance(model) {
    const box = new Box3().setFromObject(model);
    const boxSize = box.getSize(new Vector3()).length();
    const boxCenter = box.getCenter(new Vector3());
    const halfSizeToFitOnScreen = boxSize * 0.5;
    const halfFovY = MathUtils.degToRad(this.camera.fov * 0.5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    return { boxCenter, distance };
  }

  changeControls() {
    this.calculateWidthHeight();
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    if (this.currentControls === 'orbit') {
      this.cameraBody.position.set(
        this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z,
      );
      this.orbitControls.enabled = false;
      this.firstPersonControls.enabled = true;
      this.firstPersonControls.lock();
      this.currentControls = 'firstperson';
    } else {
      this.firstPersonControls.unlock();
      this.currentControls = 'orbit';
      this.orbitControls.enabled = true;
      this.fitModelToFrame(this.ifcModel);
      this.orbitControls.reset();
      this.firstPersonControls.enabled = false;
    }
  }
}

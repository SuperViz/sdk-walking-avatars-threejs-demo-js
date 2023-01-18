import {
  MathUtils,
  Box3,
  Vector3,
  Clock,
  AmbientLight,
  Color,
  DirectionalLight,
  Spherical,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  GridHelper,
  Group
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControlsCannon } from './PointerLockControlsCannon.js';
import * as CANNON from 'cannon-es';
import { threeToCannon, ShapeType } from 'three-to-cannon';
import { SHAPE_TYPES } from 'cannon-es';

export class IfcScene {
  constructor(id, player) {
    this.player = player;
    console.log('player', player)
    this.clock = new Clock();
    const self = this;
    this.ifcModel = null;
    this.canvasId = id;
    this.threeCanvas = document.getElementById(id);
    this.calculateWidthHeight(this);
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
    this.cameraOrigin = new Vector3(0, 1.5, 0);
    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: this.threeCanvas,
    });
    this.renderer.setSize(this.width, this.height);
    this.ifcModels = [];
    this.grid = new GridHelper();
    this.scene.background = new Color(0x6c757d);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // this.camera.position.z = 5;
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
    /*
    const radius = 1.0;
    const sphereShape = new CANNON.Sphere(radius);
    this.cameraBody = new CANNON.Body({ mass: 100, material: physicsMaterial });
    this.cameraBody.addShape(sphereShape);
    this.cameraBody.position.set(
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z,
    );
    this.cameraBody.linearDamping = 0.99999;
    this.cameraBody.angularDamping = 0.99999;

    this.world.addBody(this.cameraBody);
    */

    this.setupAnimation(self);
    this.setupCamera();
    this.scene.add(this.grid);

    this.firstPersonContainer = new Group();
    this.scene.add(this.firstPersonContainer)
    this.firstPersonContainer.add(this.player)

    this.currentControls = 'orbit';
    this.camera.add(this.player)
    this.player.position.set( 0, -2, -5)
    this.player.rotation.set(0,Math.PI,0)


    this.xAxis = new Vector3(1, 0, 0);
    this.tempCameraVector = new Vector3();
    this.tempModelVector = new Vector3();

    


    document.addEventListener( 'mousewheel', (event) => {
      if (this.currentControls === 'first') {
        const dir = new Vector3(0,0,0)
        this.camera.getWorldDirection(dir)
        this.camera.position.add(dir.multiplyScalar(-event.deltaY/500));
      }
    });

        // Key and mouse events
    window.addEventListener("keydown", (e) => {
      const { keyCode } = e;
      if(keyCode === 87 || keyCode === 38) {
        this.movingForward = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      const { keyCode } = e;
      if(keyCode === 87 || keyCode === 38) {
        this.movingForward = false;
      }
    });
    window.addEventListener("pointerdown", (e) => {
      this.mousedown = true;
    });
    
    window.addEventListener("pointerup", (e) => {
      this.mousedown = false;
    });
    
    window.addEventListener("pointermove", (e) => {
      if(this.mousedown) {
        const { movementX, movementY } = e;
        const offset = new Spherical().setFromVector3(
          this.camera.position.clone().sub(this.cameraOrigin)
        );
        const phi = offset.phi - movementY * 0.02;
        offset.theta -= movementX * 0.02;
        offset.phi = Math.max(0.01, Math.min(0.35 * Math.PI, phi));
        this.camera.position.copy(
          this.cameraOrigin.clone().add(new Vector3().setFromSpherical(offset))
        );
        this.camera.lookAt(this.firstPersonContainer.position.clone().add(this.cameraOrigin));
      }
    })
  }

  setupAnimation(self) {
    const delta = self.clock.getDelta();
    if (this.currentControls === 'orbit') {
      self.orbitControls.update();
    }
    self.world.step(delta);

    self.renderer.render(self.scene, self.camera);

    if(this.movingForward) {
      // Get the X-Z plane in which camera is looking to move the player
      this.camera.getWorldDirection(this.tempCameraVector);
      const cameraDirection = this.tempCameraVector.setY(0).normalize();
      
      // Get the X-Z plane in which player is looking to compare with camera
      this.player.getWorldDirection(this.tempModelVector);
      const playerDirection = this.tempModelVector.setY(0).normalize();
  
      // Get the angle to x-axis. z component is used to compare if the angle is clockwise or anticlockwise since angleTo returns a positive value
      const cameraAngle = cameraDirection.angleTo(this.xAxis) * (cameraDirection.z > 0 ? 1 : -1);
      const playerAngle = playerDirection.angleTo(this.xAxis) * (playerDirection.z > 0 ? 1 : -1);
      
      // Get the angle to rotate the player to face the camera. Clockwise positive
      const angleToRotate = playerAngle - cameraAngle;
      
      // Get the shortest angle from clockwise angle to ensure the player always rotates the shortest angle
      let sanitisedAngle = angleToRotate;
      if(angleToRotate > Math.PI) {
        sanitisedAngle = angleToRotate - 2 * Math.PI
      }
      if(angleToRotate < -Math.PI) {
        sanitisedAngle = angleToRotate + 2 * Math.PI
      }
      
      // Rotate the model by a tiny value towards the camera direction
      this.player.rotateY(
        Math.max(-0.05, Math.min(sanitisedAngle, 0.05))
      );
      this.firstPersonContainer.position.add(cameraDirection.multiplyScalar(0.03));
      this.camera.lookAt(this.firstPersonContainer.position.clone().add(this.cameraOrigin));
    }



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
    this.orbitControls.enableDamping = false;
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
    console.log('change controls')
    this.calculateWidthHeight();
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    if (this.currentControls === 'orbit') {
      this.currentControls = 'first'
      console.log('set first')
      this.firstPersonContainer.position.set(this.camera.position.x, 0, this.camera.position.z )
      this.orbitControls.enabled = false;
      this.player.position.set( 0, 0, 0)
      this.camera.remove(this.player)
      this.firstPersonContainer.add(this.camera);
      this.firstPersonContainer.add(this.player)
      this.camera.position.set( 0, 1.6, -3.5 );
      this.camera.lookAt(this.cameraOrigin);

    } else {
      console.log('set orbit')
      this.firstPersonContainer.remove(this.camera);
      this.firstPersonContainer.remove(this.player)
      this.currentControls = 'orbit'
      this.orbitControls.enabled = true;
      this.camera.position.set( 0, 0, 0 );
      this.player.position.set( 0, -0.1, -5)
      this.player.rotation.set(0,Math.PI,0)
      this.camera.add(this.player)
    }
  }
}

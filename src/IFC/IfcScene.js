import {
  MathUtils,
  Box3,
  Vector3,
  Clock,
  AmbientLight,
  Color,
  DirectionalLight,
  Spherical,
  Quaternion,
  PerspectiveCamera,
  sRGBEncoding,
  Scene,
  WebGLRenderer,
  GridHelper,
  Group,
  Object3D,
  Euler
} from 'three';
export class IfcScene {
  constructor(id, player) {
    this.player = player;
    this.clock = new Clock();
    const self = this;
    this.ifcModel = null;
    this.canvasId = id;
    this.threeCanvas = document.getElementById(id);
    this.calculateWidthHeight(this);
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(60, this.width / this.height, 0.03, 700);
    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: this.threeCanvas,
      logarithmicDepthBuffer: false
    });
    this.renderer.outputEncoding = sRGBEncoding;

    this.renderer.setSize(this.width, this.height);
    this.grid = new GridHelper();
    this.scene.background = new Color(0x8cc7de);

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.setupLights();
    this.setupWindowResize();
    this.keyDown = false

    this.xAxis = new Vector3(1, 0, 0);
    this.tempCameraVector = new Vector3();
    this.tempModelVector = new Vector3();


    this.scene.add(this.grid);
    this.scene.add(this.player);

    this.followCamPivot = new Object3D()
    this.followCamPivot.rotation.order = 'YXZ'
    this.followCam = new Object3D()
    this.tempCamToPos = new Vector3(0,0,0)
    this.followCam.position.z = 3
    this.followCam.position.y = 1


    this.followCamPivot.add(this.followCam)
    this.scene.add(this.followCamPivot)

    this.animate(self);

    document.addEventListener( 'mousewheel', (e) => {
      let newVal = this.followCam.position.z + e.deltaY * 0.05
      if (newVal > 0.25 && newVal < 15) {
          this.followCam.position.z = newVal
      }
      return false
    });

    // Key and mouse events
    window.addEventListener("keydown", (e) => {
      this.keyDown = true
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.movingForward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.movingLeft = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.movingBack = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.movingRight = true;
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      this.keyDown = false
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.movingForward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.movingLeft = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.movingBack = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.movingRight = false;
          break;
      }
    });
    window.addEventListener("mousedown", (e) => {
      this.mousedown = true;
    });
    
    window.addEventListener("mouseup", (e) => {
      this.mousedown = false;
    });
    
    window.addEventListener("mousemove", (e) => {
      if(this.mousedown) {
        const { movementX, movementY } = e;

        this.followCamPivot.rotation.y -= movementX * 0.002;
        this.followCamPivot.rotation.x -= movementY * 0.002;
        return false;
      }
    })
  }

  animate(self) {
    self.checkMoving();
    this.followCamPivot.position.copy(this.player.position)

    this.followCam.getWorldPosition(this.tempCamToPos);
    this.camera.position.lerpVectors(this.camera.position, this.tempCamToPos, 0.1);

    this.camera.quaternion.copy(this.followCamPivot.quaternion);

    self.renderer.render(self.scene, self.camera);
    requestAnimationFrame(function () {
      self.animate(self);
    });
  }

  checkMoving () {
    let direction

    this.camera.getWorldDirection(this.tempCameraVector);
    const cameraDirection = this.tempCameraVector.setY(0).normalize();
    
    this.player.getWorldDirection(this.tempModelVector);
    const playerDirection = this.tempModelVector.setY(0).normalize();
    playerDirection.applyEuler(new Euler(0,3.14,0))
    const cameraAngle = cameraDirection.angleTo(this.xAxis) * (cameraDirection.z > 0 ? 1 : -1);
    const playerAngle = playerDirection.angleTo(this.xAxis) * (playerDirection.z > 0 ? 1 : -1);

    let moving = false;
    let angleToRotate = playerAngle - cameraAngle;

    if(this.movingForward) {
      moving = true
      direction = angleToRotate;
    }

    if(this.movingRight) {
      moving = true
      angleToRotate -=Math.PI/2
      direction = angleToRotate;
    }

    if(this.movingLeft) {
      moving = true
      angleToRotate +=Math.PI/2
      direction = angleToRotate;
    }

    if(this.movingBack) {
      moving = true
      angleToRotate +=Math.PI
      direction = angleToRotate;
    }
    if (moving) {
      if(angleToRotate > Math.PI) {
        direction = angleToRotate - 2 * Math.PI
      }
      if(angleToRotate < -Math.PI) {
        direction = angleToRotate + 2 * Math.PI
      }
      this.player.rotateY(
        Math.max(-0.05, Math.min(direction, 0.05))
      );

      let playerDirAdjusted = playerDirection
      const speed = 0.015
      this.player.position.add(playerDirAdjusted.multiplyScalar(speed));
    }
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
    const ambientLight = new AmbientLight(0xffffee, 0.23);
    this.scene.add(ambientLight);
  }

  setupWindowResize() {
    window.addEventListener('resize', () => {
      this.calculateWidthHeight();
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  add(obj) {
    this.scene.add(obj);
    let i = 0
    // fixes IFC materials flickering
    obj.material.forEach((mat) => {
      i++
      mat.flatShading = true
      mat.side = 0
      if (i == 10) {
        mat.side = 1
      }
    })

  }

  fitModelToFrame(model) {
    const { boxCenter, distance } = this.getBoxCenterAndDistance(model);
    const direction = new Vector3()
      .subVectors(this.camera.position, boxCenter)
      .multiply(new Vector3(1, 0, 1))
      .normalize();
    this.camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    this.camera.updateProjectionMatrix();
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
}

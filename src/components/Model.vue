<template>
  <section>
    <p id="properties-text">
      ID:
      {{ entityData }}
    </p>
    <canvas id="model" />
  </section>
</template>

<script>
import IfcManager from '../IFC/IfcManager';
import { Raycaster, Vector2 } from 'three';

export default {
  name: 'Model',
  props: ['modelUrl', 'token', 'projectId', 'discipline'],
  data() {
    return {
      entityData: '',
    };
  },
  methods: {
    onLoaded: function () {
      console.log('this.IFCManager', this.IFCManager);
      this.addPicking();
      this.setupPick(this);
      this.$emit('loaded', {
        camera: this.IFCManager.scene.camera,
        scene: this.IFCManager.scene.scene,
      });
    },
    addPicking: function () {
      this.raycaster = new Raycaster();
      this.raycaster.firstHitOnly = true;
      this.mouse = new Vector2();
    },
    cast: function (event) {
      this.bounds = this.threeCanvas.getBoundingClientRect();
      this.x1 = event.clientX - this.bounds.left;
      this.x2 = this.bounds.right - this.bounds.left;
      this.mouse.x = (this.x1 / this.x2) * 2 - 1;
      this.y1 = event.clientY - this.bounds.top;
      this.y2 = this.bounds.bottom - this.bounds.top;
      this.mouse.y = -(this.y1 / this.y2) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.IFCManager.scene.camera);

      return this.raycaster.intersectObjects(this.IFCManager.scene.ifcModels);
    },
    pick: function (event) {
      this.found = this.cast(event)[0];
      if (this.found) {
        this.index = this.found.faceIndex;
        this.geometry = this.found.object.geometry;
        this.id = this.IFCManager.scene.ifcModel.getExpressId(this.geometry, this.index);
        this.entityData = this.id;
      }
    },
    setupPick: function (component) {
      component.threeCanvas = document.getElementById('model');
      component.threeCanvas.ondblclick = component.pick;
    },
  },
  async mounted() {
    const self = this;
    this.IFCManager = new IfcManager('model');
    self.IFCManager.scene.ifcModel = await self.IFCManager.ifcLoader.loadAsync(this.modelUrl);
    self.IFCManager.scene.add(self.IFCManager.scene.ifcModel.mesh);
    self.onLoaded();
    document.addEventListener('keyup', (event) => {
      console.log('key up');
      if (event.code === 'Space') {
        console.log('space up');
        self.IFCManager.scene.changeControls();
      }
    });
  },
  watch: {
    async modelUrl(modelUrl) {
      console.log('model Url', modelUrl);
      self.IFCManager.scene.ifcModel = await self.IFCManager.ifcLoader.loadAsync(modelUrl);
      self.IFCManager.scene.add(self.IFCManager.scene.ifcModel.mesh);
      self.onLoaded();
    },
  },
};
</script>

<style>
#model {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100% !important;
  height: 100% !important;
}

#file-input {
  position: absolute;
  left: 0%;
  top: 0%;
  z-index: 100;
}

#properties-text {
  position: absolute;
  left: 0%;
  bottom: 0%;
  z-index: 100;
}
</style>

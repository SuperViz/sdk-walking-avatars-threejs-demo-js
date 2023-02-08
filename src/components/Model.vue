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
import { Raycaster, Vector2, Matrix4 } from 'three';

export default {
  name: 'Model',
  props: ['modelUrl', 'token', 'projectId', 'discipline', 'player'],
  data() {
    return {
      entityData: '',
      loadedPercentage: 0
    };
  },
  methods: {
    onLoaded: function () {
      this.addPicking();
      this.setupPick(this);
      this.$emit('loaded', {
        manager: this.IFCManager
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
    async loadIFC () {
      let self = this
      self.IFCManager.scene.ifcModel = await self.IFCManager.ifcLoader.loadAsync(this.modelUrl);
      const matrixArr = await self.IFCManager.ifcLoader.ifcManager.ifcAPI.GetCoordinationMatrix(self.IFCManager.scene.ifcModel.modelID);
      const matrix = new Matrix4().fromArray(matrixArr);
      self.IFCManager.ifcLoader.ifcManager.setupCoordinationMatrix(matrix);
      self.IFCManager.scene.add(self.IFCManager.scene.ifcModel);
      self.onLoaded();
    }
  },
  beforeMount () {
  },
  async mounted() {
    this.IFCManager = new IfcManager('model', this.player);
    this.IFCManager.ifcLoader.ifcManager.setOnProgress (({loaded, total})=> {
      const percentage = loaded / total
      this.loadedPercentage = percentage;
      this.$emit('loading', {
        percentage: this.loadedPercentage
      });
    })
    this.loadIFC()
  },
  watch: {
    async modelUrl(modelUrl) {
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

#properties-text {
  position: absolute;
  left: 0%;
  bottom: 0%;
  z-index: 100;
}
</style>

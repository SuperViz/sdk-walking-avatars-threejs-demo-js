import { IfcScene } from '../IFC/IfcScene.js';
import { IFCLoader } from "web-ifc-three";
import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh';

export default class IfcManager {
    constructor(canvasId, player) {
        let self = this;
        self.player = player;
        self.scene = new IfcScene(canvasId, player);
        self.ifcModels = [];
        self.ifcLoader = new IFCLoader();
        self.setupIfcLoader();
    }

    setupThreeMeshBVH() {
        let self = this;
        self.ifcLoader.ifcManager.setupThreeMeshBVH(
            computeBoundsTree,
            disposeBoundsTree,
            acceleratedRaycast
        );
    }

    async setupIfcLoader() {
        let self = this;
        //self.ifcLoader.ifcManager.setWasmPath("../../public/IFCjs/")
        await self.ifcLoader.ifcManager.useWebWorkers(true, "/modules/threejs/IFCjs/IFCWorker.js")
        self.ifcLoader.ifcManager.applyWebIfcConfig({
            COORDINATE_TO_ORIGIN: false,
            USE_FAST_BOOLS: true
        });
        self.setupThreeMeshBVH();
    }

    releaseMemory() {
        let self = this;
        self.ifcLoader.ifcManager.disposeMemory();
    }

}

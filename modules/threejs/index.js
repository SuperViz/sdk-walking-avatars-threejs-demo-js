import IfcManager from './IFC/IfcManager.js';
import { Raycaster, Vector2, Matrix4 } from "three";

let raycaster;
let mouse;
let bounds;
let threeCanvas;
let IFCManager;
let player;
const modelUrl = 'https://superviz2homologmediaserver.s3.amazonaws.com/static/models/BasicHouse.ifc';

const createHtmlStructure = () => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'model');

    const joystickWrapper1 = document.createElement('div');
    joystickWrapper1.setAttribute('id', 'joystickWrapper1');

    const mobileInterface = document.createElement('div');
    mobileInterface.setAttribute('id', 'mobileInterface');
    mobileInterface.setAttribute('className', 'noSelect');

    const section = document.createElement('section');

    mobileInterface.appendChild(joystickWrapper1);

    section.appendChild(canvas);
    section.appendChild(mobileInterface);

    const main = document.getElementById('main');
    const demo = document.getElementById('info');
    main.appendChild(section);
    main.style.display = "block";
    demo.style.display = "none";
}

const addPicking = () => {
    raycaster = new Raycaster();
    raycaster.firstHitOnly = true;
    mouse = new Vector2();
}

const cast = (event) => {
    bounds = threeCanvas.getBoundingClientRect();
    const x1 = event.clientX - bounds.left;
    const x2 = bounds.right - bounds.left;
    mouse.x = (x1 / x2) * 2 - 1;
    const y1 = event.clientY - bounds.top;
    const y2 = bounds.bottom - bounds.top;
    mouse.y = -(y1 / y2) * 2 + 1;
    raycaster.setFromCamera(mouse, IFCManager.scene.camera);

    return raycaster.intersectObjects(IFCManager.scene.ifcModels);
}

const pick = (event) => {
    const found = cast(event)[0];
    if (found) {
        const index = found.faceIndex;
        const geometry = found.object.geometry;
        IFCManager.scene.ifcModel.getExpressId(geometry, index);
    }
}

const setupPick = () => {
    threeCanvas = document.getElementById('model');
    threeCanvas.ondblclick = pick;
}

const onLoaded = () => {
    addPicking();
    setupPick();
    console.log('LOADED');
}

const loadIFC = async () => {
    IFCManager.scene.ifcModel = await IFCManager.ifcLoader.loadAsync(modelUrl);
    const matrixArr = await IFCManager.ifcLoader.ifcManager.ifcAPI.GetCoordinationMatrix(IFCManager.scene.ifcModel.modelID);
    const matrix = new Matrix4().fromArray(matrixArr);
    IFCManager.ifcLoader.ifcManager.setupCoordinationMatrix(matrix);
    IFCManager.scene.add(IFCManager.scene.ifcModel);
    onLoaded();
}

export const startScene = async (player3D) => {
    player = player3D;
    createHtmlStructure();
    IFCManager = new IfcManager('model', player);
    await loadIFC();
    return IFCManager;
}

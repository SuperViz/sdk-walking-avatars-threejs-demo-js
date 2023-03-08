import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import { startScene } from "./modules/threejs/index.js";
import { Object3D } from "three";

const iframeMeetingSettings = document.getElementById("sv-video-frame");

let threejsPluginInstance = null;
let scene;
let camera;
let player;
let manager;
let walkingAnimationInterval;
let isLoaded = false;

// verify if meeting settings iframe is loaded
iframeMeetingSettings.addEventListener("load", function() {
    document.getElementById("loader-ms").style.display = "none";
});

const onSameAccoutError = () => {
    alert('Someone joined the meeting with the same ID as yours');
}

const onDevicesChange = (state) => {
    if (state === SuperVizSdk.DeviceEvent.DEVICES_BLOCKED) {
        alert('Please, allow the use of your camera and microphone to start the meeting');
    }
}

const onJoinedMeeting = async () => {
    document.querySelector('.loader-content-wrapper').setAttribute('style', 'opacity: 1')
    player = new Object3D();
    manager = await startScene(player);
    scene = manager.scene.scene;
    camera = manager.scene.camera;

    if (threejsPluginInstance) {
        supervizSdk.unloadPlugin();
    }
    if (!scene) {
        console.error('no scene yet');
        return;
    }
    threejsPluginInstance = supervizSdk.loadPlugin(new window.ThreeJsPlugin(scene, camera, player), {
        avatarConfig: {
            scale: '0.01',
            height: '0.9',
            laserOrigin: { x: 0.25, y: 0.1, z: 0 }
        },
        isAvatarsEnabled: true,
        isLaserEnabled: true,
        isMouseEnabled: true,
        renderLocalAvatar: true,
        isNameEnabled: true
    });

    // animations interval
    walkingAnimationInterval = setInterval(() => {
        if (!manager || !threejsPluginInstance || !threejsPluginInstance?.getAvatars) {
            clearInterval(walkingAnimationInterval)
            return;
        }
        const avatars = threejsPluginInstance?.getAvatars()
        if (!avatars) {
            return
        }
        if (!isLoaded) {
            isLoaded = true;
            document.querySelector('.loader-content-wrapper').setAttribute('style', 'opacity: 0')
        }
        Object.values(avatars)?.forEach((avatar) => {
            if (avatar && avatar.isMoving) {
                avatar.playAnimation('Walk')
            }
            if (avatar && !avatar.isMoving) {
                avatar.playAnimation('Idle')
            }
        })
    }, 5)
}

const onLeftMeeting = () => {
    clearInterval(walkingAnimationInterval)
    threejsPluginInstance = null
    destroy();
}

const onDestroy = () => {
 destroy();
}

const destroy = () => {
    clearInterval(walkingAnimationInterval)
    threejsPluginInstance = null
    supervizSdk.unloadPlugin();
    supervizSdk.destroy();
}

// joined meeting
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MEETING_SAME_PARTICIPANT_ERROR, onSameAccoutError);
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MEETING_DEVICES_CHANGE, onDevicesChange);
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_PARTICIPANT_JOINED, onJoinedMeeting);
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MEETING_LEAVE, onLeftMeeting);
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.DESTROY, onDestroy);

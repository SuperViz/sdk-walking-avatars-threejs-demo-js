<template>
  <main id="main">
    <Model
      class='model'
      :class="{ 'transparent': !isLoaded}"
      modelUrl="https://superviz2homologmediaserver.s3.amazonaws.com/static/models/BasicHouse.ifc"
      @loaded="onModelLoaded"
      @loading="onLoading"
      :player="player"
    ></Model>

  </main>
</template>

<script>
import Model from './components/Model.vue';
import { ThreeJsPlugin } from '@superviz/threejs-plugin';

import * as THREE from 'three';

import SuperViz, {
  MeetingEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
} from '@superviz/sdk';

import bubble from './components/bubble.vue';

const DEVELOPER_KEY = import.meta.env.VITE_SUPERVIZ_DEVELOPER_TOKEN;

export default {
  components: { bubble, Model },
  name: 'App',
  data: () => ({
    isCollapsed: false,
    userName: null,
    roomId: '',
    sdk: null,
    roomCustomNameInput: '',
    roomCustomName: '',
    userList: '',
    meetingState: MeetingState.FRAME_UNINITIALIZED,
    connectionState: MeetingConnectionStatus.NOT_AVAILABLE,
    avatarUrl:
      'https://superviz2homologmediaserver.s3.amazonaws.com/static/models/PETE-GREAT3.glb',
    avatarThumbnail: '',
    avatarScale: '0.01',
    avatarHeight: '0.9',
    isPointersEnabled: true,
    isAvatarsEnabled: true,
    camera: null,
    scene: null,
    pluginInstance: null,
    renderLocalAvatar: true,
    isNameEnabled: true,
    player: null,
    manager: null,
    progress: 0,
    isLoaded: false,
    walkingAnimationInterval: null,
    userType: '',
  }),
  beforeMount () {
    this.player = new THREE.Object3D();
  },
  mounted() {
    const url = new URL(window.location.href);
    this.roomId = url.searchParams.get('roomId') || '';
    this.userName = url.searchParams.get('user-name') || 'guest';
    this.userType = url.searchParams.get('user-type');
  },

  methods: {
    async initialize() {
      this.sdk = await SuperViz.init(DEVELOPER_KEY, {
        group: {
          id: "<GROUP-ID>",
          name: "<GROUP-NAME>"
        },
        participant: {
          id: Date.now().toPrecision(20),
          name: this.userName,
          type: this.userType,
          avatar: {
            model: this.avatarUrl,
            thumbnail: this.avatarThumbnail,
          },
        },
        roomId: this.roomId,
        debug: true,
        camsOff: false,
        screenshareOff: false,
        shouldKickUsersOnHostLeave: true,
        defaultAvatars: true,
        enableFollow: true,
        enableGather: true,
        enableGoTo: true,
      });
      this.sdk.subscribe(MeetingEvent.MEETING_SAME_PARTICIPANT_ERROR, this.onSameAccoutError);
      this.sdk.subscribe(MeetingEvent.MEETING_DEVICES_CHANGE, this.onDevicesChange);
      this.sdk.subscribe(MeetingEvent.MEETING_PARTICIPANT_LIST_UPDATE, this.onUserListUpdate);
      this.sdk.subscribe(MeetingEvent.MEETING_STATE_UPDATE, this.onMeetingStateUpdate);
      this.sdk.subscribe(MeetingEvent.MY_PARTICIPANT_JOINED, this.onJoinedMeeting);
      this.sdk.subscribe(MeetingEvent.MEETING_LEAVE, this.onLeftMeeting);

      this.sdk.subscribe(
        MeetingEvent.MEETING_CONNECTION_STATUS_CHANGE,
        this.onConnectionStatusChange,
      );
      this.sdk.subscribe(MeetingEvent.DESTROY, this.onDestroy);
      const iframeMeetingSettings = document.getElementById("sv-video-frame");

      // verify if meeting settings iframe is loaded
      iframeMeetingSettings.addEventListener("load", function () {
          document.getElementById("loader-ms").style.display = "none";
          document.getElementById("info").style.display = "none";
      });
    },
    destroy() {
      clearInterval(this.walkingAnimationInterval)
      this.pluginInstance = null
      this.sdk.disconnectAdapter();
      this.sdk.destroy();
      this.sdk = null;
    },
    onDestroy() {
      this.sdk = null;
    },
    onSameAccoutError() {
      alert('Someone joined the meeting with the same ID as yours');
    },
    onDevicesChange(state) {
      if (state === DeviceEvent.DEVICES_BLOCKED) {
        alert('Please, allow the use of your camera and microphone to start the meeting');
      }
    },
    onUserListUpdate(list) {
      this.userList = list;
    },
    onMeetingStateUpdate(newState) {
      this.meetingState = newState;
    },
    onConnectionStatusChange(newStatus) {
      this.connectionState = newStatus;
      if (newStatus === MeetingConnectionStatus.LOST_CONNECTION) {
        alert('We lost you due to unstable connection, please try again');
        this.destroy();
      }
    },
    async initialize3D() {
      if (this.pluginInstance) {
        this.sdk.unloadPlugin();
      }
      if (!this.scene) {
        console.error('no scene yet');
        return;
      }
      this.pluginInstance = this.sdk.loadPlugin(new ThreeJsPlugin(this.scene, this.camera, this.player), {
        avatarConfig: {
          scale: this.avatarScale,
          height: this.avatarHeight,
          laserOrigin: { x: 0.25, y: 0.1, z: 0 }
        },
        isAvatarsEnabled: this.isAvatarsEnabled,
        isLaserEnabled: this.isPointersEnabled,
        isMouseEnabled: true,
        renderLocalAvatar: this.renderLocalAvatar,
        isNameEnabled: this.isNameEnabled
      });

      // animations interval
      this.walkingAnimationInterval = setInterval(() => {
        if (!this.manager || !this.pluginInstance || !this.pluginInstance?.getAvatars) {
          clearInterval(this.walkingAnimationInterval)
          return;
        }
        const avatars = this.pluginInstance?.getAvatars()
        if (!avatars) {
          return
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
    },
    onLoading ({ percentage }) {
      this.progress = percentage;
    },
    onModelLoaded({ manager }) {
      this.isLoaded = true
      this.camera = manager.scene.camera;
      this.scene = manager.scene.scene;
      this.manager = manager;
      this.initialize();
    },
    onLeftMeeting() {
      console.warn('left meeting')
      clearInterval(this.walkingAnimationInterval)
      this.pluginInstance = null
      this.destroy();
    },
    onJoinedMeeting() {
      this.initialize3D();
    },
  },
  computed: {
    connectionStatusBubble() {
      switch (this.connectionState) {
        case MeetingConnectionStatus.GOOD:
          return 'green';
        case MeetingConnectionStatus.BAD:
        case MeetingConnectionStatus.RECONNECTING:
          return 'yellow';
        default:
          '';
      }
    },
    connectionStatusTranslate() {
      return MeetingConnectionStatus[this.connectionState];
    },
    meetingStateBubble() {
      switch (this.meetingState) {
        case MeetingState.FRAME_UNINITIALIZED:
        case MeetingState.FRAME_INITIALIZING:
        case MeetingState.FRAME_INITIALIZED:
        case MeetingState.MEETING_CONNECTING:
        case MeetingState.MEETING_INITIALIZING:
          return 'yellow';
        case MeetingState.MEETING_CONNECTED:
        case MeetingState.MEETING_READY_TO_JOIN:
          return 'green';
        default:
          '';
      }
    },
    meetingStateTranslate() {
      return MeetingState[this.meetingState];
    },
    disableInitializeButton() {
      return this.sdk !== null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@superviz/sv-components/index.scss';

main {
  width: 100%;
  height: 100%;
  position: fixed;

  header {
    padding: 12px;
    width: 100%;
    background-color: color('sv-color-purple-gray-80');
    border-bottom: 2px solid color('sv-color-purple-gray-75');

    display: flex;
    align-items: center;
    gap: 12px;

    img {
      height: 25px;
    }
  }

  section {
    width: 100%;
    height: calc(100% - 54px);

    display: grid;
    grid-template-columns: 350px 1fr;
    grid-template-rows: auto;

    gap: 12px;
    position: relative;
    width: fit-content;
    z-index: 1;
    background-color: color('sv-color-purple-gray-80');

  }

  section.hidden {
    grid-template-columns: 0 1fr;

    aside {
      padding: 0;
    }

    .collapse-button {
      left: 8px;
    }
  }

  .collapse-button {
    position: absolute;
    left: 334px;
    top: 40%;

    width: 34px;
    height: 34px;
    border-radius: 50%;
  }

  aside {
    border-right: 1px solid color('sv-color-purple-gray-75');
    padding: 12px 12px 50px;
    overflow: auto;
  }

  h6 {
    margin: 24px 0 12px;
  }

  hr {
    margin: 24px 0 12px;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .sv-checkbox-container {
    padding-left: 30px;
  }

  .sv-select-wrapper {
    margin-top: 24px;
    margin-bottom: 30px;
  }

  .tree-view-wrapper {
    color: color('sv-color-white');
  }
}

.model {
  z-index: -1;
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0px;
  opacity: 1;
  &.transparent {
    opacity: 0 !important;
  }
}

.progress {
  z-index: 100;
  max-width: 30px;
  max-height: 30px;
  position: fixed;
  top: 12px !important;
  left: 270px;
}
</style>

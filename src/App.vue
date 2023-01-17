<template>
  <main id="main">
    <header>
      <img src="https://dev.cdn.superviz.com/static/logo-superviz.svg" alt="SuperViz logo" />
      <sv-heading size="h3">SDK Demo</sv-heading>
    </header>
    <section :class="{ hidden: isCollapsed }">
      <aside>
        <div class="collapse-button">
          <sv-button icon size="lg" theme="over-image-yellow" @click="isCollapsed = !isCollapsed">
            <sv-icon :icon="isCollapsed ? 'right' : 'left'" />
          </sv-button>
        </div>

        <form>
          <sv-heading size="h6">Room info</sv-heading>
          <sv-input label="Room ID" v-model="roomId" />
          <sv-heading size="h6">User info</sv-heading>
          <sv-input label="User id" v-model="userId" />
          <sv-input label="User name" v-model="userName" />
          <sv-input label="Avatar url" v-model="avatarUrl" />
          <sv-input label="Avatar thumbnail" v-model="avatarThumbnail" />
          <sv-input type="number" label="Avatar scale" v-model="avatarScale" />
          <sv-input type="number" label="Avatar height" v-model="avatarHeight" />
          <sv-checkbox label="is host candidate" v-model="isHostCandidate" />
          <!--          <sv-checkbox label="is audience" v-model="isAudience" />-->
          <!--          <sv-checkbox label="is broadcasting" v-model="isBroadcasting" />-->
          <sv-checkbox label="enable avatars" v-model="isAvatarsEnabled" />
          <sv-checkbox label="enable pointers" v-model="isPointersEnabled" />
          <sv-button-group wrap>
            <sv-button @click="initialize" :disabled="disableInitializeButton" full-width
              >Initialize SDK</sv-button
            >
            <sv-button @click="destroy" :disabled="!sdk" full-width>Destroy SDK</sv-button>
          </sv-button-group>
        </form>
        <sv-hr />
        <sv-heading size="h6">Meeting state</sv-heading>
        <div class="status">
          <bubble :type="connectionStatusBubble" />
          <sv-paragraph>Connection status: {{ connectionStatusTranslate }}</sv-paragraph>
        </div>
        <div class="status">
          <bubble :type="meetingStateBubble" />
          <sv-paragraph>Meeting state: {{ meetingStateTranslate }}</sv-paragraph>
        </div>

        <sv-hr />

        <sv-heading size="h6">User list</sv-heading>
        <tree-view :data="userList"></tree-view>
      </aside>
      <Model
        modelUrl="/models/rac_advanced_sample_project.ifc"
        @loaded="onModelLoaded"
      ></Model>
    </section>
  </main>
</template>

<script>
import Model from './components/Model.vue';
// import { ThreeAdapter } from '../../threejs-adapter/src';
import { ThreeAdapter } from '@superviz/threejs-adapter';

import SuperViz, {
  MeetingEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
} from '@superviz/sdk';
// } from '../../sdk_/dist';
import bubble from './components/bubble.vue';

const DEVELOPER_KEY = import.meta.env.VITE_SUPERVIZ_DEVELOPER_TOKEN;

export default {
  components: { bubble, Model },
  name: 'App',
  data: () => ({
    isCollapsed: false,

    userId: '',
    userName: null,
    isHostCandidate: true,
    isAudience: false,
    isBroadcasting: false,

    roomId: '',
    sdk: null,
    roomCustomNameInput: '',
    roomCustomName: '',
    userList: '',
    meetingState: MeetingState.FRAME_UNINITIALIZED,
    connectionState: MeetingConnectionStatus.NOT_AVAILABLE,
    avatarUrl:
      'https://superviz2homologmediaserver.s3.amazonaws.com/static/animations/walking_cycle.glb',
    avatarThumbnail: '',
    avatarScale: '0.2',
    avatarHeight: '0',
    isPointersEnabled: true,
    isAvatarsEnabled: true,
    camera: null,
    scene: null,
    threeAdapter: null
  }),
  mounted() {
    const url = new URL(window.location.href);
    this.userId = url.searchParams.get('userId') || '';
    this.roomId = url.searchParams.get('roomId') || '';
    this.userName = url.searchParams.get('userName') || '';

    // animations of model
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  },
  watch: {
    isAudience(value) {
      if (this.isHostCandidate && value) {
        this.isHostCandidate = false;
      }
    },
    isHostCandidate(value) {
      if (this.isAudience && value) {
        this.isAudience = false;
      }
    },
  },
  methods: {
    async initialize() {
      this.sdk = await SuperViz.init(DEVELOPER_KEY, {
        userGroup: {
          id: 'your-organizationId',
          name: 'developer workspace',
        },
        user: {
          id: this.userId,
          name: this.userName,
          isHostCandidate: this.isHostCandidate,
          isAudience: this.isAudience,
          avatar: {
            model: this.avatarUrl,
            thumbnail: this.avatarThumbnail,
          },
        },
        roomId: this.roomId,
        debug: true,
        camsOff: false,
        screenshareOff: false,
        isBroadcast: this.isBroadcasting,
        shouldKickUsersOnHostLeave: true,
        defaultAvatars: true,
        enableFollow: true,
        enableGoTo: true,
      });
      this.sdk.subscribe(MeetingEvent.MEETING_SAME_USER_ERROR, this.onSameAccoutError);
      this.sdk.subscribe(MeetingEvent.MEETING_DEVICES_CHANGE, this.onDevicesChange);
      this.sdk.subscribe(MeetingEvent.MEETING_USER_LIST_UPDATE, this.onUserListUpdate);
      this.sdk.subscribe(MeetingEvent.MEETING_STATE_UPDATE, this.onMeetingStateUpdate);
      this.sdk.subscribe(MeetingEvent.MY_USER_JOINED, this.onJoinedMeeting);
      this.sdk.subscribe(MeetingEvent.MEETING_LEAVE, this.onLeftMeeting);

      this.sdk.subscribe(
        MeetingEvent.MEETING_CONNECTION_STATUS_CHANGE,
        this.onConnectionStatusChange,
      );
      this.sdk.subscribe(MeetingEvent.DESTROY, this.onDestroy);

      this.isCollapsed = true;
    },
    destroy() {
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
      if (this.threeAdapter) {
        this.sdk.disconnectAdapter();
      }
      if (!this.scene) {
        console.error('no scene yet');
        return;
      }
      const player = this.camera;
      this.threeAdapter = new ThreeAdapter(this.scene, this.camera, player);

      this.sdk.connectAdapter(this.threeAdapter, {
        avatarConfig: {
          scale: this.avatarScale,
          height: this.avatarHeight,
          renderLocalAvatar: false,
          localAvatarPivotPoint: { x: 0, y: -2, z: 4 },
        },
        isAvatarsEnabled: this.isAvatarsEnabled,
        isPointersEnabled: this.isPointersEnabled,
      });

      window.dispatchEvent(new Event('resize'));
    },
    onModelLoaded({ camera, scene }) {
      console.log('on model loaded!', camera);
      console.log('scene', scene);
      this.camera = camera;
      this.scene = scene;
    },
    onLeftMeeting() {
      this.destroy();
    },
    onJoinedMeeting() {
      this.initialize3D();
    },
    onKeyDown (event) {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
        this.threeAdapter.myAvatar.playAnimation("Take 001")
          break;

        case 'KeyA':
        case 'ArrowLeft':
        this.threeAdapter.myAvatar.playAnimation("Take 001")
          break;

        case 'KeyS':
        case 'ArrowDown':
        this.threeAdapter.myAvatar.playAnimation("Take 001")
          break;

        case 'KeyD':
        case 'ArrowRight':
        this.threeAdapter.myAvatar.playAnimation("Take 001")
          break;
      }
    },
    onKeyUp (event) {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
        if (this.threeAdapter.myAvatar) this.threeAdapter.myAvatar.stopAnimation("Take 001")
          break;

        case 'KeyA':
        case 'ArrowLeft':
        if (this.threeAdapter.myAvatar) this.threeAdapter.myAvatar.stopAnimation("Take 001")
          break;

        case 'KeyS':
        case 'ArrowDown':
        if (this.threeAdapter.myAvatar) this.threeAdapter.myAvatar.stopAnimation("Take 001")
          break;

        case 'KeyD':
        case 'ArrowRight':
        if (this.threeAdapter.myAvatar) this.threeAdapter.myAvatar.stopAnimation("Take 001")
          break;
      }
    }
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

  background-color: color('sv-color-purple-gray-80');

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
</style>

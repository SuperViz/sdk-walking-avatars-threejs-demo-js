const DEVELOPER_KEY = "<SUPERVIZ_DEVELOPER_KEY>";

const url = new URL(document.URL);
let userName = url.searchParams.get('user-name');
let roomId = url.searchParams.get('roomId');
let userType = url.searchParams.get('user-type');
export const myParticipantId = Date.now().toPrecision(20);

export const supervizSdk = await SuperVizSdk.init(DEVELOPER_KEY, {
    group: {
        id: "<GROUP-ID>",
        name: "<GROUP-NAME>"
    },
    participant: {
        id: myParticipantId,
        name: userName ? userName : undefined,
        type: userType,
        avatar: {
            model: 'https://superviz2homologmediaserver.s3.amazonaws.com/static/models/PETE-GREAT3.glb',
            thumbnail: ''
        },
    },
    roomId: roomId,
    defaultAvatars: true,
    enableFollow: true,
    enableGoTo: true,
    enableGather: true,
});


// is iphone helper
export const isIphone = () => {
    if (typeof window === `undefined` || typeof navigator === `undefined`) return false;
    return /iPhone/i.test(navigator.userAgent || navigator.vendor || (window.opera && opera.toString() === `[object Opera]`));
};

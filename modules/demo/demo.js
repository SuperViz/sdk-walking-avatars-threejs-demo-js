const url = new URL(document.URL)
let userType = url.searchParams.get('user-type');
let userName = url.searchParams.get('user-name');
let roomId = url.searchParams.get('roomId');

document.addEventListener('DOMContentLoaded', () => {
  let blockUserAppBrowser = false
  const ua = window.navigator.userAgent || window.navigator.vendor || window.opera
  const navigator = window.navigator
  const normalizedUserAgent = ua.toLowerCase()
  const isIOS =
  /ip(ad|hone|od)/.test(normalizedUserAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)

  const isLinkedInApp = ((ua.indexOf("LinkedInApp") > -1))
  const isFacebook = ((ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1))
  const isWebViewUser = isLinkedInApp || isFacebook

  if (isIOS && isWebViewUser) {
    blockUserAppBrowser = true;
    document.getElementById("modal-message-web-browsers").style.display = "flex";
    try {
      navigator.clipboard.writeText(document.URL);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  setMeetingUrl(blockUserAppBrowser);
})


document.getElementById("next")?.addEventListener("click", (event) => { 
    userName = document.getElementById('username').value ?? undefined;
    location.href = `${location.protocol + '//' + location.host}/invite.html?roomId=${roomId}&user-type=${userType}&user-name=${userName}`
});

document.getElementById("join")?.addEventListener('click', event => { 
  if(userName){
    location.href = `${location.protocol + '//' + location.host}/ready.html?roomId=${roomId}&user-type=${userType}&user-name=${userName}`
  } else {
    location.href = `${location.protocol + '//' + location.host}/ready.html?roomId=${roomId}&user-type=${userType}`
  }
})

document.getElementById("invite-url-button")?.addEventListener("click", (event) => { 
    const roomIdInput = document.getElementById('room-id')

    if(!roomIdInput) return
    navigator.clipboard.writeText(roomIdInput.value); 
    const checkboxState = document.getElementById("check-copy").checked
    if (checkboxState) {
      document.getElementById("check-copy").checked = false;
      return
    }
  
    document.getElementById("check-copy").checked = true;
    setTimeout(function () {
      document.getElementById("check-copy").checked = false;
    }, 3000);
});

function setMeetingUrl(blockUser) { 
  const roomIdInput = document.getElementById('room-id')
  const url = new URL(document.URL)

  if (blockUser) {
    roomIdInput.value = url
    return
  }
  if(url.searchParams.get('user-type') === 'guest' && location.href.includes('ready.html')) return;

  if(url.searchParams.get('user-type') === 'guest' && !location.href.includes('guest.html')) {
    location.href = `${location.protocol + '//' + location.host}/guest.html?roomId=${roomId}&user-type=${userType}`
  }

  userType = url.searchParams.get('user-type') ? url.searchParams.get('user-type') : 'host';
  roomId = url.searchParams.get('roomId') ? url.searchParams.get('roomId') : generateUniqueId()
 
  if(roomIdInput) { 
    roomIdInput.value = `${location.protocol + '//' + location.host}/guest.html?roomId=${roomId}&user-type=guest`
  }

  if(url.searchParams.get('roomId') && url.searchParams.get('user-type')) return;

  

  url.searchParams.set('roomId', roomId)
  url.searchParams.set('user-type', userType)
}

function generateUniqueId() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

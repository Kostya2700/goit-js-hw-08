import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storage = localStorage.getItem('videoplayer-current-time');
function onPlayVideo(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}
player.on('timeupdate', throttle(onPlayVideo, 1000));

if (storage) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

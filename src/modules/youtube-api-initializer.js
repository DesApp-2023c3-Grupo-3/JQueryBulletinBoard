const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

export function onYouTubeIframeAPIReady(playerId, videoId, callback) {
  const player = new YT.Player(playerId, {
    videoId: videoId,
    playerVars: {
      'autoplay': 1,  // 1 for autoplay
      'controls': 0,  // Show controls
      'mute': 1,      // Mute the video for autoplay to work
      'bucle': 1
    },
    events: {
      onStateChange: (e) => onPlayerStateChange(e, player, callback)
    }
  });
  return player
}

function onPlayerStateChange(event, player, callback) {
  // Check if the video has ended
  if (event.data === YT.PlayerState.ENDED) {
    // Pause the video and seek to the beginning
    player.seekTo(0);

    // Call the callback to switch to the next slide in the carousel
    callback();
  }
}

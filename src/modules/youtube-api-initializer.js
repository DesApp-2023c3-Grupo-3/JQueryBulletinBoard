const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

export function onYouTubeIframeAPIReady(playerId, videoId) {
  const player = new YT.Player(playerId, {
    videoId: videoId,
    playerVars: {
      'autoplay': 1,  // 1 for autoplay
      'controls': 0,  // Show controls
      'mute': 1,      // Mute the video for autoplay to work
      'bucle': 1
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: (e) => onPlayerStateChange(e, player),
    }
  });
}


function onPlayerStateChange(event, player) {
  if (event.data === YT.PlayerState.ENDED) {
    player.playVideo(); 
  }
}

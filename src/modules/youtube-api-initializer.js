const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

export function onYouTubeIframeAPIReady(playerId, videoId) {
  new YT.Player(playerId, {
    videoId: videoId,
    playerVars: {
      'autoplay': 1,  // 1 for autoplay
      'controls': 0,  // Show controls
      'mute': 1       // Mute the video for autoplay to work
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  setTimeout(() => {
    event.target.playVideo();
  }, 2000);
}

function onPlayerStateChange(event) {        
  if(event.data === 0) {          
      alert('done');
  }
}

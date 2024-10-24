import './polyfills'

const fetch = function (url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

const getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};

function getYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null; // Return video ID or null if not found
}

function formattedTime(date) {
    const timeAsDate = new Date(date);
    const hours = timeAsDate.getHours().toString().padStart(2, '0');
    const minutes = timeAsDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

const getCurrentTime = function getCurrentTime() {
    const date = new Date();
    return formattedTime(date)
}

function getYouTubeEmbedUrl(url) {
    // Regular expression to match different YouTube URL formats
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    
    const match = url.match(regExp);
    
    if (match && match[1]) {
      // Return the embed URL format
      return `https://www.youtube.com/embed/${match[1]}`;
    } else {
      // Return null if the URL is not valid
      return null;
    }
}
  

export { getUrlParameter, getCurrentTime, formattedTime, fetch, getYouTubeEmbedUrl, getYouTubeVideoId }

// function searchFunction(event) {
//     event.preventDefault();
//     document.getElementById('inputSearch').className = "showSearch form-control"
// }

function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('player', {
      videoId: 'M7lc1UVf-VE',
      playerVars: { 'autoplay': 1, 'controls': 0 },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      }
    });
  }
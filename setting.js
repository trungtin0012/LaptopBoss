$('li.list-item').on('hover', function() {
    // body...
    $('.navbar').css('border', '1px solid #ccc');
    console.log("aaa");
})
      // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'Us5kE2NNMHQ',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel' : 0,
            'fs' : 0,
            'showinfo': 0,
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      done = true;
    }
  }

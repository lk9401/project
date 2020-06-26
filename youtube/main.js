var player;
var currentPlay = 0;

function onYouTubeIframeAPIReady() 
{
    player = new YT.Player
    (
        "player",
        {
            height: "390",
            width: "640",
            videoId: playList[currentPlay],
            playerVars:
            {
                "autoplay": 0,
                "controls": 0,
                "start": playTime[currentPlay][0],
                "end": playTime[currentPlay][1],
                "showinfo": 0,
                "rel": 0,
                "iv_load_policy": 3
            },
            events:
            {
                "onReady": onPlayerReady,
                "onStateChange": onPlayerStateChange
            }
        }
    );
    $(document).keydown(function(event)
{
    alert(event.which);
    switch(event.which)
    {
        case 37:
            if(getCurrentTime() - 5 < playTime[currentPlay][0])
                seekTo(playTime[currentPlay][0]);
            break;
        case 39:
            if(getCurrentTime() + 5 > playTime[currentPlay][1])
                seekTo(playTime[currentPlay][1]);
            break;
    }
});
}

function onPlayerReady(event) 
{
    $("#playButton").click(function()
    {
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event) 
{
    if(Math.floor(player.getCurrentTime()) == playTime[currentPlay][1])
    {
        if(currentPlay<playList.length - 1)
        {
            currentPlay++;
            player.loadVideoById
            ({
                "videoId": playList[currentPlay],
                "startSeconds": playTime[currentPlay][0],
                "endSeconds": playTime[currentPlay][1],
                "suggestedQuality": "large"
            });
        }
    }

    if(playList.getVideoLoadedFraction() > 0)
        $("h2").text(play.getVideoData().title);
}
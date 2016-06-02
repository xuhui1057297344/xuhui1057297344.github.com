$(document).ready(function() {
     /*miniplayer的出现隐藏*/
    var $miniplayer = $(".head .miniplayer"),
        $icon_player = $("img.icon-player");
    
    $miniplayer.hide();
    $icon_player.click(function() {
        $miniplayer.slideToggle();
    });
    
    $miniplayer.children().eq(1).click(function() {
        var icon_src = ["img/stop.png", "img/play.png"],
            $icon_src = $miniplayer.children().eq(1).children().attr("src"),
            stage = ["正在播放", "暂停播放"],
            $music_stage = $(".miniplayer span.stage");
        if($icon_src === icon_src[0]) {
            $miniplayer.children().eq(1).children().attr("src", icon_src[1]);
            $music_stage.text(stage[0]);
        }
        else {
            $miniplayer.children().eq(1).children().attr("src", icon_src[0]);
            $music_stage.text(stage[1]);
            //window.location.href="Jamie-player.html";
        }
    });
});
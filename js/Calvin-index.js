var detail_inf = ["【3D爆改】Dubstepast", "IVHQ国际乱七八糟组织",
                     "歌词不忍直视 R&B界的奇葩", "让你摇晃摇晃",
                  "开口酥女声搭配日本什么乱七八糟的歌", "霓虹流行乐",
                  "Maroon 5 - Moves Like Jagger", "我的男神",
                  "开口脆系列", "那些碉堡的神曲",
                  "前奏逼死强迫症 Sky Says Something", "逼死强迫症系列",
                  "别人家的粉丝自制天籁神曲", "我是粉粉粉粉粉",
                  "别戳进来了，这个是作数的", "你猜猜猜"
                   ],
    img_src = ["img/1.jpg", "img/2.jpg", "img/3.jpg",
                "img/4.jpg", "img/5.jpg", "img/6.jpg",
                "img/7.jpg", "img/8.jpg", "img/9.jpg",
                "img/10.jpg", "img/11.jpg", "img/12.jpg",
                "img/13.jpg", "img/14.jpg", "img/15.jpg"
              ];

$(document).ready(function(){
    var $advice_btn = $(".calvin .music-advice .advice-btn"),
        $img_holders = $(".calvin .music-advice .img-holders"),
        $img_holder = $(".calvin .img-holders .img-holder");
    
    var $music_name = $(".miniplayer span.music-title"),
        $music_stage = $(".miniplayer span.stage"),
        music_name = "无正在播放";
    $music_name.text(music_name);
    /*点击图片播放音乐事件*/
    var $music_img = $img_holder.children()//.row
                                     .children("div.img").children(); //.img
    
    /*miniplayer的出现隐藏*/
    var $miniplayer = $(".head .miniplayer"),
        $icon_player = $("img.icon-player");
    
    $miniplayer.hide();
    $icon_player.click(function() {
        $miniplayer.slideToggle();
    });
    
    /*播放/暂停切换*/
    $miniplayer.children().eq(1).click(function() {
        var icon_src = ["img/stop.png", "img/play.png"],
            $icon_src = $miniplayer.children().eq(1).children().attr("src");
        if($icon_src === icon_src[0])
            $miniplayer.children().eq(1).children().attr("src", icon_src[1]);
        else {
            $miniplayer.children().eq(1).children().attr("src", icon_src[0]);
            
            /**********************页面切换**********************/
            //window.location.href="Jamie-player.html";
            $(".pt-page-moveToRight").removeClass("pt-page-moveToRight");
            $(".invisible").addClass("pt-page-moveToLeft");
            //$(".index").addClass("invisible");
            $(".index").fadeOut(500);
            $(".Jplayer").removeClass("invisible");
        }
    });
    
    /*进行内容的随机更新*/
    $advice_btn.click(function() {
        $img_holders.fadeOut();
        var rand = Math.floor(Math.random()*100),
            offset = 1;
        /*改变给张图片的src位置*/
        for(var i=0; i<8; i++) {
            /*获取img对象， 计算出随机的src*/
            var $img = $img_holder.children().eq(i)        //.row
                                     .children("div.img").children(); //.img
            /*获取detail对象*/
            var $detail_t = $img_holder.children().eq(i)        //.row
                                     .children("div.detail")    //.detail
                                     .children("span.title"),    //.title
                $detail_au = $img_holder.children().eq(i)        //.row
                                     .children("div.detail")    //.detail
                                     .children("span.auther");    //.auther
            /*更换src*/
            $img.attr("src", img_src[(rand%16+offset++)%16]);
            /*更换详细文字*/
            //$detail_t.fadeOut();
            //alert(detail_inf[rand_start%8 * 2]);
            $detail_t.html(detail_inf[(rand%8+offset)%8*2]);
            $detail_au.html(detail_inf[(rand%8+offset++)%8*2+1]);
            
        }
        $img_holders.fadeIn("fast");
    });
    
    /*更改播放曲目名称*/
    $music_img.click(function() {
        $miniplayer.slideDown();
        //alert($(this).parent().parent().parent().index());
        music_name = $(this).parent().next().children().first().text();
        //alert(music_name);
        $music_name.text(music_name);
        //window.location.href="Jamie-player.html";
    });
    
    /*返回index*/
    $(".Jamie-player .return").click(function() {
        //alert();
        $(".Jplayer").removeClass("pt-page-moveToLeft");
        $(".Jplayer").addClass("pt-page-moveToRight");
        $(".Jplayer").addClass("invisible");
        //$(".index").removeClass("invisible");
        $(".index").fadeIn();
    });
});
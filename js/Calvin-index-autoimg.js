$(document).ready(function(){
    /*初始设置的值*/
    var auto_t = ''; //保存定时执行器的变量
    var time_switch = 5000;//每多少毫秒轮换一次图片
    var img_speed = 2000;//图片出现的速度,越小越快,应该小于轮换图片的时间
    /*div名称及关键类名称设置*/
    var base_div = '#img_auto';//整个轮换所放在哪个DIV下
    var img_div = '#img_show img';//页面中img放在哪个DIV下
    var li_div = '#img_list li';//页面中li放在哪个DIV下
    var li_switch_class = 'list_selected';//无序列表中用来识别的类 
    var img_switch_class = 'img_selected';//图片中用来识别的类
    /*长度大小设置及判断*/
    var img_length = $(img_div).length;//img的总数
    var li_length = $(li_div).length;//li的总数 
    $(img_div).eq(0).css('display','block');//初始化第一张图片           
    /*点击li时的事件代码*/
    $(li_div).click(function(event){
        event.preventDefault();//阻止<a>标签的跳转
        var li_pos = $(this).index(); //当前无序列表中li位置
        $(this).addClass(li_switch_class);
        $(this).siblings('li').removeClass(li_switch_class);
        /*操作图片变换*/
        $(img_div).eq(li_pos).siblings('img').css('display','none').removeClass(img_switch_class);
        $(img_div).eq(li_pos).fadeIn(img_speed).addClass(img_switch_class);                   
    })
    /*图片变换的代码*/
    function img_auto() {               
        var img_pos = $(img_div+'.'+img_switch_class).index();//返回当前的图片的位置
        $(img_div).eq(img_pos).next('img').fadeIn(img_speed).addClass(img_switch_class);
        $(li_div).eq(img_pos).next('li').addClass(li_switch_class);
        $(li_div).eq(img_pos).next().siblings('li').removeClass(li_switch_class);
        $(img_div).eq(img_pos).next().siblings('img').css('display','none').removeClass(img_switch_class);
        if(img_pos == img_length-1)
        {
            $(img_div).eq(0).fadeIn(img_speed).addClass(img_switch_class);
            $(li_div).eq(0).addClass(li_switch_class);
            $(li_div).eq(0).siblings('li').removeClass(li_switch_class);
            $(img_div).eq(0).siblings('img').css('display','none').removeClass(img_switch_class);
        }
    }
    /*自动定时器代码部分*/
    function auto_switch(){
        auto_t = setInterval(img_auto,time_switch);   
    }
    $(base_div).mouseover(function(){
        clearInterval(auto_t);   
    })
    $(base_div).mouseout(function(){
        auto_switch();
    })
    auto_switch();
})
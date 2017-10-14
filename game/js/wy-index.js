
$(function(){
    // 轮播图开始
    var left = $('.bg .head-prev');//获取左点击
    var right = $('.bg .head-next');//获取右点击
    var aSmall = $('#bg-bannar .head-ctrl-box a');//获取小点
    var carouselDiv = $('#bg-bannar .head-bg');//获取轮播图div
    var iNow = 0;//当前图片号数

    // 左点击切换
    left.click(function(){
        iNow--;
        // 判断回流
        if(iNow<0){
            iNow=4;
        }
        carouselDiv.eq(iNow).siblings(".head-bg").stop().animate({
            opacity:0

        },800);
        carouselDiv.eq(iNow).stop().animate({
            opacity:1

        },800);
        aSmall.eq(iNow).addClass('cur').siblings().removeClass('cur');
    });

    // 右点击切换
    right.click(function(){
        iNow++;
        if(iNow>4){
            iNow=0;
        }
        carouselDiv.eq(iNow).siblings(".head-bg").stop().animate({
            opacity:0

        },800);
        carouselDiv.eq(iNow).stop().animate({
            opacity:1

        },800);
        aSmall.eq(iNow).addClass('cur').siblings().removeClass('cur');

    });

    //手动切换
    aSmall.mouseover(function(){
        var n = $(this).index();
//        var iNow = $(this).index();
//        alert(iNow);
        iNow = n;
        carouselDiv.eq(iNow).siblings(".head-bg").stop().animate({
            opacity:0

        },800);
        carouselDiv.eq(iNow).stop().animate({
            opacity:1

        },800);
        aSmall.eq(iNow).addClass('cur').siblings().removeClass('cur');

    });

    // 封装函数体
    function move(){
        carouselDiv.eq(iNow).siblings(".head-bg").stop().animate({
            opacity:0

        },800);
        carouselDiv.eq(iNow).stop().animate({
            opacity:1
        },800);

        aSmall.eq(iNow).addClass('cur').siblings().removeClass('cur');
    }

    function run(){
        iNow++;
        if(iNow>4){
            iNow=0;
        }
        move();
    }

// 定时器
    timer = setInterval(run,3000);

    //当鼠标划入，停止轮播图切换
    $(".bg").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(run,3000);
    })
});
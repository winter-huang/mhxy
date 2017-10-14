/**
 * Created by Ropynn on 2017/8/15.
 */
$(function () {
  //梦幻图库的tab栏切换
  $('#c-boxNav .a-item').mouseover(function () {
    $(this).css({color: '#f24854'}).siblings().css({color: '#3c3c3c'})
    var index = $(this).index();
    $('.line').stop().animate({left: index * 100}, 300);
    $('.item .mhtk-item').eq(index).show(500).siblings().stop().hide();
  })
  //近期更新
  $('.go').hover(function () {
    $(this).children('i').stop().hide(50);
  }, function () {
    $(this).children('i').stop().show(50);
  })

//鼠标移入移出的方向特效
  $(".c .mhtk-item li").on("mouseenter mouseleave",
      function (e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        var eventType = e.type;
        var dirName = new Array('上', '右', '下', '左');
        if (e.type == 'mouseenter') {
          $(this).children('a').children('span').css({
            top: '40px',
            color: '#fff',
            // zIndex: 3
          });
          switch (dirName[direction]) {
            case '上':
              $(this).children('i').css({left: 0, top: -h + "px"}).stop(true).animate({left: 0, top: 0}, 300)
              break;
            case '右':
              $(this).children('i').css({left: w + "px", top: 0}).stop(true).animate({left: 0, top: 0}, 300)
              break;
            case '下':
              $(this).children('i').css({left: 0, top: h + "px"}).stop(true).animate({left: 0, top: 0}, 300)
              break;
            case '左':
              $(this).children('i').css({left: -w + "px", top: 0}).stop(true).animate({left: 0, top: 0}, 300)
              break;
          }
        }
        else if (e.type == 'mouseleave') {
          $(this).children('a').children('span').css({
            top: '',
            color: '#3c3c3c',
            // zIndex: 1
          });
          switch (dirName[direction]) {
            case '上':
              $(this).children('i').stop(true).animate({left: 0, top: -h + "px"}, 300)
              break;
            case '右':
              $(this).children('i').stop(true).animate({left: w + "px", top: 0}, 300)
              break;
            case '下':
              $(this).children('i').stop(true).animate({left: 0, top: h + "px"}, 300)
              break;
            case '左':
              $(this).children('i').stop(true).animate({left: -w + "px", top: 0}, 300)
              break;
          }
        }
      });
})
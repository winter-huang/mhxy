$(function () {
  $('#jxk').css('width', '450');
  //            手风琴效果思路：
  //                当鼠标移入li的时候,
  //                        1.当前的li要变宽
  //                        2.当前的兄弟li要变窄
  //                当鼠标移出li的时候,
  //                        1.全部li都的变回来本来宽度200
  $('.e>div .grup').click(function () {
    $('.first').css('width', '450');
    $('.first .pt').css('display', 'block');
    $(this).siblings().stop().animate({width: 70});
    $(this).stop().animate({width: 819});
  });

  $('.e .grup li').hover(function () {
    //                其实就是排他思想
    $(".pt").stop().css('display', 'none');
    $(this).siblings().stop().animate({width: 58});
    $(this).stop().animate({width: 450});
    $(this).children("div").css('display', 'block');

  });

});
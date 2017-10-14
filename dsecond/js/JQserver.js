/**
 * Created by hyd on 2017/8/11.
 */
$(function () {
    $('.dtopsmall').hover(function () {
        $('.dtopbig').stop().slideDown(200);
    },function () {
        $('.dtopbig').stop().slideUp(200);
    });
    $('#rotate-btn').click(function () {
        $('.dbox').stop().slideDown();
        $('.dbox video').prop('src','video/12589b827879810887873c63bae386ffqt.mp4');
    });
    $('.dbox').hover(function () {
        $('.dbox span').stop().show();
    },function () {
        $('.dbox span').stop().hide();
    });
    $('.dbox span').click(function () {
        $('.dbox video').prop('src','');
        $('.dbox').stop().slideUp();
    });





})


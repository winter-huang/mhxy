/**
 * Created by hyd on 2017/8/11.
 */
$(function () {
  function dbkr2_slide() {
    $('.dbkr2_img').slideDown(400);
    $('.dbkr2_img_close').slideDown(400);
    var dbkr2_img_ul1 = document.getElementById("dbkr2_img_ul1");
  };

  $('#dbkr2_ul_img1').mouseover(function () {
    dbkr2_slide();
    var dbkr2_img_ul1_imgs = dbkr2_img_ul1.getElementsByTagName('img');
    for (var i = 0; i < 7; i++) {
      dbkr2_img_ul1_imgs[i].src = "imgs/" + "danan" + (i + 1) + ".jpg";
    }
  });

  $('#dbkr2_ul_img2').mouseover(function () {
    dbkr2_slide();
    var dbkr2_img_ul1_imgs = dbkr2_img_ul1.getElementsByTagName('img');
    for (var i = 0; i < 7; i++) {
      dbkr2_img_ul1_imgs[i].src = "imgs/" + "dchun" + (i + 1) + ".jpg";
    }
  })

  $('#dbkr2_ul_img3').mouseover(function () {
    dbkr2_slide();
    var dbkr2_img_ul1_imgs = dbkr2_img_ul1.getElementsByTagName('img');
    for (var i = 0; i < 7; i++) {
      dbkr2_img_ul1_imgs[i].src = "imgs/" + "dzui" + (i + 1) + ".jpg";
    }
  })
  $('#dbkr2_img_left,#dbkr2_img_right').hover(function () {
    $(this).children('img').toggle();
  });
  //点击关闭盒子
  $('.dbkr2_img_close').click(function () {
    $(this).slideUp(400);
    $('.dbkr2_img').slideUp(400);
  })
  //点击左箭头轮播
  var dcurrentIndex = 0;
  $('#dbkr2_img_left').children('img').click(function () {
    var dbkr2_img_ul1_lis = $('#dbkr2_img_ul1').children('li');
    var dbkr2_img_imgwidth = dbkr2_img_ul1_lis[0].offsetWidth;
    if (dcurrentIndex == 0) {
      dcurrentIndex = dbkr2_img_ul1_lis.length - 1;
      $('#dbkr2_img_ul1').css({
        left: dcurrentIndex * dbkr2_img_imgwidth * -1
      })
    }
    dcurrentIndex--;
    var dbkr2_img_ul1_target = dcurrentIndex * dbkr2_img_imgwidth * -1;
    $('#dbkr2_img_ul1').stop(true, false).animate({
      left: dbkr2_img_ul1_target
    }, 500)
  })
  //点击右箭头轮播
  $('#dbkr2_img_right').children('img').click(function () {
    var dbkr2_img_ul1_lis = $('#dbkr2_img_ul1').children('li');
    var dbkr2_img_imgwidth = dbkr2_img_ul1_lis[0].offsetWidth;
    if (dcurrentIndex == dbkr2_img_ul1_lis.length - 1) {
      dcurrentIndex = 0;
      $('#dbkr2_img_ul1').css({
        left: 0
      })
    }
    dcurrentIndex++;
    var dbkr2_img_ul1_target = dcurrentIndex * dbkr2_img_imgwidth * -1;
    $('#dbkr2_img_ul1').stop(true, false).animate({
      left: dbkr2_img_ul1_target
    }, 500)
  })

  //赛事信息 视频栏
  var dmiddle_ul = $('.dmiddle').children('ul');
  var dmiddle_lis = dmiddle_ul.children('li');
  for (var i = 0; i < dmiddle_lis.length; i++) {
    dmiddle_lis[i].index = i;
  }
  dmiddle_lis.mouseover(function () {
    var index = this.index;
    $('.dmiddle').children('span').stop(true, false).animate({left: index * 100});
    var dmiddle1 = $('#dmiddle1').children('div');
    for (var i = 0; i < dmiddle1.length; i++) {
      dmiddle1[i].style.display = 'none';
    }
    dmiddle1[index].style.display = 'block';
  });
  //赛事信息右边
  //自动轮播
  var ddcurrentIndex = 0;
  var dup_ul = $('.dup_ul');
  var dup_li = dup_ul.children('li');

  function dzidong() {
    if (ddcurrentIndex == dup_li.length - 1) {
      ddcurrentIndex = 0;
      dup_ul.css({left: 0});
    }
    ddcurrentIndex++;
    var target = ddcurrentIndex * dup_li[0].offsetWidth * -1;
    dup_ul.animate({left: target});
    for (var i = 0; i < ddown_a.length; i++) {
      ddown_a[i].style.backgroundColor = 'rgba(0,0,0,.8)';
      ddown_a[i].style.color = '#8b8989';
    }
    if (ddcurrentIndex == ddown_a.length) {
      ddown_a[0].style.backgroundColor = '#3b8bed';
      ddown_a[0].style.color = '#fff';
    } else {
      ddown_a[ddcurrentIndex].style.backgroundColor = '#3b8bed';
      ddown_a[ddcurrentIndex].style.color = '#fff';
    }
    var dup_ul_span = $('.dup_ul li span');
    for (var i = 0; i < ddown_a.length; i++) {
      dup_ul_span[i].style.display = 'none';
    }
    dup_ul_span.slideDown();
  }

  var dup_ul_timer = setInterval(dzidong, 2000);
  $('.dup').mouseover(function () {
    clearInterval(dup_ul_timer);
  });
  $('.dup').mouseout(function () {
    dup_ul_timer = setInterval(dzidong, 2000);
  });
  //鼠标移入切换
  var ddown_a = $('.ddown>a');
  for (var i = 0; i < ddown_a.length; i++) {
    ddown_a[i].index = i;
  }
  ddown_a.mouseover(function () {
    var index = this.index;
    var dup_ul_li = $('.dup_ul>li');
    var target = index * dup_ul_li[0].offsetWidth * -1;
    $('.dup_ul').stop(true, false).animate({left: target});
    $(this).css({backgroundColor: '#3b8bed'}).siblings().css({backgroundColor: 'rgba(0,0,0,.8)'});
    $(this).css({color: '#fff'}).siblings().css({color: '#8b8989'});
    var dup_ul_span = $('.dup_ul li span');
    for (var i = 0; i < ddown_a.length; i++) {
      dup_ul_span[i].style.display = 'none';
    }
    dup_ul_span.slideDown();
    ddcurrentIndex = index;
  });
  $('.dup_ul li span').hover(function () {
    $(this).html(' 点击欣赏');
  }, function () {
    $(this).html('点击欣赏　>');
  })
  //右侧小格子的红线
  var dbot_span = $('.dbot span');
  $('.dbot i').mouseover(function () {
    $(this).children('span').stop(true, false).show();
    for (var i = 0; i < dbot_span.length; i++) {
      dbot_span[i].style.width = 0;
    }
    ;
    $(this).children('span').stop(true, false).animate({
      width: 28
    });
  })
  $('.dbot i').mouseout(function () {
    $(this).children('span').hide(400);
  })


});
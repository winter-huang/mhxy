/**
 * Created by hyd on 2017/8/10.
 */
$(function () {
  var dbkl_txt = document.getElementById("dbkl_txt");
  dbkl_txt.onclick = function () {
    if (this.value == '输入关键字') {
      this.value = '';
    }
  }
  dbkl_txt.onblur = function () {
    if (!this.value) {
      this.value = '输入关键字';
    }
  }
  var dbkssbg = document.getElementById("dbkssbg");
  var dbkl_i = document.getElementById("dbkl_i");
  var dbkssbox_p = document.getElementById("dbkssbox_p");
  dbkl_i.onclick = function () {
    if (dbkl_txt.value == '输入关键字' || dbkl_txt.value == '  ') {
      dbkssbg.style.display = 'block';
      dbkssbox_p.innerHTML = '请输入搜索内容'
    } else {
      dbkssbg.style.display = 'block';
      dbkssbox_p.innerHTML = '正在执行跳转页面...'
    }
  }
  var dbkssbox_close = document.getElementById("dbkssbox_close");
  dbkssbox_close.onmouseover = function () {
    this.style.opacity = 0.5;
  }
  dbkssbox_close.onmouseout = function () {
    this.style.opacity = 1;
  }
  dbkssbox_close.onclick = function () {
    dbkssbg.style.display = 'none';
  }
  var dbkssbox_qd = document.getElementById("dbkssbox_qd");
  dbkssbox_qd.onmouseover = function () {
    this.style.opacity = 0.5;
  }
  dbkssbox_qd.onmouseout = function () {
    this.style.opacity = 1;
  }
  dbkssbox_qd.onclick = function () {
    dbkssbg.style.display = 'none';
  }
  var dbkl_gd = document.getElementById("dbkl_gd");
  dbkl_gd.onclick = function () {
    dbkssbg.style.display = 'block';
    dbkssbox_p.innerHTML = '持续更新中...'
  }
  var dbkr_mv = document.getElementById("dbkr_mv");
  dbkr_mv.onclick = function () {
    dbkssbg.style.display = 'block';
    dbkssbox_p.innerHTML = '先买票后上车，精彩不要错过......'
  }
//梦幻百科中间部分
  var dbkm_middle = document.getElementById("dbkm_middle");
  var dbkm_middle_lis = dbkm_middle.children;
  var dbkm_bottom_box = document.getElementById("dbkm_bottom_box");
  var dbkm_bottom_uls = dbkm_bottom_box.children;
  var line = document.getElementById("line");
  for (var i = 0; i < dbkm_middle_lis.length; i++) {
    dbkm_middle_lis[i].index = i;
    dbkm_middle_lis[i].onmouseover = dbkm_lisMouseOver;
  }
  function dbkm_lisMouseOver() {
    for (var i = 0; i < dbkm_middle_lis.length; i++) {
      dbkm_middle_lis[i].style.borderTop = 0;
      dbkm_middle_lis[i].style.color = '';
      dbkm_bottom_uls[i].style.display = 'none';
    }
    var index = this.index;
    var target = index * 70 + 20;
    dbkm_middle_lis[0].removeAttribute('class');
    animatev2(line, target, 'left');
    this.style.color = 'red';
    dbkm_bottom_uls[index].style.display = 'block';
  }

  var dbkm_gd = document.getElementById("dbkm_gd");
  dbkm_gd.onmouseover = function () {
    this.innerHTML = '更多';
    this.style.color = 'red';
    animatev2(dbkm_gd, 410, 'left');
  }
  dbkm_gd.onmouseout = function () {
    this.innerHTML = '更多 >';
    this.style.color = '';
    animatev2(dbkm_gd, 390, 'left');
  }
//梦幻百科中间小模块
  var dbkr_jy = document.getElementById("dbkr_jy");
  var dbkr_xr = document.getElementById("dbkr_xr");
  ;
  dbkr_jy.onmouseover = function () {
    this.innerHTML = '更多锦衣';
    this.style.color = 'red';
    animatev2(dbkr_jy, 150, 'left');
  }
  dbkr_jy.onmouseout = function () {
    this.innerHTML = '更多锦衣 >';
    this.style.color = '';
    animatev2(dbkr_jy, 140, 'left');
  }
  dbkr_xr.onmouseover = function () {
    this.innerHTML = '更多锦衣';
    this.style.color = 'red';
    animatev2(dbkr_xr, 150, 'left');
  }
  dbkr_xr.onmouseout = function () {
    this.innerHTML = '更多锦衣 >';
    this.style.color = '';
    animatev2(dbkr_xr, 140, 'left');
  }

//梦幻百科右边小模块
  var dbkr_mv = document.getElementById("dbkr_mv");
  ;
  dbkr_mv.onmouseover = function () {
    this.innerHTML = '更多';
    this.style.color = 'red';
    animatev2(dbkr_mv, 180, 'left');
  }
  dbkr_mv.onmouseout = function () {
    this.innerHTML = '更多 >';
    this.style.color = '';
    animatev2(dbkr_mv, 170, 'left');
  }

//赛事信息左边js
  var dssl_t = document.getElementById("dssl_t");
  var dssl_t_is = dssl_t.children;
  var dewm = document.getElementById("dewm");
  var dewm_divs = dewm.children;
  for (var i = 0; i < dssl_t_is.length; i++) {
    dssl_t_is[i].index = i;
    dssl_t_is[i].onmouseover = dssl_t_ismouseover;
  }
  function dssl_t_ismouseover() {
    var index = this.index;
    for (var i = 0; i < dssl_t_is.length; i++) {
      dssl_t_is[i].style.opacity = .3;
      dewm_divs[i].style.display = 'none';
    }
    this.style.opacity = 1;
    dewm_divs[index].style.display = 'block';
  }

//赛事信息的更多
  var dssxx_gd = document.getElementById("dssxx_gd");
  dssxx_gd.onmouseover = function () {
    this.innerHTML = '更多';
    this.style.color = 'red';
    animatev2(dssxx_gd, 410, 'left');
  }
  dssxx_gd.onmouseout = function () {
    this.innerHTML = '更多 >';
    this.style.color = '';
    animatev2(dssxx_gd, 390, 'left');
  }
})





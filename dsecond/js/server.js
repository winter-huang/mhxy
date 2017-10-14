/**
 * Created by Administrator on 2017/8/13.
 */

window.onload = function () {
  function $$(id) {
    return document.getElementById(id);
  }

  // 顶部移入
  var topBarNav = $$('topBarNav');
  var topLis = topBarNav.getElementsByTagName('li');
  for (var i = 0; i < topLis.length; i++) {
    topLis[i].index = i;
    topLis[i].onmouseover = topLisMouseover;
    topLis[i].onmouseout = topLisMouseout;
  }
  function topLisMouseover() {
    topLis[this.index].style.background = '#eaeaea';
    this.children[1].style.display = 'block';
  }

  function topLisMouseout() {
    topLis[this.index].style.background = '';
    this.children[1].style.display = 'none';
  }


};

$(function () {
  // <!- 梦幻热点部分-->
  //1.获得要操作的对象
  var box = document.getElementById('bcbody');
  var spans = box.getElementsByTagName('span');
  var lis = box.getElementsByTagName('li');
  var bxian2 = document.getElementById('bxian2');
//2.给事件源注册事件
  for (var i = 0; i < spans.length; i++) {
    // spans[i].setAttribute('index', i);
    spans[i].index = i;
    spans[i].onmouseover = function () {
      for (var j = 0; j < spans.length; j++) {
        spans[j].removeAttribute('class');//将其余的class属性移除掉
        lis[j].removeAttribute('class');
        lis[j].style.display = 'none';
        spans[j].style.color = ""
      }
      this.className = 'current'//给当前的span标签添加class属性
      // 让li标签中，和单击的span标签索引一致的那个li标签显示
      var index = this.index;
      console.log(index);
      var target = index * 80 + 20;
      animatev2(bxian2, target, "left");
      this.style.color = 'red';
      lis[index].style.display = 'block';
    }
  }
  // <!- 梦幻热点部分-->

})




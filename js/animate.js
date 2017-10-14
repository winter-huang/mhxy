/**
 * Created by hyd on 2017/8/5.
 */
/**
 * 封装了一个获取元素当前样式的函数
 * @param element
 * @param attr   'left' 'top' 'width' 'height'
 * @returns {*}
 */
function getStyle(element, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr];
  } else {
    return element.currentStyle[attr];
  }
}

/**
 * 封装了一个缓慢动画的函数
 * @param element
 * @param target
 */
function animatev1(element, target) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var currentLeft = element.offsetLeft;
    var step = (target - currentLeft) / 10;
    step = target >= currentLeft ? Math.ceil(step) : Math.floor(step);
    currentLeft += step;
    element.style.left = currentLeft + 'px';
    if (target == currentLeft) {
      clearInterval(element.timer);
    }
  }, 20)
}

/**
 * 封装了一个可以自定义修改offset属性的函数
 * @param element
 * @param target
 * @param attr 'with' 'left' 'top' 'height'
 */
function animatev2(element, target, attr) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var current = parseInt(getStyle(element, attr));
    var step = (target - current) / 10;
    step = target >= current ? Math.ceil(step) : Math.floor(step);
    current += step;
    element.style[attr] = current + 'px';
    if (target == current) {
      clearInterval(element.timer);
    }
  }, 10)
}

/**
 * 封装了可以修改透明度+层级+以px为单位的属性
 * 添加了回调函数，让动画执行完毕之后，可以做些事情
 * @param element
 * @param obj
 * @param callback
 */
function animatev6(element, obj, callback) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var flag = true;
    for (var attr in obj) {
      var target = obj[attr];
      if (attr == 'opacity') {
        // var target = obj[attr];
        var current = parseFloat(getStyle(element, attr));
        target = Math.floor(target * 100);
        current = Math.floor(current * 100);
        var step = (target - current) / 10;
        step = target > current ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current / 100;
      } else if (attr == 'zIndex') {
        // var target = obj[attr];
        var current = target;
        element.style[attr] = target;
      } else {
        var current = parseInt(getStyle(element, attr));
        var step = (target - current) / 10;
        step = target > current ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + 'px';
      }
      if (current != target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(element.timer);
      //动画完成后，这里还可以做点别的事情，也可以传入回调函数
      // if(callback!=undefined){
      //     callback();
      // }
      callback && callback();// 短路运算，
      // &&找假,第一个false则返回第二个，第一个true则返回第二个
    }
  }, 20)
}

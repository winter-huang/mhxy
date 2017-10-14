/**
 * Created by Administrator on 2017/8/13.
 */

window.onload = function () {

    function $$(id) {
        return document.getElementById(id);
    }

    function animate(element, target) {
        //保证计时器唯一不叠加
        clearInterval(element.timer);
        //重新设新的计时器
        element.timer = setInterval(
            function () {
                //获取当前位置
                var currentLeft = element.offsetLeft;
                //计算下一步的位置
                var step = 40;
                currentLeft += target >= currentLeft ? step : -step;
                //重新设定位置
                element.style.left = currentLeft + "px";
                //停下来
                if (Math.abs(target - currentLeft) <= step) {
                    clearInterval(element.timer);
                    element.style.left = target + "px";
                }
            }, 20
        );
    }

    function getStyle(element, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(element, null)[attr];
        } else {
            return element.currentStyle[attr];
        }
    }

    function animatev6(element, obj, callback) {
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var flag = true;
            for (var attr in obj) {
                if (attr == "opacity") {
                    //特殊处理修改透明度的逻辑
                    var target = obj[attr];
                    var current = parseFloat(getStyle(element, attr));

                    //放大之后取整的过程
                    target = Math.floor(target * 100);
                    current = Math.floor(current * 100);

                    var step = (target - current) / 10;
                    //同样要根据方向取整
                    step = target >= current ? Math.ceil(step) : Math.floor(step);

                    current += step;
                    //因为之前是放大了100倍，在修改的时候一定要记得缩小回来
                    element.style[attr] = current / 100;

                } else if (attr == "zIndex") {
                    //特殊处理修改层级的逻辑  -- 因为层级看不见动画，就没必要做动画-- 直接设置为目标值即可
                    var target = obj[attr];
                    //程序严谨性，把current声明出来
                    var current = target;
                    element.style[attr] = target;
                } else {
                    //这是正常的处理以px为单位属性的逻辑
                    var target = obj[attr];
                    var current = parseInt(getStyle(element, attr));

                    //得到步长
                    var step = (target - current) / 10;
                    //根据方向对步长取整
                    step = target >= current ? Math.ceil(step) : Math.floor(step);
                    //修改当前值
                    current += step;
                    //重新设置
                    element.style[attr] = current + "px";
                }
                //尝试推翻假设
                if (target != current) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(element.timer);
                //希望可以在这里做一些别的事情
                callback && callback();
            }

        }, 20);
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

    // 轮播
    var slidePic = $$('slidePic');
    var circleBtn = $$('circleBtn');
    var ulPic = $$('ulUL');
    var liPic = slidePic.children[0].children;
    var liBtn = circleBtn.children[0].children;
    var curIndex = 0
    for (var j = 0; j < liBtn.length; j++) {
        liBtn[j].index = j;
        liBtn[j].className = '';
        liBtn[0].className = 'on';
        liBtn[j].onmouseover = picMouseover;
        liBtn[j].onmouseout = picMouseout;
    }
    console.log(ulPic);
    function picMouseover() {
        clearInterval(timer);
        for (var j = 0; j < liBtn.length; j++) {
            liBtn[j].className = '';
        }
        this.className = 'on';
        var index = this.index
        liPic[index].style.opacity = 0.2;
        ulPic.style.left = -index * liPic[index].offsetWidth + 'px';
        // console.log(this.index);
        animatev6(liPic[index], {opacity: 1});
        curIndex = this.index;
    }

    function picMouseout() {
        // this.className = '';
        // ==============================================================
        timer = setInterval(autoRun, 3000);  // wocao,记得一定在调用定时器的时候要加名字，不然会叠加
        // ===============================================================
    }

    // 自动轮播
    var timer = setInterval(autoRun, 3000);
    function autoRun() {
        curIndex++;
        if (curIndex >= liBtn.length) {
            curIndex = 0;
        }
        for (var j = 0; j < liBtn.length; j++) {
            liBtn[j].className = '';
        }
        liBtn[curIndex].className = 'on';
        liPic[curIndex].style.opacity = 0.2;
        ulPic.style.left = -curIndex * liPic[curIndex].offsetWidth + 'px';
        animatev6(liPic[curIndex], {opacity: 1});
    }

    // 半圆移入
    var navUp = $$('navUp');
    var circle = $$('circle');
    navUp.onmouseover = function () {
        navUp.className = 'up';
    };
    navUp.onmouseout = function () {
        navUp.className = 'down';
    }

    // 游戏盒子左右按钮
    var arrLeft = $$('arrLeft');
    var arrRight = $$('arrRight');
    var gameUl = $$('gameUl');
    var gamePic = gameUl.getElementsByTagName('li');
    var currentIndex = 0;
    var imgWidth = 128;
    arrLeft.onclick = function () {
        // gameUl.style.left = -126 * currentIndex;
        if (currentIndex == 0) {
            return;
        }
        currentIndex--;
        var target = imgWidth * currentIndex * -1;
        animate(gameUl, target);
    };
    arrRight.onclick = function () {
        if (currentIndex == gamePic.length - 7) {
            currentIndex = 0;
        }
        currentIndex++;
        var target = imgWidth * currentIndex * -1;
        animate(gameUl, target);
    };

    // 点击tab栏
    var tabBtn = $$('tabBtn');
    var tabLi = tabBtn.children[0].children;
    var contentUl = $$('contentUl');
    var contentLi = contentUl.getElementsByTagName('li');
    for (var k = 0; k < tabLi.length; k++) {
        tabLi[k].index = k;
        tabLi[k].onclick = tabBtnClick;
    }

    function tabBtnClick() {
        for (var k = 0; k < tabLi.length; k++) {
            tabLi[k].className = 'currentli';
            tabLi[k].children[0].style.color = '#fff';
        }
        this.className = 'currentLi';
        this.children[0].style.color = '#000';
        switch (this.index) {
            case 0:
                for (var i = 0; i < contentLi.length; i++) {
                    contentLi[i].className = 'current';
                }
                break;
            case 1:
                count(0,14);
                break;
            case 2:
                count(14,16);
                break;
            case 3:
                count(16,20);
                break;
            case 4:
                count(20,25);
                break;
            case 5:
                count(25,28);
                break;
        }
    }
    function count(n,num) {
        for (var i = 0; i < contentLi.length; i++) {
            contentLi[i].className = 'hide';
        }
        for (var j = n; j < num; j++) {
            contentLi[j].className = 'current';
        }
    }


}







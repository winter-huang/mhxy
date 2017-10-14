/**
 * 首页第一板块部分的js
 */

window.onload = function () {
    function $$(id) {
        return document.getElementById(id);
    }

    // 获取属性
    function getStyle(element, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(element, null)[attr];
        } else {
            return element.currentStyle[attr];
        }
    }

    // 缓动动画
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


    // 顶部大广告
    var myWorld = $$('a-myWorld');
    var myWorldBig = $$('a-myWorldBig');
    var myWorldImg = $$('a-myWorld-img');
    myWorld.onmouseover = function () {
        // this.style.background = '#fbfbfb';
        myWorldImg.className = 'hide';
        myWorldBig.className = 'current';
    };
    myWorld.onmouseout = function () {
        // this.style.background = "";
        // this.style.background = 'url(../img/a-tb.jpg)';
        myWorldImg.className = 'current';
        myWorldBig.className = 'hide';
    };

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


// 右侧新闻板块的tab栏切换
    var wraps = $$('wraps');
    var lis = wraps.getElementsByTagName('li');
    var newsContent = $$('news-content');
    var newsCons = newsContent.children;
    var navLine = $$('nav-line');

    for (var i = 0; i < lis.length - 1; i++) {
        lis[i].index = i;
        lis[i].onmouseover = newsMouseoverHandle;
    }
    function newsMouseoverHandle() {
        for (var j = 0; j < newsCons.length; j++) {
            lis[j].className = '';
            newsCons[j].className = 'hide';
        }
        animatev6(navLine, {left: this.index * 75});
        lis[this.index].className = 'current-nav';
        newsCons[this.index].className = 'current';
    }

    // 新闻板块右上角 更多
    var newsMore = $$('li-more');
    var newsArrow = $$('news-arrow');
    newsMore.onmouseover = function () {
        animatev6(newsMore, {right: 15});
        animatev6(newsArrow, {right: 22, opacity: 0})
        this.style.color = '#f24854';
    };
    newsMore.onmouseout = function () {
        animatev6(newsMore, {right: 20});
        animatev6(newsArrow, {right: 25, opacity: 1});
    };


    // 轮播图,右上角按钮
    var slideBtnL = $$('a-slide-btn-l');
    var slideBtnR = $$('a-slide-btn-r');
    var slideBodyOne = $$('slide-body-one');
    var slideBodyTwo = $$('slide-body-two');
    slideBtnL.onclick = function () {
        this.style.background = '#3b8bed';
        slideBtnR.style.background = '#333e50';
        slideBodyOne.className = 'slide-body-one';
        slideBodyTwo.className = 'slide-body-two hide';
    };
    slideBtnR.onclick = function () {
        this.style.background = '#3b8bed';
        slideBtnL.style.background = '#333e50';
        slideBodyOne.className = 'slide-body-one hide';
        slideBodyTwo.className = 'slide-body-two';
    };
// 轮播部分
    var aPic = slideBodyOne.children[0].children;
    var aPic2 = slideBodyTwo.children[0].children;
    var slideBtoOne = $$('slide-bottom-one');
    var ul1 = slideBtoOne.children[0];
    var lisOne = ul1.getElementsByTagName('li');
    var slideBtoTwo = $$('slide-bottom-two');
    var ul2 = slideBtoTwo.children[0];
    var lisTwo = ul2.children;
    var currentIndex = 0;
    for (var i = 0; i < lisOne.length; i++) {
        lisOne[i].index = i;
        lisOne[i].onmouseover = slideBodyOneMouseover;
        lisOne[i].onmouseout = slideBodyOneMouseout;
    }
    function slideBodyOneMouseover() {
        clearInterval(timer);
        for (var i = 0; i < lisOne.length; i++) {
            lisOne[i].className = '';
            aPic[i].className = 'hide';
            aPic[i].style.opacity = 0.2;
        }
        this.className = 'current-btn';
        animatev6(aPic[this.index], {opacity: 1});
        aPic[this.index].className = 'current';
        currentIndex = this.index;
    }
    function slideBodyOneMouseout() {
        aPic[this.index].style.opacity = 1;
        timer = setInterval(slideSelfMove,3000);
    }

    // 第一个轮播的自动轮播
    var timer = setInterval(slideSelfMove,3000);
    function slideSelfMove() {
        for (var i = 0; i < lisOne.length; i++) {
            if (aPic[i].getAttribute('class') == 'current'){
                currentIndex = i+1;
            }
        }
        if (currentIndex > lisOne.length - 1) {
            currentIndex = 0;
        }
        for (var j = 0; j < lisOne.length; j++) {
            lisOne[j].className= '';
            aPic[j].className = 'hide';
            aPic[j].style.opacity = 0.2;
        }
        animatev6(aPic[currentIndex], {opacity: 1});
        lisOne[currentIndex].className = 'current-btn';
        aPic[currentIndex].className = 'current';
    }



    for (var j = 0; j < lisTwo.length; j++) {
        lisTwo[j].index = j;
        lisTwo[j].onmouseover = slideBodyTwoMouseover;
    }
    function slideBodyTwoMouseover() {
        for (var j = 0; j < lisTwo.length; j++) {
            lisTwo[j].className = '';
            aPic2[j].className = 'hide';
            aPic2[j].style.opacity = 0.2;
        }
        this.className = 'current-btn';
        aPic2[this.index].className = 'current';
        animatev6(aPic2[this.index], {opacity: 1});
    }


    // 左边精灵图
    var compuBtn = $$('compu-btn-one');
    var mobileBtn = $$('mobile-btn-two');
    var arrow1 = $$('i-arrow1');
    var arrow2 = $$('i-arrow2');
    compuBtn.onmouseover = function () {
        arrow1.style.top = 10 + 'px';
        arrow1.style.opacity = 0;
        animatev6(arrow1, {top: 38, opacity: 1});
    };
    compuBtn.onmouseout = function () {
        arrow1.style.top = 70 + 'px';
        arrow1.style.opacity = 0;
        animatev6(arrow1, {top: 38, opacity: 1});
    }
    mobileBtn.onmouseover = function () {
        arrow2.style.top = 10 + 'px';
        arrow2.style.opacity = 0;
        animatev6(arrow2, {top: 38, opacity: 1});
    };
    mobileBtn.onmouseout = function () {
        arrow2.style.top = 70 + 'px';
        arrow2.style.opacity = 0;
        animatev6(arrow2, {top: 38, opacity: 1});
    };


};






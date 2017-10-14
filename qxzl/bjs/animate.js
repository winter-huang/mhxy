/**
 * Created by hyd on 2017/8/5.
 */
/**
 * 封装了一个获取元素当前样式的函数
 * @param element
 * @param attr   'left' 'top' 'width' 'height'
 * @returns {*}
 */
function getStyle(element,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}

/**
 * 封装了一个缓慢动画的函数
 * @param element
 * @param target
 */
function animatev1(element,target) {
    clearInterval(element.timer);
    element.timer=setInterval(function () {
        var currentLeft = element.offsetLeft;
        var step=(target-currentLeft)/10;
        step=target>=currentLeft?Math.ceil(step):Math.floor(step);
        currentLeft+=step;
        element.style.left=currentLeft+'px';
        if(target==currentLeft){
            clearInterval(element.timer);
        }
    },20)
}


/**
 * 封装了一个可以自定义修改offset属性的函数
 * @param element
 * @param target
 * @param attr 'with' 'left' 'top' 'height'
 */
function animatev2(element,target,attr) {
    clearInterval(element.timer);
    element.timer=setInterval(function () {
        var current = parseInt(getStyle(element,attr));
        var step = (target-current)/10;
        step = target>=current?Math.ceil(step):Math.floor(step);
        current+=step;
        element.style[attr]=current+'px';
        if(target==current){
            clearInterval(element.timer);
        }
    },10)
}



function animatev5(element,obj){
        clearInterval(element.timer);
        element.timer = setInterval(function(){
            var flag = true;
            for(var attr in obj){
                if(attr == "opacity"){
                    //特殊处理修改透明度的逻辑
                    var target = obj[attr];
                    var current = parseFloat(getStyle(element,attr));

                    //放大之后取整的过程
                    target = Math.floor(target * 100);
                    current = Math.floor(current * 100);

                    var step = (target - current) / 10;
                    //同样要根据方向取整
                    step = target >= current ? Math.ceil(step) : Math.floor(step);

                    current += step;
                    //因为之前是放大了100倍，在修改的时候一定要记得缩小回来
                    element.style[attr] = current / 100;

                }else if(attr == "zIndex"){
                    //特殊处理修改层级的逻辑  -- 因为层级看不见动画，就没必要做动画-- 直接设置为目标值即可
                    var target = obj[attr];
                    //程序严谨性，把current声明出来
                    var current = target;
                    element.style[attr] = target;
                }else {
                    //这是正常的处理以px为单位属性的逻辑
                    var target = obj[attr];
                    var current = parseInt(getStyle(element,attr));

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
                if(target != current){
                    flag = false;
                }
            }
            if(flag){
                clearInterval(element.timer);
            }

        },20);
    }


    // hide.onclick = function(){
    //     animatev5(box,{
    //         width:600,
    //         height:400,
    //         opacity: 0
    //     })
    // }

    // show.onclick = function(){
    //     animatev5(box,{
    //         width:600,
    //         height:400,
    //         top: 300,
    //         left:500,
    //         opacity: 0.2,
    //         zIndex:22
    //     })
    // }

/**
 * 封装了可以修改透明度+层级+以px为单位的属性
 * 添加了回调函数，让动画执行完毕之后，可以做些事情
 * @param element
 * @param obj
 * @param callback
 */
function animatev6(element,obj,callback){
    clearInterval(element.timer);
    element.timer=setInterval(function(){
        var flag=true;
        for(var attr in obj){
            var target = obj[attr];
            if(attr=='opacity'){
                // var target = obj[attr];
                var current = parseFloat(getStyle(element,attr));
                target=Math.floor(target*100);
                current=Math.floor(current*100);
                var step=(target-current)/10;
                step=target>current?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current/100;
            }else if(attr=='zIndex'){
                // var target = obj[attr];
                var current=target;
                element.style[attr]=target;
            }else{
                var current = parseInt(getStyle(element,attr));
                var step = (target-current)/10;
                step = target>current?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current+'px';
            }
            if(current!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.timer);
            //动画完成后，这里还可以做点别的事情，也可以传入回调函数
            // if(callback!=undefined){
            //     callback();
            // }
             callback && callback();// 短路运算，
                                  // &&找假,第一个false则返回第二个，第一个true则返回第二个
        }
    },20)
}

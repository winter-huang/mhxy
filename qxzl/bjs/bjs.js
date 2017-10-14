/*
* @Author: lenovo
* @Date:   2017-08-12 11:50:10
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-15 11:46:06
*/

'use strict';
window.onload = function(){



    // 旋转木马部分开始
	 var config = [{
        width: 300,
        top: 170,
        left: 50,
        opacity: 0.2,
        zIndex: 2
    }, //0
        {
            width: 500,
            top: 220,
            left: 130,
            opacity: 0.8,
            zIndex: 3
        }, //1
        {
            width: 700,
            top: 300,
            left: 430,
            opacity: 1,
            zIndex: 4
        }, //2
        {
            width: 500,
            top: 220,
            left: 800,
            opacity: 0.8,
            zIndex: 3
        }, //3
        {
            width: 300,
            top: 170,
            left: 880,
            opacity: 0.2,
            zIndex: 2
        } //4
    ];


    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var btnLeft = arrow.children[0];
    var btnRight = arrow.children[1];
    //根据数组里面的每个对象，控制每一张图片的动画 -- 散开
    var lis = document.getElementById("wrap").getElementsByTagName("li");
    rotate();

    function rotate(){
        for(var i = 0; i < lis.length ; i++){
            animatev5(lis[i],config[i]);
        }
    }

    //三角箭头的显示和隐藏
    wrap.onmouseover = function(){
        animatev5(arrow,{opacity:1});
    }
    wrap.onmouseout = function(){
        animatev5(arrow,{opacity:0});
    }
    //箭头的点击事件
    btnRight.onclick = function(){
        var first = config.shift();
        config.push(first);
        rotate();
    }
    btnLeft.onclick = function(){
        var last = config.pop();
        config.unshift(last);
        rotate();
    }

    //旋转木马部分结束



     //轮播图开始部分

//    1 获取元素
var inner = document.getElementById("inner");
    var ul = document.getElementById('imglist');
    var imgWidth = ul.children[0].offsetWidth;

    var currentIndex = 0;
    function moveRight(){
        //如果已经到达最后一张，记得切换回第一张
        if(currentIndex == ul.children.length - 1){
            //直接设置ul回到最初的位置
            ul.style.left = 0;
            //记得同步索引
            currentIndex=0;
        }
        //让索引自增
        currentIndex++;
        //根据索引计算出ul应该到达的目标位置
        var target = (imgWidth * currentIndex * -1);
        //移动ul
        animatev6(ul,
        	{left:target},function(){});
    }

    // 2 每隔一段时间让ul移动
    setInterval(moveRight,4000);

}

    //轮播图结束部分
    


     //历届排行队伍开始部分
  //获取要操作的元素
  var slide = document.getElementById('slide');
  var ul = document.getElementById('ul');
  // console.log(ul)
  var lis = ul.children;
  var img = ul.getElementsByTagName('img');
  //给事假源注册事件
  slide.onscroll = function(){
        // console.log(1);
    }

  for(var i=0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onmouseover = function(){
        animatev6(img[this.index],
            {width:130,
            height:130,
            left:-15
        
           })
    }
    lis[i].onmouseout = function(){
        animatev5(img[this.index],
            {width:90,
            height:90,
            left:0
        })
    }
  }



     //历届排行队伍开始部分

     //固定栏部分开始
     //获取要操作的对象
     var jianhu = document.getElementById('jianhu');
     var ul = document.children;

     var li4 = document.getElementById('li4');
     var target;
     var target2;




      window.onscroll = function(){

        target = document.body.scrollTop;
        console.log(target);
        animatev6(jianhu,{top:target,
        });
        if(target >= 0 && target < 600){
            animatev5(li4,{top:4});
        }
        else if(target >= 600 && target <1500){
            animatev5(li4,{top:129});
        }
        else if(target >= 1500){
            animatev5(li4,{top:252});
        }



      }













     //固定栏部分结束
/**
 * Created by Ropynn on 2017/8/15.
 */

$(function () {
  //正则表达式
  /**
   * 在文本框失去焦点的时候，获取文本，判断跟准备好的正则是否相匹配
   *      如果匹配，就显示正确
   *      如果不匹配，显示错误
   */
  var regMail = /^[0-9a-zA-Z_.-]{6,20}[@][0-9a-zA-Z]+([.][0-9a-zA-Z]+)+$/;
  var regPassWord = /^\S{6,16}$/;
  var regQQ = /^[1-9][0-9]{4,11}$/;
  var regPhone = /^[1](([3][0-9])|([4][57])|([5][0-9])|([8][0-9]))[0-9]{8}$/;
  var regTel4 = /^[0](([\d]{2}[-][\d]{8}$)|([\d]{3}[-][\d]{7}$))/;
  var regName = /^[\u4e00-\u9fa5]{2,20}$/;

  var idName = document.getElementById("idName");
  var passWord = document.getElementById("passWord");
  var idName1 = document.getElementById("idName1");
  var passWord1 = document.getElementById("passWord1");
  var NameVal;

  idName.onblur = function () {
    //获取文本
    var val = this.value;
    NameVal = this.value;
    //比较
    if (regMail.test(val)) {
      //告诉用户正确
      idName1.innerText = "正确";
      idName1.style.color = "#0a0";
    } else {
      //告诉用户错误
      idName1.innerText = "错误";
      idName1.style.color = "#f00";
    }
  }

  passWord.onblur = function () {
    //获取文本
    var val = this.value;
    //比较
    if (regPassWord.test(val)) {
      //告诉用户正确
      passWord1.innerText = "正确";
      passWord1.style.color = "#0a0";
    } else {
      //告诉用户错误
      passWord1.innerText = "错误";
      passWord1.style.color = "#f00";
    }
  }
  var body = document.getElementsByTagName("body");
  //当点击注册账号时
  $('#register').click(function () {
    //注册界面出现
    $('.login').stop().slideDown(500);
    //禁止滚动
    body[0].style.overflowY = 'hidden'
  })
//当点击提交按钮时
  $('#submit').click(function () {
    //判断输入的格式是否正确
    if (passWord1.innerText == '正确' && idName1.innerText == '正确') {
      //如果都正确,那么将注册账号那个值改为 注册的账号
      $('#register').children('a').html(NameVal);
      //然后注册框消失
      $('.login').stop().slideUp(500);
      body[0].style.overflowY = 'auto';
      $('#register').children('i').css({
        width: $('#register').width() + 27 + 'px'
      })
    }
    else {
      alert('请信息将信息填完整')
    }

  })
//当点击那个X号时,
  $('#l-close').click(function () {
    //登录框收回
    $('.login').stop().slideUp(500);
    //滚动条恢复
    body[0].style.overflowY = 'auto';

  })


})

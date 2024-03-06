"use strict";

// // スクロールヘッダー固定
// $(function(){
//   let navPos =$(".news").offset().top;

//   $(window).scroll(function(){
//     if($(window).scrollTop() > navPos && !$(".header").hasClass('open_menu')){
//       $(".header").addClass('active');
//       $(".header.active").slideDown(600);
//       $(".header_link").addClass('active')
//       $(".header_img").css('display','none');
//       $(".header_img_bl").css('display','block');
//       $(".header_humburger").children().css('background','#000');
//     }else{
//       $(".header").removeClass('active');
//       $(".header_link").removeClass('active');
//       $(".header_img_bl").css('display','none');
//       $(".header_img").css('display','block');
//       $(".header_humburger").children().css('background','#fff');
//     }
//   });
// });

// ハンバーガーメニュー
// sp-header
{
  $(function () {
    $(".headersp").click(function () {
      $(this).toggleClass("close");
      $(".header").toggleClass("open_menu");
      $(".sp_nav").toggleClass("open_menu");
      $(".sp_menu").toggleClass("open_menu");
      $(".header_humburger").children().css("background", "#fff");
      // $(".header_img_bl").css('display','none');
      // $(".header_img").css('display','block');
    });
  });
}
{
  $(function () {
    $(".sp_menu a").click(function () {
      $(".sp_menu").removeClass("open_menu");
      // $(".header").removeClass("open_menu");
      $(".header").removeClass("open_menu");
      $(".header_sp").removeClass("close");
    });
  });
}

// ローディングアニメーション
{
  window.onload = function () {
    const spinner = document.getElementById("loading_animation");
    spinner.classList.add("loaded");
  };
}

'use strict';


$(function(){
  $(window).scroll(function(){
    const wHeight = $(window).height();
    const wScroll = $(window).scrollTop();
    $(".title_img_wrapper").each(function(){
      const bPosition = $(this).offset().top;
      if (wScroll > bPosition - wHeight + 200){
        $(this).addClass("fade_in");
      }
    });
  });
});



// WORKS -> MODAL


$(function () {
  $(".work_img_wrapper img").on("click", function() {
    let fullImgSrc = this.src;
    $("#modal_img").attr("src", fullImgSrc);
    $("#modal").fadeIn();
    $(".modal_overlay").fadeIn();
    $("html, body").css("overflow","hidden");
  });

  $(".close_btn, .modal_overlay").on("click", function() {
    $("#modal").fadeOut();
    $(".modal_overlay").fadeOut();
    $("html, body").removeAttr("style");
  });
});


// ABOUT -> MY SKILLS -> TAB

$(function() {
  $(".tab").on("click", function(event) {
    event.preventDefault();

    // 全てのタブとコンテンツを非アクティブにする
    $(".tab").removeClass("active");
    $(".tab_content").removeClass("active");

    // クリックされたタブと対応するコンテンツをアクティブにする
    $(this).addClass("active");
    $($(this).find("a").attr("href")).addClass("active");
  });
});



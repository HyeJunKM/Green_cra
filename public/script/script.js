;(function($){

  let cnt=0;
  
  // $('.menu-btn').on({
  //   mouseenter: function(){
  //     $('.sub-bg').stop().slideUp(0);
  //     $('.sub-bg').stop().slideDown(300);
  //     $('.sub').stop().slideUp(0);
  //     $(this).next().slideDown(300);
  //     $('.menu-btn').removeClass('on');
  //     $(this).addClass('on');
  //   }
  // });

  // $('#header').on({
  //   mouseleave: function(){
  //     $('.sub-bg, .sub').stop().slideUp(300);
  //     $('.menu-btn').removeClass('on');
  //   }
  // });


  //////////////////////////////////////////////////메인슬라이드
  // 1. 메인슬라이드 함수 / 2. 다음카운트 함수 / 3. 자동타이머 함수

  function mainSlide(){
    $('.slide-wrap').animate({left: -1200*cnt}, 600, function(){
      //cnt===3?cnt=0:cnt;
      if(cnt===3){
        cnt=0;
        $('.slide-wrap').animate({left: -1200*cnt}, 0);
      }
    });
  }

  function nextCount(){
    cnt++;
    mainSlide();
  }

  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();


    //////////////////////////////////////////////////모달 팝업창
    // $('.modal-btn').on({
    //   click: function(e){
    //     e.preventDefault();
    //     $('.modal').fadeIn(300);
    //   }
    // });

    // $('.close-btn').on({
    //   click: function(e){
    //     e.preventDefault();
    //     $('.modal').fadeOut(300);
    //   }
    // });


})(jQuery);
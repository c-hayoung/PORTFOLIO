(function($){
   const newsBox = $('#newsBox');
   let winScroll = $(window).scrollTop();
// ------------------------------------------------



// ------------------------------------------------
// 스크롤 내리기 시작하면, 뉴스박스 사라지기
   $(window).on('scroll',function(){
      let rel;
      winWidth = $(window).outerWidth();
      console.log(winWidth);
      if(winWidth <= 960){
         rel=false;
      }else{
         rel=true;
      }
      if(rel){
         winScroll = $(window).scrollTop();
         if(winScroll > 100){
            newsBox.slideUp();
         }else{
            newsBox.slideDown();
         }
      }      
   });



})(jQuery);
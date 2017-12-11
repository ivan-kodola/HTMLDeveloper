$(document).ready(function(){
   
  console.log(1);
  $('.slider .slide-trak').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  });
  
  
  $('.search-form-btn').click(function(){
    $('.search-form-btn').toggleClass('close');
    $('.search-form').toggleClass('show');
  });
  
  $('.show-mobile-menu').click(function(){
    $('html').toggleClass('no-scroll');
    $('.popup-bg').toggleClass('show');
    $('.menu-wrapper').toggleClass('show');
  });
  
  $('.close-mobile-menu').click(function(){
    $('html').toggleClass('no-scroll');
    $('.popup-bg').toggleClass('show');
    $('.menu-wrapper').toggleClass('show');
  });
  
  $('.popup-bg').click(function(){
    $('html').toggleClass('no-scroll');
    $('.popup-bg').toggleClass('show');
    $('.menu-wrapper').toggleClass('show');
  });
  
  
  
  
  
  
  
});
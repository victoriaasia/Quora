// header-menu-open
$('.js-header-menu').on('click', function() {
  $(this).toggleClass('header-menu--open');
});

// tabs-menu
$('.js-main-menu li').click(function(){
 var tab_id = $(this).attr('data-tab');

 $('.js-main-menu li').removeClass('current');
 $('.js-main-content').removeClass('current');

 $(this).addClass('current');
 $("#"+tab_id).addClass('current');
});


// hide header onscroll

var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('.js-header').outerHeight();
var scroll = $(window).scrollTop();


$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if ($('body').hasClass('body-modal')){
        $('.js-header').removeClass('header-up').addClass('header-down');
    } else {
      if (st > lastScrollTop && st > navbarHeight) {
          $('.js-header').removeClass('header-down').addClass('header-up');
      } else {
          if(st + $(window).height() < $(document).height()) {
              $('.js-header').removeClass('header-up').addClass('header-down');
          }
      }
    }

    lastScrollTop = st;
}

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

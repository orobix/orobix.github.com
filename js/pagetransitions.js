$('.nav a').on('click', function(){
    $(".navbar-toggle").click();
});

$(function() {
  $('[data-hash]').click(function() {
      var target = $(this).data('hash');
      $('.pt-page').scrollTo(target);
  });
});

$.fn.scrollTo = function( target, options, callback ) {
  if (typeof options == 'function' && arguments.length == 2) { callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : $('#menu').outerHeight() + 10,
    duration      : 1000,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}

function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

var PageTransitions = (function() {
  //if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ) {
  if ((isIE() && isIE() < 10) || navigator.userAgent.match(/trident/i)) {
    ieTransition();
  } else {
    transition();
  }
})();

function ieTransition() {
  //init
  $('.pt-page-1').addClass('pt-page-current');

  //change page
  $('[data-animation]').on('click', function(e) {
      var next = $(this).data('next') + 1;
      var scroll = $(this).data('scroll');

      if (next == 1) {
    	  $('#menu').hide();
    	  $('.socials').hide();
          } else {
          	  $('#menu').show();
          	  $('.socials').show();

    	  $('#menu li').removeClass('pageSelected');
    	  $('#menu .next' + (next-1)).addClass('pageSelected');
      }

      $('.pt-page-' + next).attr('hidden', false);

      $('.pt-page').removeClass('pt-page-current');
      $('.pt-page-' + next).addClass('pt-page-current');

      //scroll
      if (scroll) {
        $('.pt-page').scrollTo(scroll);
      }
  });
}

function transition() {
  //init
  $('.pt-page-1').addClass('pt-page-current');

  //change page TODO elimina
  $('[data-animation]').on('click', function() {
      
      var animation = $(this).data('animation');
      var next = $(this).data('next') + 1;
      var current = $('.pt-page-current').data('page');
      var scroll = $(this).data('scroll');

      changePage(animation, next, current, scroll);
  });
}

function changePage(animation, next, current, scroll) {
  if ( ! current  || current == next ) { return false; }

      if (next == 1) {
    	  $('#menu').hide();
    	  $('.socials').hide();
          } else {
          	  $('#menu').show();
          	  $('.socials').show();

    	  $('#menu li').removeClass('pageSelected');
    	  $('#menu .next' + (next-1)).addClass('pageSelected');
      }

      var animationClass = '';

      switch (animation) {
        case 13:
      	  animationClass = 'pt-page-moveToLeftEasing';
      	  break;
      	case 14:
      	  animationClass = 'pt-page-moveToRightEasing';
      	  break;
      	case 15:
      	  animationClass = 'pt-page-moveToTopEasing';
      	  break;
      	default:
      	  animationClass = 'pt-page-moveToLeftEasing';
      	  break;
      }

      $('.pt-page-' + current).css('z-index', 2).addClass(animationClass);
      
      $('.pt-page-' + next).animate({ scrollTop: 0 }, 1);
      $('.pt-page-' + next).addClass('pt-page-current');
      $('.pt-page-' + next).attr('hidden', false);

      $('.pt-page-' + current).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        // code to execute after animation ends
	$('.pt-page-' + current).removeClass('pt-page-current').removeClass(animationClass).css('z-index', 1);
        $('.pt-page-' + current).attr('hidden', true);
	$('.pt-page-' + current).animate({ scrollTop: 0 }, 1);

        //scroll
        if (scroll) {
          $('.pt-page').scrollTo(scroll);
        }
     
     });
}

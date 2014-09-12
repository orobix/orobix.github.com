
$(function() {
  $('[data-hash]').click(function() {
      console.log("scroll1");
      var target = $(this).data('hash');
      $('.pt-page').scrollTo(target);
  });
});

$.fn.scrollTo = function( target, options, callback ) {
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 0,
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

var PageTransitions = (function() {
  if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ) {
    ieTransition(); //TODO regexp ie < 10
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
      var current = next -1 ;

      if (next == 1) {
	  $('#menu').hide();
	  $('.socials').hide();
      } else {
      	  $('#menu').show();
      	  $('.socials').show();

	  $('#menu li').removeClass('pageSelected');
	  $('#menu .next' + current).addClass('pageSelected');
      }

      $('.pt-page').removeClass('pt-page-current');
      $('.pt-page-' + next).addClass('pt-page-current');
  });
}

function transition() {
  //init
  $('.pt-page-1').addClass('pt-page-current');

  //change page
  $('[data-animation]').on('click', function() {
      var animation = $(this).data('animation');
      var next = $(this).data('next') + 1;
      var current = $('.pt-page-current').data('page');
      var scroll = $(this).data('scroll');

      if (next == 1) {
	  $('#menu').hide();
	  $('.socials').hide();
      } else {
      	  $('#menu').show();
      	  $('.socials').show();

	  $('#menu li').removeClass('pageSelected');
	  $('#menu .next' + current).addClass('pageSelected');
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
      $('.pt-page-' + next).addClass('pt-page-current');

      $('.pt-page-' + current).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        // code to execute after animation ends
	$('.pt-page-' + current).removeClass('pt-page-current').removeClass(animationClass).css('z-index', 1);

	//scroll
	console.log('scroll', scroll);
	if (scroll) {
	  console.log('scroll2');
	  $('.pt-page').scrollTo(scroll);
	} /*else {
	  $('.pt-page').scrollTo(0);
	} scatta!*/
      });
  });
}

$('.nav a').on('click', function(){
    $(".navbar-toggle").click();
});

function getIEVersion() {
  var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
  return match ? parseInt(match[1]) : false;
}

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

$(function() {
  $('[data-hash]').click(function() {
    var target = $(this).data('hash');
    var paths = location.hash.split('/');

    if (paths.length == 1) {
      paths.push(target);
      location.hash = paths.join('/');
    }

    if (paths.length == 2) {
      paths[1] = target;
      location.hash = paths.join('/');
    }

    $('.pt-page').scrollTo('#' + target);


  });
});

function changePage(animation, next, current, scroll) {

  if (!current || current == next) return;

  if (next == 1) {
    $('#menu').hide();
    $('.socials').hide();
  } else {
    $('#menu').show();
    $('.socials').show();

    $('#menu li').removeClass('pageSelected');
    $('#menu .next' + (next-1)).addClass('pageSelected');
  }

  if (getIEVersion() && getIEVersion() < 10) {
    ieTransition(next, current, scroll);
  } else {
    transition(animation, next, current, scroll);
  }
}

function ieTransition(next, current, scroll) {
  $('.pt-page-' + next).attr('hidden', false);

  $('.pt-page').removeClass('pt-page-current');
  $('.pt-page-' + next).addClass('pt-page-current');

  //scroll
  if (scroll) {
    $('.pt-page').scrollTo(scroll);
  }
}

function transition(animation, next, current, scroll) {

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

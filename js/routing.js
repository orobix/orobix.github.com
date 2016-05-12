/* Routing */

//this gets called when hash == #design-development
/*routie('design-development', function() {
  var current = $('.pt-page-current').data('page');
  changePage(15, 4, current);
});*/

routie(':ptpage', function(ptpage) {
  var current = $('.pt-page-current').data('page');

  switch (ptpage) {

    case 'home':
      var next = 1;
      var animation = 15;
      break;

    case 'what-we-do':
      var next = 2;
      var animation = 13;
      break;

    case 'science-tech':
      var next = 3;
      if (current == 2) var animation = 15;
      if (current == 4) var animation = 14;
      if (current == 5) var animation = 13;
      break;

    case 'design-development':
      var next = 4;
      if (current == 2) var animation = 15;
      if (current == 3 || current == 4) var animation = 13;
      if (current == 5) var animation = 14;
      break;

    case 'customers-services':
      var next = 5;
      if (current == 2) var animation = 15;
      if (current == 3) var animation = 13;
      break;

    case 'products':
      var next = 8;
      var animation = 13;
      break;

    case 'team':
      var next = 6;
      var animation = 13;
      break;

    case 'customers':
      var next = 9;
      var animation = 13;
      break;

    case 'contact':
      var next = 7;
      var animation = 13;
      break;

    case 'blog':
      var next = 10;
      var animation = 13;
      break;

    default:
      var next = 1;
  }

  changePage(animation, next, current);
});

routie(':ptpage/:section', function(ptpage, section) {
  var current = $('.pt-page-current').data('page');

  switch (ptpage) {
    case 'what-we-do':
      var next = current;
      break;

    case 'science-tech':
      var next = 3;
      var animation = 15;
      break;

    case 'design-development':
      var next = 4;
      var animation = 15;
      break;

    case 'customers-services':
      var next = 5;
      var animation = 15;
      break;

    case 'team':
      var next = 6;
      var animation = 15;
      break;

    case 'blog':
      var next = 10;
      var animation = 13;
      break;

    default:
      var next = 1;
  }

  changePage(animation, next, current, '#' + section);

});

/***/

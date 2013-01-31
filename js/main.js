$(document).ready( function() {
  
  $('.section').hide();
  $('#footer').css("background-color", "#FFF");
  //setnewswidth();
 
  if (location.hash) {
    $('#nav > .item3_first, .item3, .item3_last').removeClass('half_opacity');
    $('#nav > .item3_first, .item3, .item3_last').not(document.getElementById('show_' + location.hash.replace('#',''))).addClass('half_opacity');
    $(location.hash + '_section').show();
    $('#footer').css("background-color", "#EEE");
  }
 
  $('.hoverable').mouseover(function() {
    $('#' + this.id + " > h3").addClass('hover');
    $('#' + this.id).find('span').addClass('hover half_opacity');
    
  }).mouseleave(function() {
    $('#' + this.id + " > h3").removeClass('hover');
    $('#' + this.id).find('span').removeClass('hover half_opacity');
    
  }).click(function() {
    $('.section').hide();
    $('#nav > .item3_first, .item3, .item3_last').removeClass('half_opacity');
    $('#nav > .item3_first, .item3, .item3_last').not(document.getElementById(this.id)).addClass('half_opacity');
    var page = this.id.replace('show_','');
    var section = page.concat('_section');
    $('#' + section).show();
    $('html, body').animate({scrollTop: $('#nav').offset().top + 2}, 100);
    $('#footer').css("background-color", "#EEE");
    location.hash = page;
  });
  
  //$(window).resize(function() {
  //  setnewswidth();
  //});
});

/*var setnewswidth = function() {
  var wW = $('#wrap').width();
  var twitW = $('#twit_cont').width();
  var freespace = wW * 0.06;
  var minwW = $('#wrap').css("min-width");
  $('#news_cont').css("width", wW - twitW - freespace);
}*/

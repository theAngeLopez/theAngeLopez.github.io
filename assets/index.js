$(document).ready(function() {
  let windowHeight = $(window).height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > windowHeight) {
      $('#navbar').addClass('navbar-fixed');
      $('main').addClass('navbar-fixed-main');
    }
    if ($(window).scrollTop() < windowHeight) {
      $('#navbar').removeClass('navbar-fixed');
      $('main').removeClass('navbar-fixed-main');
    }
  });
});

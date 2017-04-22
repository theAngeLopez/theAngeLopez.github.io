$(document).ready(function() {
  let windowHeight = $(window).height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > windowHeight) {
      $('#navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < windowHeight) {
      $('#navbar').removeClass('navbar-fixed');
    }
  });
});

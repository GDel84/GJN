jQuery(document).ready(function($) {
  'use strict';

  var owl = $("#owl-testimonials");
  
  owl.owlCarousel({
    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [600, 1],
    itemsMobile: false
  });

  var top_header = $('.parallax-content');
  top_header.css({ 'background-position': 'center center' });

  $(window).scroll(function() {
    var st = $(this).scrollTop();
    top_header.css({ 'background-position': 'center calc(50% + ' + (st * 0.5) + 'px)' });
  });

  $('.counter').each(function() {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    }, {
      duration: 8000,
      easing: 'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });

  // Fonction pour vérifier si l'écran est en mode mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }

  if (isMobile()) {
    $('.tabgroup > div').show();
    $('.tabs a').click(function(e) {
      e.preventDefault();
      var $this = $(this);
      $('.tabs a').removeClass('active');
      $this.addClass('active');
    });
  } else {
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
      e.preventDefault();
      var $this = $(this),
        tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();
    });
  }

  $('.projects-holder').mixitup({
    effects: ['fade', 'grayscale'],
    easing: 'snap',
    transitionSpeed: 400
  });

  $(".pop-button").click(function() {
    $(".pop").fadeIn(300);
  });

  $(".pop > span").click(function() {
    $(".pop").fadeOut(300);
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  // Code pour désactiver les liens en mode mobile
  document.addEventListener('DOMContentLoaded', function() {
    var isMobile = window.innerWidth <= 768;
    if (isMobile) {
      var links = document.querySelectorAll('.clickable-link');
      links.forEach(function(link) {
        link.addEventListener('click', function(event) {
          event.preventDefault();
        });
      });
    }
  });

});


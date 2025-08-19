// JavaScript for Samrat's Portfolio
// Handles WebFont loading, touch detection, mobile menu, animations, slider, and lightbox

// WebFont Loader: Loads Google Fonts
// EDIT: Update font families if needed
WebFont.load({
  google: {
    families: ["Droid Sans:400,700", "Inter:300,regular,500,600,700,800,900", "DM Sans:300,regular,500,600,700,800,900"]
  }
});

// Touch Detection: Adds classes for JavaScript and touch support
// No edits needed unless removing touch detection
!function(o,c){
  var n=c.documentElement,t=" w-mod-";
  n.className+=t+"js";
  ("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch");
}(window,document);

// Mobile Menu Toggle: Shows/hides mobile menu
// EDIT: Adjust selector or toggle behavior if needed
function toggleMenu() {
  $('.w-nav-menu').toggleClass('active');
}

// Document Ready: Runs when page is loaded
$(document).ready(function() {
  // Fade-in Animation: Uses IntersectionObserver to fade in elements
  // EDIT: Adjust threshold (0.1) or animation timing in CSS
  const elements = $('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('visible');
      }
    });
  }, { threshold: 0.1 });
  elements.each(function() {
    observer.observe(this);
  });

  // Slider Functionality: Controls client reviews slider
  // EDIT: Adjust autoplay delay (4000ms) or add features like dots
  let currentSlide = 0;
  const slides = $('.w-slide');
  const totalSlides = slides.length;

  function updateSlider() {
    $('.w-slider-wrap').css('transform', `translateX(-${currentSlide * 100}%)`);
  }

  // Left arrow click: Go to previous slide
  $('.w-slider-arrow-left').click(function() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateSlider();
  });

  // Right arrow click: Go to next slide
  $('.w-slider-arrow-right').click(function() {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateSlider();
  });

  // Autoplay: Automatically advances slider
  // EDIT: Change data-delay value in HTML or here (4000ms)
  if ($('.w-slider').data('autoplay')) {
    setInterval(function() {
      currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
      updateSlider();
    }, $('.w-slider').data('delay') || 4000);
  }

  // Lightbox Functionality: Displays YouTube video in modal
  // EDIT: Adjust styling or behavior of lightbox
  $('.w-lightbox').click(function(e) {
    e.preventDefault();
    const data = $(this).find('.w-json').html();
    const item = JSON.parse(data).items[0];
    const lightbox = $('<div>').css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }).html(item.html);
    $('body').append(lightbox);
    lightbox.click(function() {
      $(this).remove();
    });
  });
});
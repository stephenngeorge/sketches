$(function () {

  //configuration
  var currentSlide = 1;
  var naturalSpeed = 1500; //transition speed independant of buttons
  var clickSpeed = 800; //transition speed for button functionality
  var pause = 5000; //time variable for length of wait on each slide before transition
  var width = 600;
  var fadeSpeed = 500; //time variable for speed of fade in and fade out animations

  //cache the DOM
  var $imageSlider = $('#slideWindow');
  var $slideContainer = $imageSlider.find('#slideList');
  var $slides = $slideContainer.find('.slide');


  //automatic animation/transition for image slider; looping through list of images
  function startSlider () {
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-='+width}, naturalSpeed, function () {
        currentSlide++;
        if (currentSlide == $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  };

  function pauseSlider () {
    clearInterval(interval);
  };

  //call start and pause functions for so slideshow responds to hover state
  $imageSlider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);



  //functionality for prev and next buttons
  $('#next').click(function () {
    if (currentSlide == 5) {
      $slideContainer.css('margin-left', 0).animate({'margin-left': '-='+width}, clickSpeed);
      currentSlide = 2;
    } else {
      $slideContainer.animate({'margin-left': '-='+width}, clickSpeed, function () {
        currentSlide++;
        if (currentSlide == $slides.length) {
          $slideContainer.css('margin-left', 0);
          currentSlide = 1;
        }
      });
    }
  });
  $('#prev').click(function () {
    if (currentSlide == 1) {
      $slideContainer.css('margin-left', -(($slides.length-1)*width)).animate({'margin-left': '+=450'}, clickSpeed);
      currentSlide = ($slides.length-1);
    } else {
      $slideContainer.animate({'margin-left': '+='+width}, clickSpeed, function () {
        currentSlide--;
        if (currentSlide == 1) {
          $slideContainer.css('margin-left', -(($slides.length-1)*width));
          currentSlide = $slides.length;
        }
      });
    }
  });


  //functionality for navigation buttons underneath main slider window
  $('.navButton').click(function () {
    pauseSlider();
    var slideNum = this.id;
    currentSlide = slideNum;
    $slideContainer.fadeOut(fadeSpeed).animate({'margin-left': -((currentSlide-1)*width)}, 0).fadeIn(fadeSpeed);
    startSlider();
  });


  startSlider();

});

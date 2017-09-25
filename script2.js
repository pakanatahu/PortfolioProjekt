//settings for slider
    var width = 620;
    var sliderSpeed = 1000;
    var currentSlide = 1;

    //cache DOM elements
    var slideshow = $('.slideshow');
    var slideContainer = $('.images', slideshow);
    var images = $('.image', slideshow);


    var interval;

    function startSlider() {
        interval = setInterval(function() {
            slideContainer.animate({'margin-left': '-='+width}, sliderSpeed, function() {
                if (++currentSlide === images.length) {
                    currentSlide = 1;
                    slideContainer.css('margin-left', 0);
                }


            });
        }, 5000);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});

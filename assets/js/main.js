$(document).ready(() => {
    ////// STICKY HEADER MENU ON SCROLL
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".main-header").addClass("sticky");
        } else {
            $(".main-header").removeClass("sticky");
        }
    });

    /// nav bar toggler icons
    $(".nav-toggler").click(function () {
        $(".mobile-menu").toggleClass("active");
        $(this).toggleClass("active");
    });


    // owl carousel TESTIMONIAL PRODUCT SLIDER 
var testSlider = $('#test-slider');
    testSlider.owlCarousel({
      loop: true,
      margin: 16,
      items: 2,
      dots: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        769: {
          items: 1,
        },
        992: {
          items: 2,
        },
      },
    });



    testSlider.owlCarousel();
    // Go to the next item
    $("#next-btn").click(function () {
        testSlider.trigger("next.owl.carousel");
    });
    // Go to the previous item
    $("#prev-btn").click(function () {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      testSlider.trigger("prev.owl.carousel");
    });



    //  document ends here 
})
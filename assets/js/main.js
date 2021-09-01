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
$('#test-slider').owlCarousel({
    loop:true,
    margin:16,
    items: 2,
    dots: true,
    nav: false,
    responsive:{
        0:{
            items: 1
        },
        769:{
            items: 1,
        },
        992:{
            items:2,
        }
    }
});
})
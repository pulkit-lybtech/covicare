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
    items: 2,
    margin:10,
    nav:false,
    dots: true,
    
    // responsive:{
    //     0:{
    //         dots: true
    //     },
    //     769:{
    //         dots: false
    //     },
    //     992:{
    //         items:2,
    //         dots: false
    //     }
    // }
});
})
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
})
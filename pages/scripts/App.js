$( document ).ready(function() {
    // $(function() {
    //     // this will get the full URL at the address bar
    //     var url = window.location.href;
    //
    //     // passes on every "a" tag
    //     $("#navigation a").each(function() {
    //         // checks if its the same on the address bar
    //         if (url.indexOf(this.href) != -1) {
    //             $(this).closest("li").addClass("current");
    //         }
    //     });
    // });

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        center:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        autoplaySpeed: 1200,
        navSpeed:1200,
        dragEndSpeed: 1200,
        navContainer: '#customNav'
    });
});
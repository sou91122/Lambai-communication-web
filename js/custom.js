// projects area
$('#news-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2400,
    dotsSpeed: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


//owl carousel
$('.event-carousel').owlCarousel({
    center: true,
    items: 4,
    margin: 10,
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    dotsSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        500: {
            items: 2,
        },
        1200: {
            items: 4
        }
    }
});



$('.card-deck a').fancybox({
    caption : function( instance, item ) {
        return $(this).parent().find('.card-text').html();
    }
});







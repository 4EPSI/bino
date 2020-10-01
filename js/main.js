// Mobile menu
$('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header').length) {
        $('.burger').removeClass('active');
        $('.menu').removeClass('active');
    }
    e.stopPropagation();
});


// Scroll to section
$('body').on('click', '.go_to', function () {
    var scroll_el = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(scroll_el).offset().top - 80
    }, 1000);
    $('.burger').removeClass('active');
    $('.menu').removeClass('active');
    return false;
});

// Header
var viewportheight = $( window ).height(),
    currentTop = $(this).scrollTop(),
    header = $('.header').outerHeight();
    
// Header changing on Load
if (currentTop >= header) {
    $('.header').addClass('active');
} else {
    $('.header').removeClass('active');
}
// Header changing on Scroll
$(document).scroll(function(){
    viewportheight = $( window ).height();
    currentTop = $(this).scrollTop();
    if (currentTop >= header) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});

// Top slider
$('.top_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    mouseDrag: false,
    items: 1,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
});

// Case slider
$('.creative_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    mouseDrag: false,
    items: 1
});


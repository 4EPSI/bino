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
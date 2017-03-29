$(document).ready(function () {

    /*header mobile menu*/
    var pull = $('#burger'),
        menu = $('.header__nav');

    $(pull).on('click', function (event){ 
        event.preventDefault();
        if (pull.hasClass('show')) {
            pull.removeClass('show');
            menu.slideUp('fast');
        } else {
            pull.addClass('show');
            menu.slideDown('fast');
        }
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.header__navigation').length != 1) {
            $('.header__nav').slideUp('fast');
            $('#burger').removeClass('show');
        }
    });
    /*close header mobile menu*/
});
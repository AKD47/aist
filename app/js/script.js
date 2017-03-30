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
    if(window.innerWidth < 670){
        $(document).on('click', function (e) {
            if ($(e.target).closest('.header__navigation').length != 1) {
                $('.header__nav').slideUp('fast');
                $('#burger').removeClass('show');
            }
        });
    }     
    /*close header mobile menu*/

    /*top-customer slider*/
    $('#top-customer-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    /*close top-customer slider*/

    /*top-courier slider*/
    $('#top-courier-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    /*close top-courier slider*/
});
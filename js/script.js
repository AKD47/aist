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

    /*scroll*/
    $(document).on('click', '.scrollTo', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    /*close scroll*/
    
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

    /*show single proposal map*/
    $(document).on('click', '#single-item-showmap', function (event) {
       event.preventDefault();
       var mapBlock = $(this).next('.single__item--map'),
            map = new Map();
        if(mapBlock.hasClass('open')){
            mapBlock.removeClass('open').slideUp('500');
        } else{
            mapBlock.addClass('open').slideDown('500', function () {
                $('#map').empty();
                map.init({
                    selector: '#map',
                    center: $('.concreate-adress').html(),
                    zoom: 10,
                    placemarks: [
                        {
                            address: $(".concreate-adress").html(),
                            options: [
                                {key: 'draggable', value: false},
                                {key: 'iconLayout', value: 'default#image'},
                                {key: 'iconImageHref', value: 'img/icons/map-marker-icon.png'}
                            ],
                            properties: [
                                {key: 'balloonContentHeader', value: $('.map-placemarks-title').html()}
                            ]
                        }
                    ]
                });
            });           
        }
    });
    /*close single proposal map*/

    /*single proposal slider*/
    $('.single__item--carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single__item--nav'
    });
    $('.single__item--nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.single__item--carousel',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    /*close single proposal slider*/

    /*proposals filter fixed*/
    var filter = $('#prop-filter');
    if (filter.length > 0) {
        var stockElementPosition = filter.offset().top;
        $(window).scroll(function () {
            fixedScroll(filter, stockElementPosition, $('.footer'));
        });
    }
    /*close proposals filter fixed*/

});

function fixedScroll(element, elementPosition, blockElement) {//функция фиксированногоблока, с селекторами элемента, его позиционирования и преграждающего блока
    var top = $(document).scrollTop(),
        blockingElement = blockElement.offset().top,
        height = element.outerHeight();//высота элемента, включающая внутренние и внешние отступы
    if (window.innerWidth > 770) {
        if (top > elementPosition && top < blockingElement - height) {
            element.addClass('fixed').removeAttr("style");
        }
        else if (top > blockingElement - height) {
            element.removeClass('fixed').css({'position': 'absolute', 'bottom': '50px', 'right': '0'});
        }
        else {
            element.removeClass('fixed');
        }
    }
}

/*single proposal map*/

    /*var map = new Map();
    map.init({
        selector: '#map',
        center: $('.concreate-adress').html(),
        zoom: 10,
        placemarks: [
            {
                address: $(".concreate-adress").html(),
                options: [
                    {key: 'draggable', value: false},
                    {key: 'iconLayout', value: 'default#image'},
                    {key: 'iconImageHref', value: 'img/icons/map-marker-icon.png'}
                ],
                properties: [
                    {key: 'balloonContentHeader', value: $('.map-placemarks-title').html()}
                ]
            }
        ]
    });*/

/*close single proposal map*/


$(document).ready(function () {

    /*header mobile menu*/    
    $(document).on('click', '#burger', function (event){
        
        var pull = $('#burger'),
            menu = $('.header__nav');
        event.preventDefault();
        if (pull.hasClass('show')) {
            pull.removeClass('show');
            menu.slideUp('fast');
        } else {
            pull.addClass('show');
            menu.slideDown('fast');
        }
    });
    /*if(window.innerWidth < 670){
        $(document).on('click', function (e) {
            if ($(e.target).closest('.header__navigation').length != 1) {
                $('.header__nav').slideUp('fast');
                $('#burger').removeClass('show');
            }
        });
    }*/
    /*close header mobile menu*/

    /*cabinet header menu*/    
    $(document).on('click', '#cabinet-trigger', function (event){

        var cabinetTrigger = $('#cabinet-trigger'),
            cabinetMenu = $('.header__cabinet > ul');
        
        event.preventDefault();
        if (cabinetTrigger.hasClass('show')) {
            cabinetTrigger.removeClass('show');
            cabinetMenu.slideUp('fast');
        } else {
            cabinetTrigger.addClass('show');
            cabinetMenu.slideDown('fast');
        }
    });
    /*if(window.innerWidth < 670){
        $(document).on('click', function (e) {
            if ($(e.target).closest('.header__cabinet').length != 1) {
                $('.header__cabinet > ul').slideUp('fast');
                $('#cabinet-trigger').removeClass('show');
            }
        });
    }*/
    /*close cabinet header menu*/

    /*show cabinet tariff description*/
    $(document).on('click', '.cabinet__packages--about', function (event) {
        event.preventDefault();
        var target = $(this).attr('href'),
            targetBlock = $(target);

        if ($(this).hasClass('open')) {
            targetBlock.slideUp();
            $(this).removeClass('open');
        } else {
            $('.cabinet__packages--about').removeClass('open');
            $('.cabinet__packages--hover-block').slideUp();
            targetBlock.slideDown();
            $(this).addClass('open');
        }
    });
    /*close script*/

    /*add form in proposal form*/
    $('#add-form-foto').fileinput();
    /*close add form in proposal form*/

    /*add form datapicker*/
    $('#add-form-datapicker').datepicker({
        minDate: new Date(),//только от даты сегодняшней
        range: true,//возможность выбрать диапазон дат
        toggleSelected: false//для того, чтобы иметь возомжность выбрать одну и ту же дату
    });
    /*close add form datapicker*/

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
    
    /*proposal filter from list*/
    $(document).on('click', '#prop-filter-search-from, #prop-filter-search-to', function (event) {
       var filterList = $(this).next('.prop-filter__from');
       if($(this).hasClass('show')){
           $(this).removeClass('show');
           filterList.slideUp('400');
       } else {
           $('#prop-filter-search-from, #prop-filter-search-to').removeClass('show');
           $('.prop-filter__from').slideUp('400');
           $(this).addClass('show');
           filterList.slideDown('400');
       }
    });
    $(document).on('click', '.prop-filter__from a', function (event) {
        event.preventDefault();
        var optionName = $(this).text(),
            optionPlace = $(this).closest('#prop-filter-search-form').find('.prop-filter__field.show');       
        optionPlace.val(optionName);//меняем имя
        $('#prop-filter-search-from, #prop-filter-search-to').removeClass('show');
        $('.prop-filter__from').slideUp('400');
    });
    /*close proposal filter from list*/

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


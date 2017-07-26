$(document).ready(function () {

    //////ФИЛЬТР ПОИСКА ОБЪЯВЛЕНИЙ
    $('.region').click(function (event) {//при клике на элемент с классом "регион"
        var RegionList = $(this).next('.region-list');//находим ближайший список регионов
        if (RegionList.is(':visible')) {//при видимости списка регионов
            $('.city-list').hide('slow');//мы скрываем все элементы с нужным классом
        }
        RegionList.slideToggle();//показываем нужный нам список       
        return false;
    });
    $('.russia').click(function (event) {//при клике на элемент с классом "Россия"
        var RussiaList = $(this).next('.russia-list');//находим ближайший список регионов
        RussiaList.slideToggle();//показываем его 
        return false;
    });

    $('.city').click(function (event) {
        var CityList = $(this).next('.city-list');
        $('.region-list').hide('slow');
        if(CityList.is(':visible')){
            CityList.hide("slow");
        } else {
            CityList.slideToggle();
        }
    });

    /*$('.republic').on('click', function (event) {
        $('.city').css({display: "inline-block"});
        $('.city-list').slideToggle();
        $('.region-list').css({display: "none"});
        return false;

    });*/
    jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var city = $('.city'); // тут указываем ID элемента
            //var region = $(".region"); // тут указываем ID элемента
            if (!city.is(e.target) // если клик был не по нашему блоку
                && city.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.city-list').hide('slow'); // скрываем его
            }
            /*if (!region.is(e.target) // если клик был не по нашему блоку
                && region.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.region-list').hide("slow"); // скрываем его
            }*/
        });
    });

    /*$("body").click(function (e) {
        if ($(".region-list, .russia-list, .city-list").is(':visible')) {
            $(".region-list, .russia-list, .city-list").hide("slow");
        }
        console.log('body');
    });*/


    /*$(document).on('click', '.selectRegion', function(){*/
    $('.selectRegion').click(function () {
        var City = $(this).closest('.region-list').next('.city'),
            CityList = $(this).closest('.region-list').next('.city').find('.city-list'),
            regionId = $(this).attr('reg-id');
            regionName = $(this).text();
        console.log( City );
        $("input[name='cityFilter']").val('');
        $('.textSelectCity').text('Выберите город');
        $('.textSelectRegion').text(regionName);
        $('input[name="regionFilter"]').val(regionId);
        City.css({display: "inline-block"});
        CityList.slideToggle();
        // $('.city').css({display: "inline-block"});
        // $('.city-list').slideToggle();
        $('.region-list').css({display: "none"});
        /*$.ajax({
            type: 'POST',
            url: "/site/show_city_list",
            data: 'id=' + regionId,
            success: function (data) {
                $('.city-list').html(data);
                $('.city').css({display: "inline-block"});
                $('.city-list').slideToggle();
                $('.region-list').css({display: "none"});
            }
        });*/
        return false;
    });

    $(document).on('click', '.selectCity', function () {
        var idCity = $(this).attr('city-id');
        console.log(idCity);
        var nameCity = $(this).text();
        $("input[name='cityFilter']").val(idCity);
        $('.textSelectCity').text(nameCity);
        console.log('city');

        $('.city').css({display: "inline-block"});
        //$('.city-list').slideToggle();
        $('.region-list').css({display: "none"});
        return false;
    });


});
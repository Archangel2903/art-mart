$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }

    $('body').removeClass('loaded');

    /* menu */
    if ($('body').hasClass('web') && $(window).width() > 991) {
        $('.header-menu__list-item').hover(function () {
            $(this).find('.header-menu__dropdown-box').addClass('opened');
        }, function () {
            $(this).find('.header-menu__dropdown-box').removeClass('opened');
        });
    } else {
        $('.header-menu__dropdown-box').slideUp();

        $('.open-menu-js').on('click', function (e) {
            $('body').addClass('open-popup');
            $(this).next().fadeToggle(500);
            e.stopPropagation();
        });

        $('.header-menu__list-item').on('click', function () {
            if (!$(this).hasClass('active')) {
                $('.header-menu__list-item').removeClass('active').find('.header-menu__dropdown-box').slideUp(500);
                $(this).toggleClass('active').find('.header-menu__dropdown-box').slideDown(500);
            } else {
                $('.header-menu__list-item').removeClass('active').find('.header-menu__dropdown-box').slideUp(500);
            }
        });

        $('.close-menu-js').on('click', function (e) {
            $('body').removeClass('open-popup');
            $(this).parent().fadeToggle(500);
            $('.header-menu__list-item').removeClass('active').find('.header-menu__dropdown-box').slideUp(500);
            e.stopPropagation();
        });

        $('.header-menu__list').on('click', function (e) {
            e.stopPropagation();
        });
    }
});

/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!( 'innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
}

/* viewport width */
$(function () {
    /* placeholder*/
    /*$('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });*/
    /* placeholder*/

    /* components */
    /*
        if ($('.fancybox').length) {
            $('.fancybox').fancybox({
                margon: 10,
                padding: 10
            });
        }

        if ($('.scroll').length) {
            $(".scroll").mCustomScrollbar({
                axis: "x",
                theme: "dark-thin",
                autoExpandScrollbar: true,
                advanced: {autoExpandHorizontalScroll: true}
            });
        }
    */
    /* components */

    if ($('.slick-slider').length) {
        $('.popular-block__slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1301,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 901,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                        dots: true
                    }
                },
                {
                    breakpoint: 741,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        dots: true
                    }
                }/*,
                {
                    breakpoint: 600,
                    settings: "unslick"
                }*/
            ]
        });

        $('#product-main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '#product-nav-slider'
        });

        $('#product-nav-slider').slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            asNavFor: '#product-main-slider'
        });

        $('.popular-block__slider .slick-prev').html('<span class="si arrow-left-ico"></span>');
        $('.popular-block__slider .slick-next').html('<span class="si arrow-right-ico"></span>');
    }

    if ($('.styled').length) {
        $('.styled').styler();
    }

    /**
     * Auto Placement Items
     * @param itemsWrap - items parent
     * @param columns - number of column items
     */
    function ap(itemsWrap, columns) {
        var containerInnerSize = itemsWrap.width(),
            placementItems = itemsWrap.children(),
            marginDefault = placementItems.filter(':first-child').css('margin-bottom'),
            itemsNotMargin = placementItems.filter(':nth-child(' + columns + 'n + ' + columns + ')'),
            placementItemsSize = placementItems.innerWidth(),
            result = containerInnerSize - placementItemsSize * columns,
            itemsQuantity = placementItems.length,
            lastItemsQuantity = (itemsQuantity - columns);

        placementItems.css({'margin-right': Math.floor(result / (columns - 1)), 'margin-bottom': marginDefault}).slice(lastItemsQuantity).css({'margin-bottom': 0});

        itemsNotMargin.css({'margin-right': 0});
    }

    /* init ap function */
    var $thisContainer = $('.autoplacement-js');

    $(window).load(function () {
        if ($(window).innerWidth() > 640) {
            ap($thisContainer, 3);
        } else if ($(window).innerWidth() <= 640 && $(window).innerWidth() > 480) {
            ap($thisContainer, 2);
        } else if ($(window).innerWidth() <= 480 && $(window).innerWidth() > 320) {
            ap($thisContainer, 1);
        }
    }).resize(function () {
        if ($(window).innerWidth() > 640) {
            ap($thisContainer, 3);
        } else if ($(window).innerWidth() <= 640 && $(window).innerWidth() > 480) {
            ap($thisContainer, 2);
        } else if ($(window).innerWidth() <= 480 && $(window).innerWidth() > 320) {
            ap($thisContainer, 1);
        }
    });

    $('.callback-js').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('open-modal');
        $('.popup').addClass('active').find('.callback-form').fadeIn(250);
        e.stopPropagation();
    });

    $('.popup__modal').on('click', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function () {
        $('body').removeClass('open-modal');

        $('.popup').removeClass('active').find('.popup__modal').fadeOut(250).find('form input').val('');
    });

    $('.close-popup').on('click', function () {
        $('body').removeClass('open-modal');

        $('.popup').removeClass('active').find('.popup__modal').fadeOut(250).find('form input').val('');
    });

    $('.sidebar-toggle').on('click', function () {
        $(this).next().toggleClass('opened');
    });
});

var handler = function () {
    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});

    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }
}
$(window).bind('load', handler);
$(window).bind('resize', handler);
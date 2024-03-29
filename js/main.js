$(function(){

    let $advantages;

    $advantages = ($(window).width()-2326)/2;


    $(document).ready(function() {
        $('.advantages__bg').css("transform", " translateX(" + $advantages + "px)");
        $('.team-bg').css("transform", " translateX(", $advantages + "px)");
    });

    window.onresize = () =>{
        $advantages = ($(window).width()-2326)/2;
        $('.advantages__bg').css("transform", " translateX(" + $advantages + "px)");
        $('.team-bg').css("transform", " translateX(", $advantages + "px)");
    }

    let $slider = ($(window).width()-744)/2;
    let $comments = ($(window).width()-340)/2;

    if ($(window).width() <= 910){
        $slider = ($(window).width()-680)/2;
    }
    if ($(window).width() <= 730){
        $slider = ($(window).width()-620)/2;
        $comments = ($(window).width()-300)/2;
    }
    if ($(window).width() <= 620){
        $slider = ($(window).width()-310)/2;
    }
    if ($(window).width() <= 375){
        $slider = ($(window).width()-280)/2;
        $comments = ($(window).width()-276)/2;
    }

    $('.blog__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: $slider + 'px'
                }
            },
            {
                breakpoint: 621,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: $slider + 'px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: $slider + 'px'
                }
            }
        ]
    });

    $('.blog__item').hover(function () {
        $( ".blog__item-title", this ).addClass( "active" );
    }, function () {
        $( ".blog__item-title", this ).removeClass( "active" );
    })





    $('.price__item').hover(function () {
        $( ".price__item-title", this ).addClass( "active" );
        $( ".price__item-subtitle", this ).addClass( "active" );
        $( ".price__item-price__inner", this ).addClass( "active" );
        $( ".price__item-benefits", this ).addClass( "active" );
        $( ".price__btn", this ).addClass( "active" );
        $(this).addClass( "active" );
    }, function () {
        $( ".price__item-title", this ).removeClass( "active" );
        $( ".price__item-subtitle", this ).removeClass( "active" );
        $( ".price__item-price__inner", this ).removeClass( "active" );
        $( ".price__item-benefits", this ).removeClass( "active" );
        $( ".price__btn", this ).removeClass( "active" );
        $(this).removeClass( "active" );
    })


    if ($(window).width() > 730){
        $(".comments__stars").rateYo({
            fullStar: true,
            readOnly: true,
            normalFill: "#F5F5F5",
            ratedFill: "#F3CD03",
            starSvg: '<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3371 6.58663C18.2795 6.41682 18.1733 6.26761 18.0319 6.15742C17.8904 6.04723 17.7197 5.98089 17.541 5.96658L12.3118 5.55107L10.049 0.542056C9.97692 0.380725 9.8597 0.243699 9.71148 0.147514C9.56326 0.0513295 9.39037 9.71158e-05 9.21368 1.37932e-07C9.03699 -9.684e-05 8.86404 0.0509458 8.71571 0.146968C8.56739 0.24299 8.45002 0.379887 8.37778 0.541138L6.11496 5.55107L0.885812 5.96658C0.710121 5.9805 0.54216 6.04474 0.402022 6.15161C0.261884 6.25849 0.155504 6.40348 0.0956089 6.56923C0.0357137 6.73498 0.0248393 6.91448 0.064287 7.08625C0.103735 7.25802 0.191834 7.41479 0.318045 7.5378L4.18235 11.3049L2.81567 17.2229C2.77417 17.402 2.78748 17.5895 2.85385 17.761C2.92022 17.9324 3.0366 18.08 3.18789 18.1845C3.33918 18.2891 3.51838 18.3457 3.70226 18.3471C3.88613 18.3485 4.06618 18.2946 4.21904 18.1924L9.21338 14.8628L14.2077 18.1924C14.364 18.2961 14.5482 18.3495 14.7357 18.3454C14.9232 18.3413 15.1049 18.2799 15.2565 18.1694C15.408 18.0589 15.5221 17.9047 15.5834 17.7274C15.6446 17.5502 15.6501 17.3584 15.5992 17.1779L13.9215 11.3076L18.0821 7.56348C18.3545 7.31766 18.4545 6.93426 18.3371 6.58663Z" fill="#none"/></svg>',
            starWidth: "18px"
        });
    }
    else if ($(window).width() <= 730){
        $(".comments__stars").rateYo({
            fullStar: true,
            readOnly: true,
            normalFill: "#F5F5F5",
            ratedFill: "#F3CD03",
            starSvg: '<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3371 6.58663C18.2795 6.41682 18.1733 6.26761 18.0319 6.15742C17.8904 6.04723 17.7197 5.98089 17.541 5.96658L12.3118 5.55107L10.049 0.542056C9.97692 0.380725 9.8597 0.243699 9.71148 0.147514C9.56326 0.0513295 9.39037 9.71158e-05 9.21368 1.37932e-07C9.03699 -9.684e-05 8.86404 0.0509458 8.71571 0.146968C8.56739 0.24299 8.45002 0.379887 8.37778 0.541138L6.11496 5.55107L0.885812 5.96658C0.710121 5.9805 0.54216 6.04474 0.402022 6.15161C0.261884 6.25849 0.155504 6.40348 0.0956089 6.56923C0.0357137 6.73498 0.0248393 6.91448 0.064287 7.08625C0.103735 7.25802 0.191834 7.41479 0.318045 7.5378L4.18235 11.3049L2.81567 17.2229C2.77417 17.402 2.78748 17.5895 2.85385 17.761C2.92022 17.9324 3.0366 18.08 3.18789 18.1845C3.33918 18.2891 3.51838 18.3457 3.70226 18.3471C3.88613 18.3485 4.06618 18.2946 4.21904 18.1924L9.21338 14.8628L14.2077 18.1924C14.364 18.2961 14.5482 18.3495 14.7357 18.3454C14.9232 18.3413 15.1049 18.2799 15.2565 18.1694C15.408 18.0589 15.5221 17.9047 15.5834 17.7274C15.6446 17.5502 15.6501 17.3584 15.5992 17.1779L13.9215 11.3076L18.0821 7.56348C18.3545 7.31766 18.4545 6.93426 18.3371 6.58663Z" fill="#none"/></svg>',
            starWidth: "14px"
        });
    }



    $('.comments__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 911,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: $comments + 'px'
                }
            }
        ]
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__nav').slideToggle()
    })

    let $price = 0;

    $('.price__btn--more').on('click', function () {
        $('.price__item').toggleClass('more')
        if($price === 0){
            $('.price__btn--more').text('Скрыть тарифы')
            $price = 1
        }
        else{
            $('.price__btn--more').text('Показать ещё')
            $price = 0
        }
    })


    if ($(window).width() <= 480) {
        $('.footer__item-title').on('click', function () {
            $(this).siblings('ul').toggleClass('active')
            $(this).toggleClass('active')
        })
    }

    let $scroll;
    $scroll = 100;
    if ($(window).width() <= 730) {
        $scroll = 50
    }
    if ($(window).width() <= 480) {
       $scroll = 10
    }

    $(document).ready(function(){
        $(".header__menu-list").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top - $scroll;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

  
});
$(function(){

    let $advantages;

    $advantages = ($(window).width()-2326)/2;


    $(document).ready(function() {
        $('.advantages__bottom').css("margin-left", $advantages + "px");
        $('.team-bg').css("left", $advantages + "px");
    });

    $('.blog__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
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
  
});
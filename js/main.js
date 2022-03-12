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
  
});
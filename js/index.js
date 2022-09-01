$(document).ready(function() {

    // 스크롤 시 네비게이션 고정
    var nav_offset = $( '#nav' ).offset();
    $( window ).scroll( function() {
        if ( $( document ).scrollTop() > nav_offset.top ) {
            $( '#nav' ).addClass( 'scroll_fix' );
        }
        else {
            $( '#nav' ).removeClass( 'scroll_fix' );
        }
    });

    // 네비게이션 펼침 효과
    $('.depth_1 > li').mouseenter(function(){
        $(this).children('.depth_2').stop().slideDown();
    })
    $('.depth_1 > li').mouseleave(function(){
        $(this).children('.depth_2').stop().slideUp(0);
    })

    // 호버 시 신메뉴 이미지 변경
    $('.product').mouseover(function() {
        $(this).attr('src', $(this).attr('src').replace('_no','_back'));
    });
    $('.product').mouseout(function() {
        $(this).attr('src', $(this).attr('src').replace('_back', '_no'));
    });

    // 신메뉴 곡선 텍스트
    var circles = document.getElementsByClassName("new_name");           
    new CircleType(circles.item(0)).radius(234);
    new CircleType(circles.item(1)).radius(259);
    new CircleType(circles.item(2)).radius(159);
    new CircleType(circles.item(3)).radius(159);
    new CircleType(circles.item(4)).radius(184);
    new CircleType(circles.item(5)).radius(184);
    new CircleType(circles.item(6)).radius(134);
    new CircleType(circles.item(7)).radius(109);

    // for (var i = 0; i < circles.length; i++) {
        // var circleType = new CircleType(circles.item(i));
        // circleType.radius(circleType.element.offsetWidth / 2);
    // }

    
    // 좌측 배너 고정
    $(window).scroll(function () {
        var rightSec = $('.article_1').offset().top;
        var rightE = rightSec + $('.article_1').height();

        var leftBannerH = $(".article_1 .main_banner").height();
        var sectionBottom = rightE - leftBannerH

        var scrollTop = $(window).scrollTop()
        
        if (scrollTop >= rightSec && scrollTop <= rightE) {
            $('.main_banner').addClass('fixed');
        } else {
            $('.main_banner').removeClass('fixed');
        }
        
        if( scrollTop >= sectionBottom ) {
            $('.main_banner').addClass('absolute');
        } else {
            $('.main_banner').removeClass('absolute');
        }
    });
});
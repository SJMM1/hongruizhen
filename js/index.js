// 호버 시 신메뉴 이미지 변경
$('.product').mouseover(function() {
    if($('html').hasClass('pc')){
        $(this).attr('src', $(this).attr('src').replace('_no','_back'));
    }
});
$('.product').mouseout(function() {
    if($('html').hasClass('pc')){
        $(this).attr('src', $(this).attr('src').replace('_back', '_no'));
    }
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



$(window).scroll(function () {
    if($('html').hasClass('pc')){
        // 좌측 배너 고정
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

        // 뉴스 효과
        var news_top = $('.article_3').offset().top - $(window).height()/2;
        if(scrollTop >= news_top){
            $('.article_3').addClass('on');
        } else {
            $('.article_3').removeClass('on');
        }
    }
});

// 배너 슬라이드
$('.slide-group').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<button class="leftarr"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="rightarr"><i class="fas fa-angle-right"></i></button>'
});   

// 이벤트 슬라이드
$('.slide-group2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:'<img class="leftarr" src="./images/pre.png" alt="이전으로">',
    nextArrow:'<img class="rightarr" src="./images/next.png" alt="다음으로">',
    responsive: [ // 반응형
        {  
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows : false
            } 
        }
    ]
});





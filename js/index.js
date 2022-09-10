init();
$(window).on('resize', function(){
    init();
})

// 사이즈 초기화
function init(){
    var win_Width = $(window).width(); 
    if(win_Width > 1024) {
        $('html').removeClass('mobile').addClass('pc')
    }
    else if (win_Width <= 1024) {
        $('html').removeClass('pc').addClass('mobile')
    }
}   


// PC
if ($('html').hasClass('pc')) {
    // 네비게이션 펼침 효과
    $('.depth_1 > li').mouseenter(function(){
        $(this).children('.depth_2').stop().slideDown();
    })
    $('.depth_1 > li').mouseleave(function(){
        $(this).children('.depth_2').stop().slideUp(0);
    })

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

    // 호버 시 신메뉴 이미지 변경
    $('.product').mouseover(function() {
        $(this).attr('src', $(this).attr('src').replace('_no','_back'));
    });
    $('.product').mouseout(function() {
        $(this).attr('src', $(this).attr('src').replace('_back', '_no'));
    });

}

// MOBILE
if ($('html').hasClass('mobile')) {
    // 네비게이션 펼침
    $('#header .open_nav').on('click', function(){
        $('#nav').toggleClass('on')
        
        if($(this).find('i').hasClass('fa-bars')){
            $(this).find('i').removeClass('fa-bars').addClass('fa-xmark')
            $('html').css({overflowY:'hidden'})             
        }
        else{
            $(this).find('i').removeClass('fa-xmark').addClass('fa-bars')
            $('html').css({overflowY:'auto'})
        }       
    })

    $('.depth_1 > li').on('click', function(){
        $(this).children('h2').toggleClass('on');
        $(this).siblings().find('h2').removeClass('on');
        $(this).children('.depth_2').stop().slideToggle();
        $(this).siblings().find('.depth_2').stop().slideUp();
        return false;
    })
}

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
    prevArrow:'<img class="leftarr" src="./images/dis_pre.png" alt="이전으로">',
    nextArrow:'<img class="rightarr" src="./images/next.png" alt="다음으로">',
    responsive: [ // 반응형
        {  
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          } 
        }
      ]
});

$('.article_2 .slick-arrow').on('click', function(){
    if($('.article_2 .leftarr').hasClass('slick-disabled')) {
        $('.article_2 .leftarr').attr('src', './images/dis_pre.png')
    } else { 
        $('.article_2 .leftarr').attr('src', './images/pre.png') 
    }

    if($('.article_2 .rightarr').hasClass('slick-disabled')) {
        $('.article_2 .rightarr').attr('src', './images/dis_next.png')
    } else { 
        $('.article_2 .rightarr').attr('src', './images/next.png') 
    }       
})


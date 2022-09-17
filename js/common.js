init();
$(window).on('resize', function(){
    init();
})

// 사이즈 초기화
function init(){
    var win_Width = $(window).width()+17;
    if(win_Width > 1024) {
        $('html').removeClass('mobile').addClass('pc')
    }
    else if (win_Width <= 1024) {
        $('html').removeClass('pc').addClass('mobile')
    }
}   

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

// 네비게이션
$('.depth_1 > li').mouseenter(function(){
    if($('html').hasClass('pc')){
        $(this).children('.depth_2').stop().slideDown();
    }
})
$('.depth_1 > li').mouseleave(function(){
    if($('html').hasClass('pc')){
        $(this).children('.depth_2').stop().slideUp(0);
    }
})

$('.depth_1 > li').on('click', function(){
    if($('html').hasClass('mobile')){
        $(this).children('h2').toggleClass('on');
        $(this).siblings().find('h2').removeClass('on');
        $(this).children('.depth_2').stop().slideToggle();
        $(this).siblings().find('.depth_2').stop().slideUp();
    }
}); 

$('#header .open_nav').on('click', function(){
    $('#nav').toggleClass('on')

    $('.depth_1 > li').siblings().find('h2').removeClass('on');
    $('.depth_1 > li').siblings().find('.depth_2').stop().slideUp();
    
    if($(this).find('i').hasClass('fa-bars')){
        $(this).find('i').removeClass('fa-bars').addClass('fa-xmark')
        $('html').css({overflowY:'hidden'})             
    }
    else{
        $(this).find('i').removeClass('fa-xmark').addClass('fa-bars')
        $('html').css({overflowY:'auto'})
    } 
})

// 퀵메뉴
var quick = parseInt($(".quickmenu").css("bottom"));
$(window).scroll(function() {
    var position = $(window).scrollTop();
    $(".quickmenu").stop().animate({"bottom": -position+quick+"px"},500);
});

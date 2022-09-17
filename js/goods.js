// 탭이동
$('.goods_cate li').on('click', function(){
    var activeTab = $(this).attr('data-tab');
    
    $.ajax({
        url : "../" + activeTab + ".html",
        success : function(data) {
            var refine = $("#section").html(data).find('article');
            $('#section').html(refine);
        }
    });
})

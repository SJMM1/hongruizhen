$('.input').on('focus', function(){
    $(this).parent().parent().addClass('focus')
})
$('.input').on('blur', function(){
    if($(this).val() == ""){
        $(this).parent().parent().removeClass('focus')
    } 
})

$('.btn').on('click', function(){
    if($('.input-div.one .input').val() == "") {
        alert("아이디를 입력하세요")
        $('.input-div.one .input').focus()
        return false 
    }
    else if($('.input-div.pass .input').val() == "") {
        alert("비밀번호를 입력하세요")  
        $('.input-div.pass .input').focus() 
        return false
    }
})
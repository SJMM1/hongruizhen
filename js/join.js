// 생년월일
var today = new Date();
var year = today.getFullYear()

for(var i=year; i>1900; i--) {
    $('#birthYear').append(`<option value="${i}">${i}년</option>`);
}

for(var i=1; i<=12; i++) {
    $('#birthMonth').append(`<option value="${i}">${i}월</option>`);
}

$('#birthYear, #birthMonth').on('change', function(){
    $('#birthDay').empty().append(`<option value="">일</option>`);
    
    if($('#birthYear option:selected').val() != 0 && $('#birthMonth option:selected').val() != 0) {
        var selectYear = $('#birthYear option:selected').val()
        var selectMonth = $('#birthMonth option:selected').val()
        var day = new Date(selectYear,selectMonth,0).getDate()
    }
    for(var i=1; i<=day; i++) {
        $('#birthDay').append(`<option value="${i}">${i}일</option>`);
    }
})

// 우편번호
function Postcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = '';
            var extraAddr = '';
            
            // 사용자가 도로명 주소를 선택했을 경우
            if (data.userSelectedType === 'R') { 
                addr = data.roadAddress;

                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }          
            } 
            // 사용자가 지번 주소를 선택했을 경우(J)
            else { 
                addr = data.jibunAddress;
            }

            $('#zipcode').val(data.zonecode)
            $('#address').val(addr + extraAddr)
            $('#addressSub').focus()
        }
    }).open();
}

// 비밀번호 유효성 검사
$('#memPw').on('change', function(){
    $('#memPw').parent().find('span').remove()
    var pw = $('#memPw').val();
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    var pw_msg = '';
    
    if(pw.length < 10 || pw.length > 20){
        pw_msg = "10자리 ~ 20자리 이내로 입력해주세요.";
    }
    else if(pw.search(/\s/) != -1){
        pw_msg = "비밀번호는 공백 없이 입력해주세요.";
    }
    else if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
        pw_msg = "영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.";
    }
    
    if(pw_msg != '') {
        $('#memPw').parent().append('<span class="pw_msg">'+pw_msg+'</span>');
    }
})

// 비밀번호 확인
$('#memPwRe').on('change', function(){
    $('#memPwRe').parent().find('span').remove()
    if($(this).val() != $('#memPw').val() && $('#memPw').val() != ''){
        $('#memPwRe').parent().append('<span class="pw_msg">비밀번호가 일치하지 않습니다.</span>');
    }
})

// 회원가입
function join() {
    if(!$('#memId').val()){
        alert('아이디를 입력하세요.');
        $('#memId').focus();
    }
    else if(!$('#memPw').val() || !$('#memPwRe').val()){
        alert('비밀번호를 입력하세요.');
        !$('#memPw').val() ? $('#memPw').focus() : $('#memPwRe').focus();      
    }
    else if($('#memPw').parent().find('span').hasClass('pw_msg') || $('#memPwRe').parent().find('span').hasClass('pw_msg')){
        alert('비밀번호를 입력하세요.');
        $('#memPw').parent().find('span').hasClass('pw_msg') ? $('#memPw').focus() : $('#memPwRe').focus()  
    }
    else if(!$('#memName').val()){
        alert('이름을 입력하세요.');
        $('#memName').focus();
    }
    else if(!$('#email').val() || !$('#emailDomain').val()){
        alert('이메일을 입력하세요.');
        !$('#email').val() ? $('#email').focus() : $('#emailDomain').focus();    
    }
    else if(!$('#birthYear option:selected').val() || !$('#birthMonth option:selected').val() || !$('#birthDay option:selected').val()){
        alert('생년월일을 입력하세요.');
        !$('#birthYear option:selected').val() ? $('#birthYear').focus() : !$('#birthMonth option:selected').val() ? $('#birthMonth').focus() : $('#birthDay').focus()
    }
    else {
        alert('가입완료!');
        location.href = '../index.html'
    }
}


$("#anniversary").datepicker({
    changeMonth:true,      // 월 선택
    changeYear:true,       // 연도 선택
    yearRange:'1900:2022',  // 연도 범위
    showAnim:'slideDown',
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat:'yy-mm-dd',
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
    yearSuffix:' 년',
    showMonthAfterYear: true,
    maxDate: "0D"
});

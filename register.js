
function checkForm(){

	$('#submit').hide()
	$('#loading').show()

	var uid = $('#uid')[0].value
	var pwd1 = $('#pwd1')[0].value
	var pwd2 = $('#pwd2')[0].value
	var realName = $('#real-name')[0].value
	
	var phoneRegex = /^09[0-9]{8}$/g
  var pwdRegex = /^[0-9a-zA-Z]{6,12}$/g

	if(phoneRegex.test(uid) == true){
		if(pwdRegex.test(pwd1) || pwdRegex.test(pwd2)){
			if(pwd1 == pwd2){
				if(realName == ''){
					alert('姓名不得為空')
				} else {
					$.ajax({
				    url: 'http://fastpower.herokuapp.com/client/register',
				    type: "POST",
				    dataType: "json",
				    data: { uid: uid, pwd: pwd1, username: realName },
				    success: function (res) {
				  		$('#loading').hide()
							$('#submit').show()				         
		         	if(res.status == 30){
								alert('該門號已註冊\n如未驗證手機，請於隔日再重新註冊或洽服務人員')
		         	} else if(res.status == 29){
		         		alert('密碼格式錯誤')
		         	} else if(res.status == 28){
		         		window.location = "verify.html?q=" + uid
		         	}
				    },
				    error: function (xhr, ajaxOptions, thrownError) {
					  	$('#loading').hide()
							$('#submit').show()				    	
				      console.log(xhr.status, xhr.responseText);
				    }
				 });

				}
			} else {
				alert('兩次輸入密碼不相同')				
			}
		} else {
			alert('密碼格式錯誤')		
		}
	} else {
		alert('手機格式錯誤')
	}
}



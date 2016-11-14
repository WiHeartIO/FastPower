
function checkForm(){
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
					return false
				} else {
					return true
				}
			} else {
				alert('兩次輸入密碼不相同')
				return false
			}
		} else {
			alert('密碼格式錯誤')
			return false
		}
	} else {
		alert('手機格式錯誤')
		return false
	}
}



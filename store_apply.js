
function checkForm(){

	$('#submit').hide()
	$('#loading').show()

	var name = $('#name')[0].value
	var phone = $('#phone')[0].value
	var email = $('#email')[0].value
	
	var phoneRegex = /^09[0-9]{8}$/g;
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(phoneRegex.test(phone) == true){
		if(emailRegex.test(email) == true){			
			if(name == ''){
				alert('商家名稱不得為空')
			} else {
				$.ajax({
			    url: 'https://fastpower.herokuapp.com/site/apply',
			    type: "POST",
			    dataType: "json",
			    data: { name: name, phone: phone, email: email },
			    success: function (res) {
			  		$('#loading').hide()
						$('#submit').show()
	
						if(res.status == 63){
	         		alert('申請失敗，請稍候再試或洽 Fast Power 業務人員')
	         	} else if(res.status == 62){
	         		alert('申請成功，我們將儘速與您聯絡！')
	         		window.location = "store.html"
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
			alert('E-mail 格式錯誤')		
		}
	} else {
		alert('手機格式錯誤')
	}
}





function parseUid(){
	var parser = document.createElement('a');
	parser.href = location.href;
	var search = parser.search.split('?')[1]	// =>['a=1&b=2']
	var queryString = search.split('&')				// ['a=1', 'b=2', ...]
	var query = queryString.map((q)=>{ return q.split('=')[1] })
	return query;
}

function checkAuthCode(){

	$('#submit').hide()
	$('#loading').show()

	var code = $('#auth-code')[0].value
	var uid = parseUid()[0]

	if(code != ''){		
		$.ajax({
	    url: 'http://fastpower.herokuapp.com/client/auth_code',
	    type: "POST",
	    dataType: "json",
	    data: { uid: uid, code: code },
	    success: function (res) {
				$('#loading').hide()	    	
	     	$('#submit').show()				

	     	if(res.status == 3){
					alert('驗證碼錯誤')
	     	} else if(res.status == 53){
	     		alert('伺服器更新錯誤')
	     	} else if(res.status == 52){
	     		alert('歡迎加入 Fast Power! 新會員可獲得 2 小時時數，請以此帳號登入')
	     		window.location = "member.html"
	     	}
	    },
	    error: function (xhr, ajaxOptions, thrownError) {
	         console.log(xhr.status, xhr.responseText);
	    }
	 });
	} else {
		alert('不得為空')
	}
}

function resendSMS(){

}
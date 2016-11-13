
$('#agreement').click(()=>{

	var form = $('#register-form')

	if(form[0].classList.contains('active') == false)	// result of the first loading is also false
   	form.slideDown().addClass("active");	// this will remove style="display: none"
  else if(form[0].classList.contains('active') == true)
   	form.slideUp().removeClass("active");

})
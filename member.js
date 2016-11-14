
$('#agreement').click(()=>{

	var btn = $('.to-register')

	if(btn[0].classList.contains('active') == false)	// result of the first loading is also false
   	btn.slideDown().addClass("active");	// this will remove style="display: none"
  else if(btn[0].classList.contains('active') == true)
   	btn.slideUp().removeClass("active");

})
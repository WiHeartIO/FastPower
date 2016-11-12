
$('#nav-menu-icon').click(function () {		

		var menu = $('#nav-menu')[0]

		if(menu.classList.contains('active') == false)	// result of the first loading is also false
    	$("#nav-menu").slideDown().addClass("active");	// this will remove style="display: none"
    else if(menu.classList.contains('active') == true)
    	$("#nav-menu").slideUp().removeClass("active");
});
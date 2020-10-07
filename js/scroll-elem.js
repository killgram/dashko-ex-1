$(document).ready(function(){
	$("#scroll-down").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){ 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
		$('.scrollup').fadeIn();
		} else {
		$('.scrollup').fadeOut();
		}
	});
	 
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
});
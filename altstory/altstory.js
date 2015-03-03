$(document).ready(function() 
{

	$(".circle").click(function()
	{
		var target = $(this).parent().next();

		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	});
});
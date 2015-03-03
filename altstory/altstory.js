$(document).ready(function() 
{
	$(".circle").click(function()
	{
		var target = $(this).parent().next();

		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	});
	new imagesLoaded( 'body', function() {
		$( ".bg-img" ).each(function() {
			var width = $(this).width()/2;
			width = "calc(50% - " + width + "px)";
			$( this ).css( "left", width );
		});
	});
	
	
});
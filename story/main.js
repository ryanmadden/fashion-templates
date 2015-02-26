$(document).ready(function(){
	$('.img-thumb').click(function(){
		var source = $(this).children("img").attr("src");
		$('.cover-img > img').attr("src", source);
	});
})
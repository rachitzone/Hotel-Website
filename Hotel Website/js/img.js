$(function(){
	var image = $(".mainmenu").find('img').attr('src');
	$(".mainmenu a").mouseover(function(){
		var newimg = $(this).attr('data-image');
		$(this).parent().find('img').attr("src", newimg);
	});
});
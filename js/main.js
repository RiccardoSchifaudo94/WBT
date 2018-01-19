$(document).ready(function(){
	$(".menu").click(function(){
		$(".sub_header").slideToggle();
		$(".menu img").toggleClass("menu_active");
	});
});
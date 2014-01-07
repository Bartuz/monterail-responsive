$(document).ready(function() {
	//css
	$(".one-person:last, .one-project li:last, #main-nav li:last").addClass("last-child");


	$("#footer .bonus").hover(function(){
		$(this).animate({ height: 206 }, 100);
		$(this).find("span").animate({ opacity: 1 });
	}, function(){
		$(this).find("span").animate({ opacity: 0 }, 100);
		$(this).animate({ height: 181 }, 100);
	});
});


(function($) {

	$("html").addClass("js");
	var e=$("html");
	$(".js .menu-open").on("click", function() {
		if(e.hasClass("js-menu-open")) {
			e.removeClass("js-menu-open");
		}else {
			e.addClass("js-menu-open");
		}
	});


	$(".cv-bullets").on("click", "li", function(e) {
		e.preventDefault();
		var $li = $(this);
		if($li.hasClass('open')){
			$li.removeClass("open").addClass("closed");
		} else {
			$li.removeClass("closed").addClass("open");
		}
	});
	
})($)
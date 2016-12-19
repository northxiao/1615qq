define(["text!./search.html","css!./search.css"],function(searchPage){
	return {
		init:function(){
			$(".home").html(searchPage).show().siblings("div").hide();
			qq()
		}

	}
})

function qq(){
		$(".DIV").css({
				height:screen.height
			})
}
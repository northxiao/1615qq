define(["text!./card.html","css!./card.css"],function(cardPage){
	console.log(cardPage);
	return {
		init:function(){
			$(".card").html(cardPage).show().siblings("div").hide()
		}
	}
	
})
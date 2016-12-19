define(["text!./score.html","css!./score.css"],function(scorePage){
	return{
		init:function(){
			$(".my").html(scorePage).show().siblings("div").hide();
			$(".Hfoot").css({"display":"none"});
		}
	}
	
})
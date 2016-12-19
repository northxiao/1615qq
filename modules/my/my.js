define(["text!./my.html","css!./my.css"],function(myPage){
	return{
		init:function(){
			$(".my").html(myPage).show().siblings("div").hide();
			$(".Hfoot").show();
		}
	}
})

define(["text!./send.html","css!./send.css","./jquery.lazyload.js","../../js/baiduTemplate.js"],function(sendPage){
	console.log(sendPage)
	return{
		init:function(){
			$(".send").html(sendPage).show().siblings("div").hide();
			$(".Sleft ").on("click","li",function(){
				$(".Sleft li span").css({"background":"none"});
				$(this).children('span').css({"background":"#ffd600"});
			});
			$.ajax("data/getCategoryProducts.json",{
				success:function(data){
					// console.log(data);
					$(".Sright .ulall").load("templete/send1.html",function(){
						var tmpvalue=baidu.template("send1",data);
						$(".Sright .ulall").html(tmpvalue);
						$(".Sright .ulall img.lazy").lazyload({
							container: $(".ulall"),
							effect : "fadeIn" 
						});
					})
				}
			})




		}
	}
})
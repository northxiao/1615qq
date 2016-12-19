define(["text!./integral.html","css!./integral.css"],function(integralPage){
	return {
		init:function(){
			$(".home").html(integralPage).show().siblings("div").hide();
	        $(".Hfoot").hide();
			$(".Islider ul").on("click","li",function(){
				$(this).css({"background":"#fdd000"}).siblings().css({"background":"#272c2a"})
			});
			$.ajax("data/miaosha.json",{
				success:function(data){
					console.log(data);
				$(".Ishop ul").load("templete/integral1.html",function(){
					var tmpvalue=baidu.template("miaosha",data);
					$(".Ishop ul").html(tmpvalue);
				});
				$(".Ifood ul").load("templete/integral1.html",function(){
					var tmpvalue=baidu.template("miaosha1",data);
					$(".Ifood ul").html(tmpvalue);
				});
				}
			})



		}
	}
})
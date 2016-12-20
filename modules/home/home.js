define(["text!./home.html","css!./home.css", "./swiper.min.js", "css!./swiper.min.css","../../js/baiduTemplate.js"],function(homePage){
	return {
		init:function(){
			$(".home").html(homePage).show().siblings("div").hide();
			$(".Hfoot").show();
			// $(".main").css({"background":"#fff"});
			$.ajax("data/homeData.json",{
				success:function(data){
					// console.log(data);
					// console.log(data.data.act_info[5].act_rows[0].category_detail.goods[0].img)
					$(".miaosha ul").load("templete/home1.html",function(){
						var tmpvalue=baidu.template("home",data);
						$(".miaosha ul").html(tmpvalue);
						$(".miaosha ul li:eq(1)").wrap("<a href='#integral'></a>");
					});
					$(".Hfood1 ul").load("templete/home1.html",function(){
						var tmpvalue=baidu.template("home1",data);
						$(".Hfood1 ul").html(tmpvalue);
					});
					$(".Hmain1 .ul2").load("templete/home1.html",function(){
						var tmpvalue=baidu.template("home2",data);
						$(".Hmain1 .ul2").html(tmpvalue);
					})
                        $(".Hmain2 #ul").load("templete/home1.html",function(){
						var tmpvalue=baidu.template("home3",data);
						// console.log(data.act_info[5].act_rows[0].category_detail)
						$(".Hmain2 #ul").html(tmpvalue);
					});
                        // 首页轮播图数据
                    $(".swiper-wrapper").load("templete/home1.html",function(){
						var tmpvalue=baidu.template("lunbotu",data);
						$(".swiper-wrapper").html(tmpvalue);
						var mySwiper = new Swiper('.swiper-container', {
							autoplay: 2000,//可选选项，自动滑动
							loop : true,//循环
							pagination : '.swiper-pagination',//分页器
						});
					});
				}
			});
            $(".Hmain2 ul").on("click",".span4",function(){
            	// console.log($(this).parent().parent().find("img").attr("src"));
            	var tr=$("<tr><td><img src='img/gou.png'></td><td><img src=' "+$(this).parent().parent().find('img').attr('src')+" '></td><td><div><p class='p1'>"+$(this).parent().parent().find('.p0').html()+"</p><p class='p2'><span class='span1'>￥"+$(this).parent().find('.span3').html()+"</span><span class='span2'><i class='i1'>-</i><i class='i2'>1</i><i class='i3'>+</i></span></p></div></td></tr>");
            	console.log(tr);
            	// $(".cardtable tbody").append(tr);
            	console.log($(".cardtable tbody"))
            	$("#ss tbody").append(tr);
            });


            var latitude=0;
            var longitude=0;
            $(".header1 span").click(function(){
            	getLocation();
            	getOpen();
            });
            function getLocation(){
            	wx.getLocation({
			    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
			    success: function (res) {
			        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
			        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
			        var speed = res.speed; // 速度，以米/每秒计
			        var accuracy = res.accuracy; // 位置精度
			    }
			});
            };
            function getOpen(){
            	wx.openLocation({
			    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
			    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
			    name: '', // 位置名
			    address: '', // 地址详情说明
			    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
			    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
			});
            };
            
		}
	}
	
})
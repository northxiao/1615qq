<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx71e48b63f9935c7d", "af46fbbc2828f60bfe1dd2bb59b7a660");
$signPackage = $jssdk->GetSignPackage();
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="foot.css">

<script type="text/javascript" src = "http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" />  
	 <script data-main = "app.js" type="text/javascript" src = "js/require.js"></script>
</head>
<body>
   <div class="main">
	   <div class="home"></div>
	   <div class="card"></div>
	   <div class="integral"></div>
	   <div class="my"></div>
	   <div class="score"></div>
	   <div class="search"></div>
	   <div class="send"></div>
   </div>
   <div class="Hfoot">
		<ul>
			<li>
				<img src="img/下载 (1).png" alt="">
				<p><a href="#home">首页</a></p>
			</li>
			<li>
				<img src="img/下载 (2).png" alt="">
				<p><a href="#send">闪送超市</a></p>
			</li>
			<li>
				<img src="img/下载 (3).png" alt="">
				<p>
					<a href="#card">购物车</a>
				</p>
				<span>0</span>
			</li>
			<li>
				<img src="img/下载 (4).png" alt="">
				<p><a href="#my">我的</a></p>
			</li>
		</ul>
	</div>
</body>
<script src="js/public.js"></script>
<script type="text/javascript">
	 wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: []
  });
</script>
</html>
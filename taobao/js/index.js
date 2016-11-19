// 函数类名封装
function getName(id,nam){
	return document.getElementById(id).getElementsByTagName(nam);
}

function getId(id){
	return document.getElementById(id);
}

//input框下的点击事件
var seLis = getName("search_list","li");
console.log(seLis);
var seIn = getId('search_input');
var sub = getId('sub');
var camera = getId('camera');
var more = getId('more');
var input_list = getId('input_list');
var input_lists = getId('input_lists');
var baby = getId('baby');
var cat = getId('cat');
var dian = getId('dian');
var input_box = getId('input_box');
seLis[0].onclick = function()
{
	this.style.background = "#f40";
	this.style.color = "#fff";
	this.style.fontWeight = "bold";
	input_box.style.border = "3px solid #f40";
	seIn.value = "运动会金牌好货";
	seIn.style.color = "#ccc";
	sub.style.background = "#f40";
	camera.style.display = "block";
	more.style.display = "block";
	input_list.style.display = "block";
	input_lists.style.display = "none";
	cat.style.background = "#fff";
	cat.style.color = "#f40";
	cat.style.fontWeight = "normal";
	dian.style.background = "#fff";
	dian.style.color = "#f40";
	dian.style.fontWeight = "normal";
	sub.onmouseover = function()
	{
		this.style.background = "#F52B00"
	}
	sub.onmouseout = function()
	{
		this.style.background = "#F40"
	}
}
seLis[1].onclick = function()
{
	this.style.background = "#c40000";
	this.style.color = "#fff";
	this.style.fontWeight = "bold";
	input_box.style.border = "3px solid #c40000";
	seIn.value = "运动会金牌好货排行榜";
	seIn.style.color = "#ccc";
	sub.style.background = "#c40000";
	camera.style.display = "none";
	more.style.display = "none";
	input_list.style.display = "none";
	input_lists.style.display = "block";
	baby.style.background = "#fff";
	baby.style.color = "#f40";
	baby.style.fontWeight = "normal";
	dian.style.background = "#fff";
	dian.style.color = "#f40";
	dian.style.fontWeight = "normal";
}
seLis[2].onclick = function()
{
	this.style.background = "#f40";
	this.style.color = "#fff";
	this.style.fontWeight = "bold";
	input_box.style.border = "3px solid #f40";
	seIn.value = "";
	sub.style.background = "#f40";
	more.style.display = "block";
	input_list.style.display = "block";
	input_lists.style.display = "none";
	cat.style.background = "#fff";
	cat.style.color = "#f40";
	cat.style.fontWeight = "normal";
	baby.style.background = "#fff";
	baby.style.color = "#f40";
	baby.style.fontWeight = "normal";
	sub.onmouseover = function()
	{
		this.style.background = "#F52B00"
	}
	sub.onmouseout = function()
	{
		this.style.background = "#F40"
	}
}
seIn.onfocus = function()
{
	this.value = " ";
	this.style.color = "#000";
}
//二维码
$(function(){
	$('.two').click(function(){
		$('.two').css('display','none');
	})
})

//轮播图
var a = 0;
var carousel = getId('carousel');
setInterval(runs,2000);
function changeImgleft()
{
	setTimeout(runs,10);
}
function runs()
{
	carousel.style.left = a + 'px';
	a-=520;
	if(a <= -2600){
		a=0;
	}
}

var n = 0;
setInterval(running,2000);
function changeImgright()
{
	setTimeout(running,10);
}
function running()
{
	carousel.style.left = n + 'px';
	n-=520;
	if(n <= -2600){
		n=0;
	}
}


// 小轮播

var x = 0;
var smcarousel = getId('smcarousel');
setInterval(smrun,2000);
function changesmImgleft()
{
	setTimeout(smrun,10);
}
function smrun()
{
	smcarousel.style.left = x + 'px';
	x-=520;
	if(x <= -2080){
		x=0;
	}
}

var y = 0;
setInterval(paos,2000);
function changesmImgright()
{
	setTimeout(paos,10);
}
function paos()
{
	smcarousel.style.left = y + 'px';
	y-=520;
	if(y <= -2080){
		y=0;
	}
}



//神经病一般的公告条
$(function(){
	$('.notlist>div>ul>li');
	var num=1;
	$('.notlist>ul>li').mouseover(function(){
		$('.notlist>ul>li').css('borderBottom','2px solid #fff');
		$('.notlist>ul>li').css('fontWeight','normal');
		$(this).css('borderBottom','2px solid #f40');
		$(this).css('fontWeight','bold');

		if(num==1){
				$('.notlist>div>ul>li').eq(2).after('<li>淘宝争议处理规则变更</li>') 
				num=2;
		}
		if($(this).text()=='规则'){
			$('.notlist>div>ul>li').eq(0).text('开店认证假货规则变更').addClass('f40');
			$('.notlist>div>ul>li').eq(1).text('未经备案商品禁售规则');
			$('.notlist>div>ul>li').eq(2).text('新增旅行市场WIFI规则');
			$('.notlist>div>ul>li').eq(3).text('淘宝争议处理规则变更');
			
		}else if($(this).text()=='论坛'){
			$('.notlist>div>ul>li').eq(0).text('G20杭州快递影响').addClass('f40');
			$('.notlist>div>ul>li').eq(1).text('爱育之心做衣服');
			$('.notlist>div>ul>li').eq(2).text('700家热风淘宝路');
			$('.notlist>div>ul>li').eq(3).text('是赚钱还是骗子');
		}else if($(this).text()=='安全'){
			$('.notlist>div>ul>li').eq(0).text('骗子也要追奥运！').addClass('f40');
			$('.notlist>div>ul>li').eq(1).text('代运营生态净化启动');
			$('.notlist>div>ul>li').eq(2).text('教你完美避开职业差评');
			$('.notlist>div>ul>li').eq(3).text('新手卖家自杀式玩法');

		}else if($(this).text()=='公益'){
			$('.notlist>div>ul>li').eq(0).text('阿里捐赠700万元救灾').addClass('f40');
			$('.notlist>div>ul>li').eq(1).text('阿里与残联出助残政策');
			$('.notlist>div>ul>li').eq(2).text('公益宝贝卖家发票索取');
			$('.notlist>div>ul>li').eq(3).text('公益机构淘宝开店攻略');

		}else{
			$('.notlist>div>ul>li').eq(0).text('上海家化获得“2016天猫双11晚会”独家冠名权').addClass('f40');
			$('.notlist>div>ul>li').eq(1).text('国内最智能仓储开仓');
			$('.notlist>div>ul>li').eq(2).text('百城千校助数万人就业');
			$('.notlist>div>ul>li').eq(3).text('');

		}
		
	})

});

//我常逛的
$(function(){
	var $diy = $('.diy');
	var $cl = $diy.clone()
	$('.diysale').append($cl);
	$cl.css('marginTop','20px');
})

$(function(){
	var $todaysale = $('.todaysale');
	var $cls = $todaysale.clone();
	$('.diysale').append($cls);
	$cls.css('marginTop','20px')
})

// 时尚爆料王
$(function(){
	var $ifa = $('.ifashion');
	$icl = $ifa.clone();
	$('.world').after($icl);
	$icl.css('marginLeft','-1px')
})
$(function(){
	var $wo = $('.world');
	var $wcl = $wo.clone();
	$icl.after($wcl);
	$wcl.css('marginLeft','0px')
})

// 极有家
$(function(){
	var $eat = $('.eat');
	$ecl = $eat.clone();
	$('.home').after($ecl); 
	$ecl.css('marginLeft','-1px')
})
$(function(){
	var $home = $('.home');
	var $hcl = $home.clone();
	$ecl.after($hcl); 
})
$(function(){
	var $qua = $('.qualitylife');
	var $qcl = $qua.clone();
	$qua.after($qcl);
})

//特色玩味控
$(function(){
	var $play = $('.playgame');
	$plcl = $play.clone();
	$('.flower').after($plcl);
	$plcl.css('marginLeft','-1px')
})
$(function(){
	var $flower = $('.flower');
	var $fcl = $flower.clone();
	$plcl.after($fcl); 
	$flower.css('marginLeft','-1px')
	$fcl.css('marginLeft','-1px')
})
$(function(){
	var $game = $('.game');
	var $gfl = $game.clone();
	$game.after($gfl);
})

// 实惠专业户
$(function(){
	var $ten = $('.ten');
	$tencl = $ten.clone();
	$ten.after($tencl);
})
$(function(){
	var $tencls = $tencl.clone();
	$tencl.after($tencls);
})
$(function(){
	var $aff = $('.afffirst');
	var $afffl = $aff.clone();
	$aff.after($afffl);
})
//右边有好货
$(function(){
	var $goods = $('.goods');
	var $good2 = $('.good2')
	
	for(var i=0;i<3;i++){
		$gocl = $goods.clone();
		
		$good2.after($gocl);
	}
})
// 每日有好店
$(function(){
	var $ts = $('.todaystore');
	var $tscl = $ts.clone();
	$ts.after($tscl);
})
//热卖单品
$(function(){
	$br = $('.bigre');
	$brcl = $br.clone();
	$br.after($brcl);
})
$(function(){
	$br.after($brcl.clone());
})

// 猜你喜欢
$(function(){
	$likelist = $('.likelist');
	$llcl = $likelist.clone();
	$likelist.after($llcl);
})
$(function(){
	$likelist.after($llcl.clone());
})





// 淘宝头条
$('.righttop').mouseover(function(){
	$('.simple').animate({top:'-=82'},3000)
})
$('.righttop').mouseout(function(){
	$('.simple').animate({top:'0'},3000)
})

//替换的input框
$(function(){
	$(window).scroll(function(){
		var $top = $(document).scrollTop();
		if($top>170){
			$('.replace').show();
			$('.replace').css({position:'fixed',left:0,top:'0',zIndex:1})
		}else{
			$('.replace').hide();
		}
	})
})

$(function(){
	$('.relistbox').mouseover(function(){
		$('.reinputlist1').show();
		$('.reinputlist1>li').css('color','#f40');
	})
	$('.relistbox').mouseout(function(){
		$('.reinputlist1').hide();
	})
	$('.reinputlist1>li').click(function(){
		if($(this).text()=='天猫'){
			$('.reinputlist1>li').eq(0).text('宝贝');
			$('.reinputlist1>li').eq(1).text('店铺');
			$('.reinputlist>li').eq(0).text('天猫');
			$('.reinput').css('border','3px solid #C40000');
			$('.retext').css('color','#ccc');
			$('.sum').css('background','#C40000');
			$('.retext').val('精选大牌时尚T恤');
			$('.cc').hide();
		}else if($(this).text()=='宝贝'){
			$('.reinputlist1>li').eq(0).text('天猫');
			$('.reinputlist1>li').eq(1).text('店铺');
			$('.reinputlist>li').eq(0).text('宝贝');
			$('.reinput').css('border','3px solid #f40');
			$('.sum').css('background','#f40')
			$('.retext').val('给家添一盏灯')
			$('.retext').css('color','#ccc');
			$('.cc').show();
		}else if($(this).text()=='店铺'){
			$('.reinputlist1>li').eq(0).text('天猫');
			$('.reinputlist1>li').eq(1).text('宝贝');
			$('.reinputlist>li').eq(0).text('店铺');
			$('.reinput').css('border','3px solid #f40');
			$('.sum').css('background','#f40')
			$('.retext').val('');
			$('.cc').hide();
		}
	})
	$('.retext').focus(function(){
		$(this).val(' ');
		$('.retext').css('color','#000');
	})
})

//侧边栏
$(function(){
	$('.sidelist>li').eq(0).css({color:'#f40',fontWeight:'700'})
	$('.sidelist>li').eq(1).css({color:'#FF3779',fontWeight:'700'})
	$('.sidelist>li').eq(2).css({color:'#9786FB',fontWeight:'700'})
	$('.sidelist>li').eq(3).css({color:'#AEC413',fontWeight:'700'})
	$('.sidelist>li').eq(4).css({color:'#AD846E',fontWeight:'700'})
	$('.sidelist>li').eq(5).css({color:'#f40',fontWeight:'700'})
	$(window).scroll(function(){
		var $t = $(document).scrollTop();
		console.log($t);
		if($t>400){
			$('.sidelist').css({top:65});
		}else{
			$('.sidelist').css({top:400});
		}
		if($t<=1500&&$t>700){
			$('.sidelist>li').eq(0).css({color:'#fff',fontWeight:'700',background:'#f40',opacity:0.8});

		}else{
			$('.sidelist>li').eq(0).css({color:'#f40',fontWeight:'700',background:"#fff",opacity:1});

		}
		if($t<=1900&&$t>1500){
			$('.sidelist>li').eq(1).css({color:'#fff',fontWeight:'700',background:'#FF3779',opacity:0.8});

		}else{
			$('.sidelist>li').eq(1).css({color:'#FF3779',fontWeight:'700',background:"#fff",opacity:1});

		}
		if($t<=2500&&$t>1900){
			$('.sidelist>li').eq(2).css({color:'#fff',fontWeight:'700',background:'#9786FB',opacity:0.8});

		}else{
			$('.sidelist>li').eq(2).css({color:'#9786FB',fontWeight:'700',background:"#fff",opacity:1});

		}
		if($t<=3000&&$t>2500){
			$('.sidelist>li').eq(3).css({color:'#fff',fontWeight:'700',background:'#AEC413',opacity:0.8});

		}else{
			$('.sidelist>li').eq(3).css({color:'#AEC413',fontWeight:'700',background:"#fff",opacity:1});

		}
		if($t<=3950&&$t>3000){
			$('.sidelist>li').eq(4).css({color:'#fff',fontWeight:'700',background:'#AD846E',opacity:0.8});

		}else{
			$('.sidelist>li').eq(4).css({color:'#AD846E',fontWeight:'700',background:"#fff",opacity:1});

		}
		if($t<=4900&&$t>3950){
			$('.sidelist>li').eq(5).css({color:'#fff',fontWeight:'700',background:'#f40',opacity:0.8});

		}else{
			$('.sidelist>li').eq(5).css({color:'#f40',fontWeight:'700',background:"#fff",opacity:1});

		}
	})

	$('.sidelist>li').eq(0).click(function(){
		var $ttt = $(document).scrollTop();
		$('body,html').animate({scrollTop:$ttt=800},300)
	});
	$('.sidelist>li').eq(1).click(function(){
		var $qqq = $(document).scrollTop();
		$('body,html').animate({scrollTop:$qqq=1550},300)
	});
	$('.sidelist>li').eq(2).click(function(){
		var $www = $(document).scrollTop();
		$('body,html').animate({scrollTop:$www=1950},300)
	});
	$('.sidelist>li').eq(3).click(function(){
		var $eee = $(document).scrollTop();
		$('body,html').animate({scrollTop:$eee=2550},300)
	});
	$('.sidelist>li').eq(4).click(function(){
		var $rrr = $(document).scrollTop();
		$('body,html').animate({scrollTop:$rrr=3050},300)
	});
	$('.sidelist>li').eq(5).click(function(){
		var $yyy = $(document).scrollTop();
		$('body,html').animate({scrollTop:$yyy=4000},300)
	});

	$('.sidelist>li').eq(6).click(function(){
		var $uuu = $(document).scrollTop();
		$('body,html').animate({scrollTop:$uuu=0},600)
	})
})





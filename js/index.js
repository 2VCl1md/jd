$(function(){
	//送至哪个城市
	$('.hidden-city ul li a').click(function(){

		$('.hidden-city ul li a').removeClass()
		$(this).addClass('header-bg')
		$('.hidden-city ul li a').not($(this)).addClass('send-item')
		$('.changeCity').html($(this).html())
		//$(this).html()=='内蒙古'||'钓鱼岛'?$('.send').css('width','100px'):$('.send').css('width','95px')
	})

	//大图轮播
	var index=0;
	var timer;
	$('.slide-6 li:gt(0)').hide();
	$('.slide-2 .slide-next').click(function(){
		slide1()
	})
	$('.slide-2 .slide-prev').click(function(){
		slide2()
	})
	timer=setInterval(function(){
		$('.slide-2 .slide-next').click()
	},2000)

	$('.banner-slide').mouseover(function(){
		clearInterval(timer)
	})
	$('.banner-slide').mouseout(function(){
			timer=setInterval(function(){
			$('.slide-2 .slide-next').click()
		},2000)
	})

	$('.slide-btn span').click(function(){
		$('.slide-6 li').eq($(this).index()).fadeIn().siblings().fadeOut();
		$('.slide-btn span').eq($(this).index()).addClass('on').siblings().removeClass();
		index=$(this).index();
	})
	function slide1(){
		if (index==5) {index=-1}

		$('.slide-6 li').eq(index+1).fadeIn().siblings().fadeOut();
		$('.slide-btn span').eq(index+1).addClass('on').siblings().removeClass();

		index++;//console.log(index)
	}
	function slide2(){
		if (index==0) {index=6}

		$('.slide-6 li').eq(index-1).fadeIn().siblings().fadeOut();
		$('.slide-btn span').eq(index-1).addClass('on').siblings().removeClass();
		
		index--;//console.log(index)
	}

	/*banner下侧轮播*/
	$('.bot-2 .slide-next').click(function(){
		$('.slide-bot ul').finish();
		if (parseInt($('.slide-bot ul').position().left)==-5000) {
			$('.slide-bot ul').css({left:-1000})
		}
		slide3(-1000);
	})
	$('.bot-2 .slide-prev').click(function(){
		$('.slide-bot ul').finish();
		if (parseInt($('.slide-bot ul').position().left)==0) {
			$('.slide-bot ul').css({left:-4000})
		}
		slide3(1000)
	})
	function slide3(offset){
		$('.slide-bot ul').animate({left:parseInt($('.slide-bot ul').position().left+offset)})
	}


	/**换一换*/
	var change=0;
	$('.popular-title a').click(function(){
		if (change==2) {change=-1};
			
		$('.popular-random .random').eq(change+1).show().siblings('.random').hide()
		change++;console.log(change)
	})
})
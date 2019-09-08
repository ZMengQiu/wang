$(function(){
	var timer;
	var n=0;
	function play(){
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			if(n>6){
				n=0;
			}
			$('.ol li').eq(n).addClass('current').siblings().removeClass('current');
			$('.ul li').eq(n).addClass('add').siblings().removeClass('add');
			$('.ul li').eq(n).children('img').addClass('add_scale');
			$('.ul li').eq(n).siblings().children('img').removeClass('add_scale');
		},2000)
	}
	play();
	$('.section').hover(function(){
		clearInterval(timer)
	},function(){
		play();
	})
	
	$('.ol li').hover(function(){
		var n=$(this).index();
		$(this).addClass('current');
		$('.ul li').eq(n).addClass('add');
	},function(){
		$(this).removeClass('current');
	})
	
	
})

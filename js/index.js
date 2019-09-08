$(function(){
	// 轮播图
	var n=0;
	var timer;
	function play(){
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			if(n==5){
				$('.banner ol li').eq(0).addClass('current').siblings('li').removeClass('current');
			}
			if(n>5){
				n=0;
				$('.banner ul').css('left', 0+'px');
				n=1;
			}
			$('.banner ul').css('left', -n*1920+'px');
			$('.banner ol li').eq(n).addClass('current').siblings('').removeClass('current');
		},2000)
	}
	play();
	$('.banner').hover(function() {
		clearInterval(timer);
		$('.banner span').css('opacity', '1');
	}, function() {
		play();
		$('.banner span').css('opacity', '');
	});
	$('.banner ol li').click(function(event) {
		n=$(this).index();
		$(this).addClass('current').siblings('').removeClass('current');
		$('.banner ul').css('left', -n*1920+'px');
	});
	$('.but-left').click(function(event) {
		n--;
		if(n<0){
			n=5;
			$('.banner ul').css('left', -n*1920+'px');
			n=4;
		}
		$('.banner ul').css('left', -n*1920+'px');
		$('.banner ol li').eq(n).addClass('current').siblings('').removeClass('current');
	});
	$('.but-right').click(function(event) {
		n++;
		if(n==5){
			n=0;
			$('.banner ol li').eq(0).addClass('current').siblings('li').removeClass('current');
		}
		if(n>5){
			$('.banner ul').css('left', -n*1920+'px');
			n=1;
		}
		$('.banner ul').css('left', -n*1920+'px');
		$('.banner ol li').eq(n).addClass('current').siblings('').removeClass('current');
	});

	// 固定的侧导航
	$(window).scroll(function(event) {
		var h=$(window).scrollTop();
		if(h<=1573){
			$('.aside').hide();
		}
		if(h>=1573){
			$('.aside').fadeIn(500);
			$('.aside ul li').eq(1).css('background-color', '#b52436').siblings('').css('background-color', '');
		}
		if(h>=3073){
			$('.aside ul li').eq(2).css('background-color', '#b52436').siblings('').css('background-color', '');
		}
		if(h>=4289){
			$('.aside ul li').eq(3).css('background-color', '#b52436').siblings('').css('background-color', '');
		}
		if(h>=5221){
			$('.aside ul li').eq(4).css('background-color', '#b52436').siblings('').css('background-color', '');
		}
		if(h>=6437){
			$('.aside ul li').eq(5).css('background-color', '#b52436').siblings('').css('background-color', '');
		}
		if(h>=7653){
			$('.aside ul li').eq(6).css('background-color', '#b52436').siblings('').css('background-color', '');
		}
		if(h>=8869){
			$('.aside ul li').eq(7).css('background-color', '#b52436').siblings('').css('background-color', '');
		}
		if(h>=10085){
			$('.aside ul li').eq(8).css('background-color', '#b52436').siblings('').css('background-color', '');
		}
		
		if(h>=11300){
			$('.aside').hide();
		}
	})
	$('.aside ul li').hover(function() {
		$(this).css('background-color', '#b52436');;
	}, function() {
		$(this).css('background-color', '');
	});
})
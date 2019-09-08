$(function(){
	$('.nav_ul li').click(function(){
		$(this).addClass('add000').siblings().removeClass('add000');
		$(this).addClass('add_li').siblings().removeClass('add_li');
	})
	//	倒计时
	var timer;
	clearInterval(timer);
	
	var h =$('.hour').html();
	var m =$('.minute').html();
	var s =$('.second').html();
	var time=h*60*60+m*60+s*1;
	console.log(time);
		
	timer=setInterval(function(){
		time--;
		h=parseInt(time/60/60%24);
		m=parseInt(time/60%60);
		s=parseInt(time%60);
		$('.hour').html(h);
		$('.minute').html(m);
		$('.second').html(s);
		if(h<10){
			$('.hour').html('0'+h);
		}
		if(m<10){
			$('.minute').html('0'+m);
		}
		if(s<10){
			$('.second').html('0'+s);
		}
	},1000)
	
	$(window).scroll(function(){
		var h=$(window).scrollTop();
		console.log(h);
		if(h>=300){
			$('.tab_nav').addClass('tab_fixed');
		}else{
			$('.tab_nav').removeClass('tab_fixed');
		}
	})
	
})

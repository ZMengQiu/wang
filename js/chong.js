//充值面额
$(function(){
//	充话费
	$('.mian ul li').click(function(){
		var n=$(this).index();
		$('.mian ul li').eq(n).children('i').removeClass('i_hide');
		$('.mian ul li').eq(n).siblings().children('i').addClass('i_hide');
		$('.mian ul li i').eq(n).children('span').addClass('icon-checked');
		$('.mian ul li i').eq(n).siblings().children('span').removeClass('icon-checked');
		$(this).css('border-color','#e31436').siblings().css('border-color','');
		if(n==0){
			$('.imp').html('9.98~10.00');
		}
		if(n==1){
			$('.imp').html('19.96~20.00');
		}
		if(n==2){
			$('.imp').html('29.94~30.00');
		}
		if(n==3){
			$('.imp').html('49.80~50.00');
		}
		if(n==4){
			$('.imp').html('99.50~100.00');
		}
		if(n==5){
			$('.imp').html('199.00~200.00');
		}
		if(n==6){
			$('.imp').html('298.50~300.00');
		}
		if(n==7){
			$('.imp').html('499.00');
		}
	})
//	冲流量
	$('.mian0 ul li').click(function(){
		var n=$(this).index();
		$('.mian0 ul li').eq(n).children('i').removeClass('i_hide');
		$('.mian0 ul li').eq(n).siblings().children('i').addClass('i_hide');
		$('.mian0 ul li i').eq(n).children('span').addClass('icon-checked');
		$('.mian0 ul li i').eq(n).siblings().children('span').removeClass('icon-checked');
		$(this).css('border-color','#e31436').siblings().css('border-color','');
		if(n==0){
			$('.imp0').html('¥ 2.02~7.78');
			$('.gg').css('display','');
		}
		if(n==1){
			$('.imp0').html('¥ 2.53~10.00');
			$('.gg').css('display','');
		}
		if(n==2){
			$('.imp0').html('¥ 5.56~19.19');
			$('.gg').css('display','');
		}
		if(n==3){
			$('.imp0').html('¥ 2.53~24.24');
			$('.gg').css('display','');
		}
		if(n==4){
			$('.imp0').html('¥ 4.00');
			$('.gg').css('display','inline-block');
		}
		if(n==5){
			$('.imp0').html('¥ 4.04~50.00');
			$('.gg').css('display','');
		}
		if(n==6){
			$('.imp0').html('¥ 70.00');
			$('.gg').css('display','');
		}
	})
	
//	充话费 冲流量
	$('.sec_title ul li').click(function(){
		$(this).addClass('li_current').siblings().removeClass('li_current');
	})
	
	
	$('#tel').blur(function(){
		$('.tel_info').css('display','inline');
	})
	$('#tel').focus(function(){
		$('.tel_info').css('display','none');
	})
	
	$('.sec_title ul li').eq(0).click(function(){
		$('.mian').css('display','block');
		$('.mian0').css('display','none');
		$('.jg_one').css('display','block');
		$('.jg_two').css('display','none');
	})
	$('.sec_title ul li').eq(1).click(function(){
		$('.mian0').css('display','block');
		$('.mian').css('display','none');
		$('.jg_two').css('display','block');
		$('.jg_one').css('display','none');
	})
	
	$('.other').hover(function(){
		$('.morelist').css('display','block');
	},function(){
		$('.morelist').css('display','');
	})
})

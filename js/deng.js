$(function(){
	$('.shi').click(function(){
		if($('.ku').hasClass('bg_ku')){
			$('.ku').removeClass('bg_ku');
		}else{
			$('.ku').addClass('bg_ku');
		}
	})
//	手机登录 邮箱登录
	$('.sjdl').click(function(){
		$('.zmqq').css('display','block');
		$('.zmqq0').css('display','none');
		$(this).css('color','#e31436');
		$('.yxdl').css('color','');
	})
	$('.yxdl').click(function(){
		$('.zmqq0').css('display','block');
		$('.zmqq').css('display','none');
		$(this).css('color','#e31436');
		$('.sjdl').css('color','');
	})
})

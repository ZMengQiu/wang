// 头部3
$(function(){
	$('.k1').hover(function() {
		$('.kk_1').css('display', 'block');
	}, function() {
		$('.kk_1').css('display', '');
	});
	$('.k2').hover(function() {
		$('.kk_2').css('display', 'block');
	}, function() {
		$('.kk_2').css('display', '');
	});
	$('.k3').hover(function() {
		$('.kk_3').css('display', 'block');
	}, function() {
		$('.kk_3').css('display', '');
	});
//	固定导航
	$(window).scroll(function(){
		var h=$(window).scrollTop();
		if(h>=1350){
			$('.right_top').css('position','fixed');
		}else{
			$('.right_top').css('position','');
		}
	})
	//	地址
	$('.di_top ul li').eq(0).click(function(){
		$('.bo_one').css('display','block').siblings().css('display','none');
	})
	$('.di_top ul li').eq(1).click(function(){
		$('.bo_two').css('display','block').siblings().css('display','none');
		$('.bo_one').css('display','none');
	})
	$('.di_top ul li').eq(2).click(function(){
		$('.bo_three').css('display','block').siblings().css('display','none');
		$('.bo_one').css('display','none');
	})
	$('.di_top ul li').click(function(){
		var p=$(this).index();
		$('.di_top ul li').eq(p).children('i').addClass('kong');
		$(this).siblings().children('i').removeClass('kong');
	})
	$('.zzz').click(function(){
		$('.biao').css('display','block')
	})
	$('.di_top .close').click(function(){
		$('.biao').css('display','none')
	})
	//	点击换图
	$('.small_img li').eq(0).click(function(){
		$(this).css('border','3px solid red').siblings().css('border','');
		$('.big_img').attr('src','../images/gm1.jpg')
	})
	$('.small_img li').eq(1).click(function(){
		$(this).css('border','3px solid red').siblings().css('border','');
		$('.big_img').attr('src','../images/gm2.jpg')
	})
	//	购买数量
	$('.liang input').val(function(index,value){
		var val=$('.liang input').val()
		$('.jian').click(function(){
			if(val<1){
				val=1;
			}
			$('.liang input').val(val--);
		})
		$('.jia').click(function(){
			$('.liang input').val(val++);
		})
	})
	
	//	定时器评论
	var n=0;
	var timer;
	function go(){
		clearInterval(timer);
		timer=setInterval(function(){
		n++;
		if(n>4){
			n=0;
		}
		$('.ping li').eq(n).fadeIn(1000).siblings().fadeOut(1000);
	},3000)
	}
	go();
	$('.ping').hover(function(){
		clearInterval(timer);
	},function(){
		go();
	})
	//	商品详情 用户评论
	$('.shang').click(function(){
		$(this).addClass('add_red');
		$('.shang>i').addClass('zmq_i');
		$('.yong>i').removeClass('zmq_i');
		$('.yong').removeClass('add_red');
	})
	$('.yong').click(function(){
		$(this).addClass('add_red');
		$('.yong>i').addClass('zmq_i');
		$('.shang>i').removeClass('zmq_i');
		$('.shang').removeClass('add_red');
	})
	$('.sjgm').hover(function(){
		$('.ss_2').addClass('change_ss2');
	},function(){
		$('.ss_2').removeClass('change_ss2');
	})
	//	展开收起
	var tbnum=$('.table').children().length;//记录总数
//	console.log(tbnum);
	if(tbnum>5){
		$('.table').children().addClass('hide');
		$('.table').children(':lt(5)').addClass('list').removeClass('hide');//默认显示5条
		$('.none').addClass('hide');
		//点击展开
		$('.more').click(function(){
			var listnum=$('.table').children('.list').length;
//			console.log(listnum)
			var numtr=listnum+2;//每次查看都多加载1条
//			console.log(numtr)
			if(numtr>tbnum){
				$('.table').children().addClass('list').removeClass('hide');
				$('.more').addClass('hide');
				$('.none').removeClass('hide');
			}else{
				$('.table').children(':lt('+numtr+')').addClass('list').removeClass('hide');
			}
		})
	}else{
//		div少于5条时设置底部按钮
		$('.more').addClass('hide');
		$('.none').removeClass('hide');
	}
	$('.none').click(function(){
		$('.onlyone').addClass('hide');
		$('.more').removeClass('hide');
		$('.none').addClass('hide');
	})
	// 全部 有图 追平
	$('.xuan ul li').eq(0).click(function(event) {
		$('.icon_1').addClass('new_icon').parent().siblings('').children('.xuan_icon').removeClass('new_icon');
	});
	$('.xuan ul li').eq(1).click(function(event) {
		$('.icon_2').addClass('new_icon').parent().siblings('').children('.xuan_icon').removeClass('new_icon');
	});
	$('.xuan ul li').eq(2).click(function(event) {
		$('.icon_3').addClass('new_icon').parent().siblings('').children('.xuan_icon').removeClass('new_icon');
	});
	$('.fang').click(function(event) {
		if($('.xuan ul li em').hasClass('fang_red')){
			$('.xuan ul li em').removeClass('fang_red');
		}else{
			$('.xuan ul li em').addClass('fang_red');
		}
	});
	// 评论分页
	var m=0;
	$('.ye li').eq(0).click(function(event) {
		m++;
		if(m>3){
			m=0;
		}
		$(this).css('border-color', 'red').siblings('').css('border-color', '');
		$('.pinglun').css('top', -m*1485+'px');
	});
	$('.ye li').eq(6).click(function(event) {
		m--;
		if(m<0){
			m=3;
		}
		$(this).css('border-color', 'red').siblings('').css('border-color', '');
		$('.pinglun').css('top', -m*1485+'px');
	});
	$('.ye li').eq(1).click(function(event) {
		$(this).addClass('ye_red').siblings('').removeClass('ye_red');
		$('.pinglun').css('top',0+'px');
	});
	$('.ye li').eq(2).click(function(event) {
		$(this).addClass('ye_red').siblings('').removeClass('ye_red');
		$('.pinglun').css('top', -1*1485+'px');
	});
	$('.ye li').eq(3).click(function(event) {
		$(this).addClass('ye_red').siblings('').removeClass('ye_red');
		$('.pinglun').css('top', -2*1485+'px');
	});
	$('.ye li').eq(4).click(function(event) {
		$(this).addClass('ye_red').siblings('').removeClass('ye_red');
		$('.pinglun').css('top', -3*1485+'px');
	});
	// 1/5翻页
	var x=1;
	$('.but_lt').click(function(event) {
		x++;
		if(x>5){
			x=1;
		}
		$('.bian').html(x);
	});
	$('.but_gt').click(function(event) {
		x--;
		if(x<1){
			x=5;
		}
		$('.bian').html(x);
	});
//	回顶部
	$('.aside ul li:nth-last-child').click(function(){
		$('html,body').animate({'scrolltop':0},500)
	})	
})
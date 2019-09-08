/*
* @Author: hp
* @Date:   2019-08-22 14:50:02
* @Last Modified by:   hp
* @Last Modified time: 2019-08-26 10:45:11
*/
$(function(){
		$('.title-1').hover(function() {
		$('.list0-1').css('display', 'block');
		$('.menu1').addClass('add');
		$('.title-1 .img_down').attr('src','images/up.png');
	}, function() {
		$('.list0-1').css('display', '');
		$('.menu1').removeClass('add');
		$('.title-1 .img_down').attr('src','images/down.png');
	});

	$('.title-2').hover(function() {
		$('.list0-2').css('display', 'block');
		$('.menu2').addClass('add');
		$('.title-2 .img_down').attr('src','images/up.png');
	}, function() {
		$('.list0-2').css('display', '');
		$('.menu2').removeClass('add');
		$('.title-2 .img_down').attr('src','images/down.png');
	});

	$('.title-3').hover(function() {
		$('.list0-3').css('display', 'block');
		$('.menu3').addClass('add');
		$('.title-3 .img_down').attr('src','images/up.png');
	}, function() {
		$('.list0-3').css('display', '');
		$('.menu3').removeClass('add');
		$('.title-3 .img_down').attr('src','images/down.png');
	});

	$('.title-4').hover(function() {
		$('.list0-4').css('display', 'block');
		$('.menu4').addClass('add');
		$('.title-4 .img_down').attr('src','images/up.png');
	}, function() {
		$('.list0-4').css('display', '');
		$('.menu4').removeClass('add');
		$('.title-4 .img_down').attr('src','images/down.png');
	});

	$('.title-5').hover(function() {
		$('.list0-5').css('display', 'block');
		$('.menu5').addClass('add');
		$('.title-5 .img_down').attr('src','images/up.png');
	}, function() {
		$('.list0-5').css('display', '');
		$('.menu5').removeClass('add');
		$('.title-5 .img_down').attr('src','images/down.png');
	});

	$('.list0 a').hover(function() {
		$(this).css('color', 'red');
	}, function() {
		$(this).css('color', '');
	});
	// 隐藏的导航
	/*$('.tab-ul>li').hover(function() {
		n=$(this).index();
		console.log(n);
		$('.tab-ul>li').eq(n).children('.tab-icon').attr('src', "images/li-0"+n+".png");
	}, function() {
		$('.tab-ul>li').eq(n).children('.tab-icon').attr('src', "images/li-"+n+".png");
	});*/
	$('.toptab').hover(function() {
		$('.tab-ul').fadeIn();
	}, function() {
		$('.tab-ul').fadeOut();
	});
	$('.tab-ul>li').eq(0).hover(function() {
		$('.box-one').show();
	}, function() {
		$('.box-one').hide();
	});
	$('.tab-ul>li').eq(1).hover(function() {
		$('.box-two').show();
	}, function() {
		$('.box-two').hide();
	});
	$('.tab-ul>li').eq(2).hover(function() {
		$('.box-three').show();
	}, function() {
		$('.box-three').hide();
	});
	$('.tab-ul>li').eq(3).hover(function() {
		$('.box-four').show();
	}, function() {
		$('.box-four').hide();
	});
	$('.tab-ul>li').eq(4).hover(function() {
		$('.box-five').show();
	}, function() {
		$('.box-five').hide();
	});
	$('.tab-ul>li').eq(5).hover(function() {
		$('.box-six').show();
	}, function() {
		$('.box-six').hide();
	});
	$('.tab-ul>li').eq(6).hover(function() {
		$('.box-seven').show();
	}, function() {
		$('.box-seven').hide();
	});
	$('.tab-ul>li').eq(7).hover(function() {
		$('.box-eight').show();
	}, function() {
		$('.box-eight').hide();
	});
	$('.tab-ul>li').eq(8).hover(function() {
		$('.box-nine').show();
	}, function() {
		$('.box-nine').hide();
	});
	$('.tab-ul>li').eq(9).hover(function() {
		$('.box-ten').show();
	}, function() {
		$('.box-ten').hide();
	});
	$('.tab-ul>li').eq(10).hover(function() {
		$('.box-eleven').show();
	}, function() {
		$('.box-eleven').hide();
	});
})
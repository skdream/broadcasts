$(function(){
	$(".li-title").on("click",function(){

		$(this).children('img').attr('src','images/col_down.png').css({width: '12px',height: '7px'}).addClass('test')
		.closest('.li-wrap').siblings('.level-2').show()
		.parent('.level-1').siblings().children('.level-2').hide()
		.siblings('.li-wrap').find('#left-img').removeClass('test')
		.attr('src','images/col_normol.png').css({width: '7px',height: '12px'})

		return false;
	})
})
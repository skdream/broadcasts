/*  
* @description: 蜗牛直播后台  
* @author: wangchao  
* @update: name (2014-11-19 13:50)  
*/ 
$(function(){

	inputBlur();

	$("#login").on("click",function(){
		var username = $("#username").val();
			password = $("#password").val();
		if(username == ""){
			$("#uname-img img").attr("src","images/fail.png").show();
		}
		if(password == ""){
			$("#pwd-img img").attr("src","images/fail.png").show();
		}
		else{
			$(this).text("登录中...");
		}
	})
})
//输入框状态判断
function inputBlur(){
	$("#username").blur(function(){ 
		var username = $(this).val();
		if(username == ""){
			$("#uname-img img").show();
		}else{
			$("#uname-img img").attr("src","images/success.png").show();
		}
	});

	$("#password").blur(function(){ 
		var username = $(this).val();
		if(username == ""){
			$("#pwd-img img").show();
		}else{
			$("#pwd-img img").attr("src","images/success.png").show();
		}
	});
}
//弹窗
function blockShow(){
	$.blockUI({
			message: $("#popFail").html(),
			onBlock:function(){
				$('.blockOverlay').click($.unblockUI); 
			},
			css: {
			padding:0,
			marginLeft: '-115px'
			}
		});
}
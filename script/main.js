$(document).ready(function(){
$("#refreshCaptcha").click(function(){
	$("#captcha_code").attr('src','php/captcha_code.php');
	});
$("#fakeSub").click(function(){
	sendContact();
});
function sendContact() {
	var valid;	
	valid = validateContact();
	if(valid == true) {
		jQuery.ajax({
		url: "php/login.php",
		data:'captcha='+$("#captcha").val(),
		type: "POST",
		success:function(data){
		$("#mail-status").html(data);
		},
		error:function (){}
		});
	}
}
	function validateContact() {
		var valid = true;	
		$(".demoInputBox").css('background-color','');
		$(".info").html('');
		if(!$("#captcha").val()) {
			$("#captcha-info").html("(required)");
			$("#captcha").css('background-color','#FFFFDF');
			valid = false;
		}
		return valid;
	}
});

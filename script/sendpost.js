'use strict';
    $(document).ready(function(){
    var url = new URL(window.location.href);
    var urlParamSort = url.searchParams.get("sort");
    var urlParamCurrentPage = url.searchParams.get("page");
    var convertedCurrentPage = parseInt(urlParamCurrentPage);
    if (urlParamSort === null && urlParamCurrentPage === null)
    {
        loadPost('post_id', 1);
    }
    else {
        loadPost(urlParamSort, convertedCurrentPage);
    }
    $("#submit").click(function(){
    var data = {
        name: $("#uName").val(),
        email: $("#email").val(),
        homepage: $("#homepage").val(),
        message: $("#message").val(),
        captcha: $("#captcha").val()
    };
	    $.ajax({
			type: "POST",
			url: "php/login.php",
			data: data,
			cache: false,
            success: function(result)
            {
                $("#messageInfo").empty();
                if (result == 'Nice done'){
                    $(".newMembInput").val('');
                    $("#message").val('');
                    $('#eml').text('Email ↕');
                    $('#ur').text('Username ↕');
                    loadPost('date', 1);
                     $("#dt").text('Date ↑');
                     $("#captcha_code").attr('src','php/captcha_code.php');
                     $("#captcha").css("background", "white"); 
                    }
                $("#messageInfo").append(result);
            
        }
	    });
    return false;
});
});
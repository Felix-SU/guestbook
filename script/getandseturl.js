'use strict';
var checkerUsr = false;
var checkerEmail = false;
var checkerDate = false;
var textEl = '';
$("#usr").click(function(){
   setParameters(1, $(this).text());
});
$("#eml").click(function(){
   setParameters(2, $(this).text());
});
$("#dt").click(function(){
   setParameters(3, $(this).text());
});
function setParameters(variant,thisText) {
            var url = new URL(window.location.href);
            var urlParamCurrentPage = url.searchParams.get("page");
            var urlParamSort = url.searchParams.get("sort");
            parseInt(urlParamCurrentPage);
            if (isNaN(urlParamCurrentPage)) {urlParamCurrentPage = 1}
            if (urlParamSort == null) {urlParamCurrentPage = 1}
            if (urlParamSort == null) {urlParamSort = 'post_id'}
            switch(variant)
            {
                case 0: 
                    window.history.pushState('string', 'Title', window.location.pathname+'?page='+thisText+'&sort='+ urlParamSort);
                    loadPost(urlParamSort, thisText);
                break;
                case 1:
                    $('#eml').text ('Email ↕');
                    $('#dt').text('Date ↕');
                    if (checkerUsr == true) {
                      $("#usr").text('Username ↓'); 
                      var textEl = 'authorDESC';
                      checkerUsr = false;
                      checkerEmail = false;
                      checkerDate = false;
                      
                    }
                    else if (checkerUsr == false) {
                        $("#usr").text('Username ↑');
                        var textEl = 'author';
                        checkerUsr = true;
                    }
                    window.history.pushState('string', 'Title', window.location.pathname+'?page='+ urlParamCurrentPage +'&sort='+textEl+'');
                    loadPost(textEl, urlParamCurrentPage);
                break;
                case 2:
                    $('#usr').text ('Username ↕');
                    $('#dt').text('Date ↕');
                    if (checkerEmail == true) {
                      $("#eml").text('Email ↓');
                      var textEl = 'emailDESC';
                      checkerUsr = false;
                      checkerEmail = false;
                      checkerDate = false;
                    }
                    else if (checkerEmail == false) {
                        $("#eml").text('Email ↑');
                        var textEl = 'email';
                        checkerEmail = true;
                    }
                    window.history.pushState('string', 'Title', window.location.pathname+'?page='+ urlParamCurrentPage +'&sort='+textEl+'');
                    loadPost(textEl, urlParamCurrentPage);
                break;
                case 3:
                    $('#eml').text ('Email ↕');
                    $('#usr').text('Username ↕');
                    if (checkerDate == true) {
                      $("#dt").text('Date ↓');
                      var textEl = 'dateDESC';
                      checkerUsr = false;
                      checkerEmail = false;
                      checkerDate = false;
                    }
                    else if (checkerDate == false) {
                        $("#dt").text('Date ↑');
                        var textEl = 'date';
                        checkerDate = true;
                    }
                    window.history.pushState('string', 'Title', window.location.pathname+'?page='+ urlParamCurrentPage +'&sort='+textEl+'');
                    loadPost(textEl, urlParamCurrentPage);
                break;
            }
        }
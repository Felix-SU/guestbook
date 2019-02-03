function loadPost(currentAction, currentPage)
{
var i = 0;
var currentHeight = 200;
$.ajax({ url: 'php/show.php',
         data: {
             action: currentAction,
             page: currentPage
        },
         type: 'post',
         success: function(output) {
            var data = $.parseJSON(output);
            var limit = 5, link = '', counter = 1,q = 0;
            if(data[1] >= 1 && data[2] <= data[1])
            {
                if (data[2] > (limit/2))
                {
                    link += "<div id = 'page"+counter+"' class = 'pages'>1</div>" +"... ";
                }
                for (var x = data[2]; x <= data[1]; x++)
                {
                    if (counter < limit)
                    {
                        link += "<div id = 'page"+counter+"' class = 'pages' >"+x+"</div>";
                        counter++;
                    }
                }   
                    if (data[2] < data[1] - (limit/2))
                    {
                         link += "... " + "<div id = 'page"+counter+"' class = 'pages'  >"+data[1]+"</div>"; 
                    }
            }
            $("#pagesContainer").empty();
            $("#pagesContainer").append(link);
            for(var q = 1; q <= counter;++q)
            {
                    $("#page"+q).click(function(){
                    setParameters(0, $(this).text());
                 });
            }
            if (data[3] == 0)
            {
                $("#postContainer").append("<h1 id = 'noPost' class = 'noPost'>No one has left a post  ¯\\_(ツ)_/¯ <br>Be the first ༼ つ  ͡° ͜ʖ ͡° ༽つ</h1>");
            }
            else
            {
                $('#postContainer').empty();
                for (i = 0; i < data[3] &&  i < data[5]; i++ ) {
                        if (i == 0) {
                            $("#postContainer").append("<div class = 'post' id = 'post0'><table><tr><th class = 'tableTitle'><div id = 'postId' class = 'postId'></div><div id = 'author'></div>Homepage: <a href id = 'site'></a></th></tr><tr><td class = 'tableBody'><p id = 'postsMessage' class = 'postsMessage'></p><div class = 'bottomPost'><div id = 'postDate' class = 'date'></div><div id = 'postEmail'></div></div></td></tr></table></div>")
                        }
                        if(i != 0){$( "#post0" ).clone().attr("id", "post"+i).appendTo("#postContainer");}
                        currentHeight += 226;
                        $(".container").css("height", currentHeight+"px");
                        $("#post"+i).find("#postId").text("#"+data[0][i]['post_id']);
                        $("#post"+i).find("#author").text(data[0][i]['author']);
                        $("#post"+i).find("#site").text(data[0][i]['homepage']);
                        $("#post"+i).find("#site").attr("href", data[0][i]['homepage']);
                        $("#post"+i).find("#postEmail").text('Email: '+data[0][i]['email']);
                        $("#post"+i).find("#postsMessage").text(data[0][i]['message']);
                        $("#post"+i).find("#postDate").text( "wrote: " + data[0][i]['date']);
                    }
            }
        }
    });
}
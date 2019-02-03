<?php
header("Content-Type: text/html; charset=utf-8;");
header("Content-Security-Policy: default-src 'self' https://ajax.googleapis.com")
?>

<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8" />
    <title>Welcome To Guest Book</title>
    <link rel="stylesheet" type="text/css" href="style/main.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src = "script/loadpost.js"></script>
    <script src = "script/sendpost.js"></script>
    <script src = "script/main.js"></script>

</head>

<body>

    <h1 class = 'mainTitle'>Super Guest Book</h1>
    <div class = 'newMember'>
        <h1 class = 'mainTitle'>Create New Entry</h1>
        <div class = 'newMembBox'>
            <label for = 'uName'>*Name </label>
            <input class = 'newMembInput' id = 'uName' type = 'text' placeholder = 'Please Write Your Name'>
            <br>
            <label for = 'email'>*Email</label>
            <input class = 'newMembInput' id = 'email' type = 'email' placeholder = 'Please Write Your Email'>
            <br>
            <label for = 'homepage'>Homepage</label>
            <input class = 'newMembInput homepage' id = 'homepage' type = 'url' placeholder = 'Please Write Your homepage url'>
            <br>
            <div class = 'captchaInpBlock'>
                <div>*Captcha</div> 
                <input type="text" placeholder = "Write captcha's code" name="captcha" id="captcha" class="newMembInput captchaInp"><br>
            </div>
            <div class = 'captchaImg'>
                <img id="captcha_code" src="php/captcha_code.php" />
                <button name="submit" id = "refreshCaptcha" class="btnRefresh">⟳</button>
            </div>
                <br>
                <label for = "message">*Message</label>
                <textarea id = 'message' class = 'message' rows = '4' cols = '50' name = 'comment' ></textarea>
                <br>
                <div id = "messageInfo" class = "messageInfo"></div>
                <button class = "submitBut" id = "submit">Click Me To Submit</button>
        </div>
    </div>

    <div class = 'container'>
        <div class = 'anotherOneContainer'>
            <div class = 'sortMenu' id = 'sortMenu'>
            <div id = 'usr' class = 'sort'>Username ↕</div>
            <div id = 'eml' class = 'sort' >Email ↕</div>
            <div id = 'dt' class = 'sort' >Date ↕</div>
        </div>
        <div id = 'pagesContainer' class = 'pagesContainer'></div>
    </div>
    <div id = "postContainer" class = "postContainer">
        </div>

    <script src = "script/getandseturl.js"></script>
  
</body>

</html>
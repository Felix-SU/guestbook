<?php

header("Content-Type: text/html; charset=utf-8");
require_once("connect.php");
session_start();
define('TIMEZONE', 'Asia/Almaty');
date_default_timezone_set(TIMEZONE);

    $current_date = date('Y-m-d H:i:s');
    $uName = strip_tags(mysqli_real_escape_string($conn, trim($_POST['name'])));
    $email = strip_tags(mysqli_real_escape_string($conn, trim($_POST['email'])));
    $homepage = strip_tags(mysqli_real_escape_string($conn, trim($_POST['homepage'])));
    $message = strip_tags(mysqli_real_escape_string($conn, trim($_POST['message'])));
    $captcha = strip_tags(mysqli_real_escape_string($conn, trim($_POST["captcha"])));
    $userip = getRealIpAddr();
    $browser = get_browser (null, true);
    $userBrowser = ($browser['browser']);
    if($captcha !==$_SESSION["captcha_code"]){
        die ('Captcha is incorrect!');
    }
    if ($uName == "" || $email == "" || $message == ""){
        if ($uName == "" ) die("Name is empty");
        if ($email == "" ) die("Email is empty");
        if ($message == "" ) die("Message is empty");
    }
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        die ("$email is not valid use email like this example@example.com");
    }
    else if (preg_match_all('/[^A-Za-z0-9]+/',$uName)) {
        die ('You can use only english letters and digits');
    }
    else if (!filter_var($homepage, FILTER_VALIDATE_URL))
    {
        die ("Homepage's URL is incorrect use URL like this https.example.com");
    }
    else {
        $query = "SELECT * FROM `users` WHERE username = '$uName'";
            $data = mysqli_query($conn, $query);
            if(mysqli_num_rows($data) == 0) {
            $query = "INSERT INTO `users` (username, email, homepage,  userip, userbrowser) VALUES ('$uName', '$email', '$homepage', '$userip', '$userBrowser')";
            mysqli_query($conn, $query);
            $query2 = "INSERT INTO `posts` (email, homepage, message, author, date) VALUES ('$email', '$homepage', '$message', '$uName', '$current_date')";
            mysqli_query($conn, $query2);
            echo 'Nice done';
            mysqli_close($conn);
            }
            else {
                echo 'User is exists';
            }
        }
function getRealIpAddr()
{
if (!empty($_SERVER['HTTP_CLIENT_IP']))
    {
        $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) 
    {
        $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
        $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

?>
<?php

header("Content-Type: text/html; charset=utf-8");

$servername = "localhost";
$username = "root";
$password = "";
$db = "guestbook";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn -> connect_error) {
    die("Connection failed: ". $conn ->connect_error);
}

?>
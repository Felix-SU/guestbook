<?php

header("Content-Type: text/html; charset=utf-8");

function postsRequest($sortby, $currentPage)
{
require_once("connect.php");

    strip_tags(mysqli_real_escape_string($conn, trim($sortby)));
    strip_tags(mysqli_real_escape_string($conn, trim($currentPage)));
    $no_of_records_per_page = 25;
    $offset = ($currentPage-1) * $no_of_records_per_page;
    $i = 0;
    $rows = array();
    $limit=5;
    $total_pages_sql = "SELECT COUNT(*) FROM posts";
    $result = mysqli_query($conn,$total_pages_sql);
    $total_rows = mysqli_fetch_array($result)[0];
    $total_pages = ceil($total_rows / $no_of_records_per_page);
    $sql = "SELECT * FROM posts ORDER BY $sortby LIMIT $offset, $no_of_records_per_page";
    $res_data = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_array($res_data)){
        $rows[$i] = $row;
        $i++;
    }
    //$total_rows = 25;
    echo json_encode(array($rows,$total_pages,$currentPage,$total_rows,$currentPage,$i));
    mysqli_close($conn);
}

if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    $currentPage = $_POST['page'];
    switch($action) {
        case 'post_id' : postsRequest('post_id',$currentPage);  exit;
        case 'post_idDESC' : postsRequest('post_id DESC',$currentPage); exit;
        case 'author' : postsRequest('author',$currentPage); exit;
        case 'authorDESC' : postsRequest('author DESC',$currentPage); exit;
        case 'email' : postsRequest('email',$currentPage); exit;
        case 'emailDESC' : postsRequest('email DESC',$currentPage); exit;
        case 'date' : postsRequest('date DESC',$currentPage); exit;
        case 'dateDESC' : postsRequest('date',$currentPage); exit;
    }
}

?>
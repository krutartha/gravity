<?php 
include('./db.php');
session_start();

if(isset($_POST['addBtn'])){
    $m1 = mysqli_escape_string($conn, $_POST['m1']);
    $m2 = mysqli_escape_string($conn, $_POST['m2']);
    $r = mysqli_escape_string($conn, $_POST['radius']);

    if(empty($m1||$m2||$r)){
        //do nothing
    }

    $push_query = mysqli_query($conn, "INSERT INTO data(mass1, mass2, radius) VALUES ('$m1', '$m2', '$r')");
    





}
?>
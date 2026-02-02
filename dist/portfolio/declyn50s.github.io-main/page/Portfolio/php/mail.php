<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];
$to = "derval.botuna@gmail.com"; //
$subject = "Mail From Website"; //

$headers = "From: ".$name. "\r\n" .
"CC: "

$txt = "You have recived an e-mail from ".$name ."\r\nEmail: " .$email ."\r\n" 
    Message: ". $message;

if($email!=NULL) {
    mail($to, $subject,  $txt, $headers);
}



<?php
if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
}

$to = "wadahx052@gmail.com";
$subject = "msg from my website";
$body = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email";

if(mail($to, $subject, $body, $headers)){
    echo "Email sent successfully!";
}
else{
    echo "Error sending email.";
}
?>
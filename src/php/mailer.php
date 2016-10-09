<?php 
if(isset($_POST['submit'])){
    $to = "f3rr13r@hotmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $tel_number = $_POST['telephone-number'];
    $message = $_POST['message'];

    $subject = "New enquiry from scm contact form";
    $message = "An enquiry has been recieved from: " . $name . "  Message:" . $message . ". Telephone: " . $tel_number;
    $headers = "From:" . $from;
    
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    }
?>
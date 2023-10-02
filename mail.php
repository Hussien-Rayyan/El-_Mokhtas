<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone   = $_POST['phone'];
    $message = $_POST['message'];
    // Set recipient email address
    $to = 'hussienyousef235@gmail.com';

    // Set email subject
    $subject = 'New message from ' . $name;

    // Set email message
    $message_body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Set email headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $message_body, $headers)) {
        // Email sent successfully
        echo 'Thank you for contacting us. We will get back to you soon.';
    } else {
        // Email failed to send
        echo 'Sorry, something went wrong. Please try again later.';
    }
}

?>
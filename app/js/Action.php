<?php
session_start();
new post_contact($_POST);
class post_contact 
{
    public function __construct($post_data) 
	{
		$this->send_contact_form($post_data);
    }
	function send_contact_form($post_data) 
	{
	$main_email = 'first_test_email@mail.com';
	$boss_email = 'second_test_email@mail.com';
        if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['tel'])) 
		{
			$headers = "MIME-Version: 1.0" . PHP_EOL .
			"Content-Type: text/html; charset=utf-8" . PHP_EOL .
			'From: '.$main_email.' <'.$main_email.'>' . PHP_EOL;
			$message = '<p style="font-size:18px;color:grey">Form: <span style="font-size:20px;color:#000">"Main Top Form"</span></p>';
			$message .= '<p style="font-size:18px;color:grey">IP: <span style="font-size:20px;color:#000">'.$_SERVER['REMOTE_ADDR'].'</span></p>';
			$message .= '<p style="font-size:18px;color:grey">Name: <span style="font-size:20px;color:#000">'.$_POST['name'].'</span></p>';
			$message .= '<p style="font-size:18px;color:grey">Email: <span style="font-size:20px;color:#000">'.$_POST['email'].'</span></p>';
			$message .= '<p style="font-size:18px;color:grey">Phone: <span style="font-size:20px;color:#000">'.$_POST['tel'].'</span></p>';
			mail($main_email, 'Main Form', $message, $headers );
			var_dump($_POST['name'],$_POST['email'],$_POST['tel']);
			$headers = "MIME-Version: 1.0" . PHP_EOL .
			"Content-Type: text/html; charset=utf-8" . PHP_EOL .
			'From: '.$boss_email.' <'.$boss_email.'>' . PHP_EOL;
			$message = '<p style="font-size:18px;color:grey">Form: <span style="font-size:20px;color:#000">"Main Top Form"</span></p>';
			$message .= '<p style="font-size:18px;color:grey">IP: <span style="font-size:20px;color:#000">'.$_SERVER['REMOTE_ADDR'].'</span></p>';
			$message .= '<p style="font-size:18px;color:grey">Name: <span style="font-size:20px;color:#000">'.$_POST['name'].'</span></p>';
			$message .= '<p style="font-size:18px;color:grey">Email: <span style="font-size:20px;color:#000">'.$_POST['email'].'</span></p>';
			$message .= '<p style="font-size:18px;color:grey">Phone: <span style="font-size:20px;color:#000">'.$_POST['tel'].'</span></p>';
			mail($boss_email, 'Main Form', $message, $headers );
		}
		// var_dump($_POST['name'],$_POST['email'],$_POST['tel']);
	}
}
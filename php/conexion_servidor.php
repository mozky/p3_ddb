<?php
	$servername = "localhost";
	$username = "root";
	$password = "n0m3l0s3";
	$dbname = "mysql";

	// Create connection
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES  \'UTF8\''));
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>

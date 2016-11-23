//Mío
<?php
  function insert_atributos(){

    $basedatos = $_POST["basedatos"];
    $tabla = $_POST["tabla"];
    $sitio = $_POST["sitio"];
    $atr1 = $_POST["atr1"];
    $ope1 = $_POST["ope1"];
    $val1 = $_POST["val1"];
    $atr2 = $_POST["atr2"];
    $ope2 = $_POST["ope2"];
    $val2 = $_POST["val2"];
    $servername;
    $username;
    $password;
    $dbname;

    if ($sitio==1){ //sitio 1
      $servername = "localhost";
      $username = "root";
      $password = "n0m3l0s3";
      $dbname = $basedatos;
    }else if($sitio==2){ //sitio 2
      $servername = "localhost";
      $username = "root";
      $password = "root";
      $dbname = $basedatos;
    }else if($sitio==3){  //sitio 3
      $servername = "localhost";
      $username = "root";
      $password = "root";
      $dbname = $basedatos;
    }

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES  \'UTF8\''));
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //$sql = "USE home1";
  	//$conn->query($sql);
    //$sql = "INSERT INTO $tabla (idDepto, nombre) VALUES ("D014", (SELECT nombre FROM $tabla WHERE $atr1 $ope1 \"$val1\" AND $atr2 $ope2 \"$val2\"))";
    //$conn->query($sql);

    $conn = null;
  }
  insert_atributos();
?>

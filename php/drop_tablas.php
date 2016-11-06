<?php
  function drop_tablas(){
    include "conexion_servidor.php";
  	$basedatos = $_POST["basedatos"];
    $tables = "";
  	$sql = "USE $basedatos";
  	$conn->query($sql);
    $sql = "SHOW TABLES";
    foreach ($conn->query($sql) as $row){
      $tables .= "<option value='$row[0]'>".$row[0]."</option>";
    }
    echo $tables;
    $conn = null;
  }
  drop_tablas();
?>

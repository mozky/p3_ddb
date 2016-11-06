<?php
  function listar_tablas(){
    include "conexion_servidor.php";
  	$basedatos = $_POST["basedatos"];
    $tables = "";
  	$sql = "USE $basedatos";
  	$conn->query($sql);
    $sql = "SHOW TABLES";
    foreach ($conn->query($sql) as $row){
      $tables .= "<option value='$row[0]'>".$row[0]."</option>";
    }
    $tables .= "</tbody>";
    echo $tables;
    $conn = null;
  }
  listar_tablas();
?>

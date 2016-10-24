<?php
  function listar_dimenciones(){
    include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
    $tables = "<option value=''> Selecciona dimension</option>";
	$sql = "USE $basedatos";
	$conn->query($sql);
    $sql = "SHOW TABLES";
    foreach ($conn->query($sql) as $row){
		if($row[0] != $basedatos){
			$tables .= "<option value='$row[0]'>".$row[0]."</option>";
		}
    }
    echo $tables;
    $conn = null;
  }
  listar_dimenciones();
?>

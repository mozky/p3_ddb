<?php
  function listar_tablas(){
    include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
	$tabla = $_POST["tabla"];
    $tables = "<thead><tr><th>id</th><th>atr 1</th><th>atr 2</th><th>atr 3</th><th>atr 4</th></tr></thead><tbody><tr><td>idTest</td><td>bla</td><td>ble</td><td>bli</td><td>bli</td></tr></tbody>";
	$sql = "USE $basedatos";
	$conn->query($sql);
    // $sql = "DESC $tabla";
    // foreach ($conn->query($sql) as $row){
		// $tables .= "<option value='$row[0]'>".$row[0]."</option>";
    // }
    echo $tables;
    $conn = null;
  }
  listar_tablas();
?>

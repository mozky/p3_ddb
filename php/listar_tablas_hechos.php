<?php
  function listar_tablas(){
    include "conexion_servidor.php";
    $tables = "<option value=''> Selecciona tabla de hechos</option>";
    $sql = "SHOW DATABASES";
    foreach ($conn->query($sql) as $row){
		$TH = $row[0];
		if($TH[0] == "f" && $TH[1] == "t"){
			$tables .= "<option value='$row[0]'>".$row[0]."</option>";
		}
    }
    echo $tables;
    $conn = null;
  }
  listar_tablas();
?>

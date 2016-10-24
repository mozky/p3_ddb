<?php
  function listar_tablas(){
    include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
    $tables = "<option value=''> Selecciona hecho</option>";
	$sql = "USE $basedatos";
	$conn->query($sql);
	$sql = "SHOW TABLES";
    foreach ($conn->query($sql) as $row){
		$nom = $row[0];
		if($nom[0] = "f" && $nom[1] = "t" && $nom[2] = "_"){
			$nomt = $row[0];
		}
    }
    $sql = "DESC $nomt";
    foreach ($conn->query($sql) as $row){
		$nom = $row[0];
		if($nom[0] == "k" && $nom[1] == "e" && $nom[2] == "y" && $nom[3] == "_"){
			
		}else{
			$tables .= "<option value='$row[0]'>".$row[0]."</option>";
		}
    }
    echo $tables;
    $conn = null;
  }
  listar_tablas();
?>

<?php
  function crear_tabla_hechos(){
    include "conexion_servidor.php";
	$nombreTH = $_POST["nombreTH"];
	$bd = $_POST["nombreDB"];
	$tabla = $_POST["nombreT"];
	$atributo = $_POST["nombreA"];
	$sql = "USE $bd";
	$conn->query($sql);
	$sql = "DESC $tabla";
	foreach ($conn->query($sql) as $row){
		if($row[0] == $atributo){
			$tipodato = $row[1];
		}
    }
	$sql = "USE $nombreTH";
	$conn->query($sql);
	$sql = "SHOW TABLES";
    foreach ($conn->query($sql) as $row){
		$nom = $row[0];
		if($nom[0] == "f" && $nom[1] == "t" && $nom[2] == "_"){
			$nomt = $row[0];
		}
    }
	$sql = "ALTER TABLE $nomt ADD $atributo $tipodato";
	$conn->query($sql);
    $conn = null;
  }
  crear_tabla_hechos();
?>

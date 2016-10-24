<?php
function elimina_medida(){
	include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
	$dimension = $_POST["dimension"];
	$medida = $_POST["medida"];
	
	$sql = "USE $basedatos";
	$conn->query($sql);
	
	$sql = "ALTER TABLE ".$dimension." DROP COLUMN ".$medida;
	$resultado = $conn->exec($sql);
	echo $resultado;
}

elimina_medida();
?>
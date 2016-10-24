<?php
function cambia_tipo_dato_medida(){
	include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
	$dimension = $_POST["dimension"];
	$medida = $_POST["medida"];
	$new_tipo_dato_medida = $_POST["new_tipo_dato_medida"];
	
	$sql = "USE $basedatos";
	$conn->query($sql);
	
	$sql = "ALTER TABLE ".$dimension." MODIFY COLUMN ".$medida." ".$new_tipo_dato_medida;
	$resultado = $conn->exec($sql);
	echo $resultado;
}

cambia_tipo_dato_medida();
?>
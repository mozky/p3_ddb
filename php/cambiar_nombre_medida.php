<?php
function cambia_nombre_medida(){
	include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
	$dimension = $_POST["dimension"];
	$medida = $_POST["medida"];
	$new_nombre_medida = $_POST["new_nombre_medida"];
	
	$sql = "USE $basedatos";
	$conn->query($sql);
    $sql = "DESC $dimension";
	$type_attr;
	foreach ($conn->query($sql) as $row){
		if($row[0] == $medida)
			$type_attr = $row["Type"];
    }
	$sql = "ALTER TABLE ".$dimension." CHANGE COLUMN ".$medida." ".$new_nombre_medida." ".$type_attr;
	
	$resultado = $conn->exec($sql);
	echo $resultado;
}

cambia_nombre_medida();
?>
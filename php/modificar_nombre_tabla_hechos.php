<?php
  function modificar_nombre_tabla_hechos(){
    include "conexion_servidor.php";
	$nombreth = $_POST["nombreTH"];
	$nombre = $_POST["nombre"];
	$nombreft = "ft_".$nombre;
	$sql = "USE $nombreth";
	$conn->query($sql);
	$sql = "SHOW TABLES";
    foreach ($conn->query($sql) as $row){
		$nom = $row[0];
		if($nom[0] = "f" && $nom[1] = "t" && $nom[2] = "_"){
			$nomt = $row[0];
		}
    }
	$sql = "ALTER TABLE $nomt RENAME $nombreft";
	$conn->query($sql);
    $conn = null;
  }
   modificar_nombre_tabla_hechos();
?>

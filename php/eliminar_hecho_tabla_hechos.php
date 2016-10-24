<?php
  function eliminar_hecho_tabla_hechos(){
    include "conexion_servidor.php";
	$nombre = $_POST["nombreTH"];
	$hecho = $_POST["nombreH"];
	$sql = "USE $nombre";
	$conn->query($sql);
	$sql = "SHOW TABLES";
    foreach ($conn->query($sql) as $row){
		$nom = $row[0];
		if($nom[0] == "f" && $nom[1] == "t" && $nom[2] == "_"){
			$nomt = $row[0];
		}
    }
	$aux = 0;
	$sql = "DESC $nomt";
    foreach ($conn->query($sql) as $row){
		$nom = $row[0];
		if($nom[0] == "k" && $nom[1] == "e" && $nom[2] == "y" && $nom[3] == "_"){
			
		}else{
			$aux++;
		}
    }
	if($aux == 1){
		echo "No se puede eliminar";
	}else{
		$sql = "ALTER TABLE $nomt DROP $hecho";
		$conn->query($sql);
	}
    $conn = null;
  }
   eliminar_hecho_tabla_hechos();
?>

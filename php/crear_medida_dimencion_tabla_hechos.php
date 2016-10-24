<?php
  function crear_medida_dimencion_tabla_hechos(){
    include "conexion_servidor.php";
	$nombre = $_POST["nombreTH"];
	$dimencion = $_POST["nombreD"];
	$medida = $_POST["nombreM"];
	$tipo = $_POST["nombreTD"];
	$sql = "USE $nombre";
	$conn->query($sql);
	$sql = "ALTER TABLE $dimencion ADD $medida $tipo";
	$conn->query($sql);
    $conn = null;
  }
   crear_medida_dimencion_tabla_hechos();
?>

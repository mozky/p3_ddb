<?php
  function crear_dimencion_tabla_hechos(){
    include "conexion_servidor.php";
	$nombre = $_POST["nombreTH"];
	$sql = "USE $nombre";
	$conn->query($sql);
	$sql = "DROP DATABASE $nombre";
	$conn->query($sql);
    $conn = null;
  }
   crear_dimencion_tabla_hechos();
?>

<?php
  function crear_dimencion_tabla_hechos(){
    include "conexion_servidor.php";
	$nombre = $_POST["nombreTH"];
	$bd = $_POST["nombreDB"];
	$tabla = $_POST["nombreT"];
	$atributo = $_POST["nombreA"];
	$nombreDim = "dim_".$tabla."_".$atributo;
	$nombreKey = "key_".$tabla."_".$atributo;
	$sql = "USE $nombre";
	$conn->query($sql);
	$sql = "CREATE TABLE $nombreDim($nombreKey int primary key)";
	$conn->query($sql);
	$sql = "ALTER TABLE $nombre ADD $nombreKey integer";
	$conn->query($sql);
	$sql = "ALTER TABLE $nombre ADD FOREIGN KEY ($nombreKey) REFERENCES $nombreDim($nombreKey)";
	$conn->query($sql);
    $conn = null;
  }
   crear_dimencion_tabla_hechos();
?>

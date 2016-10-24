<?php
  function crear_tabla_hechos(){
    include "conexion_servidor.php";
	$nombre = $_POST["nombreTH"];
	$bd = $_POST["nombreDB"];
	$tabla = $_POST["nombreT"];
	$atributo = $_POST["nombreA"];
	$nombreTH = "ft_".$nombre;
	$sql = "CREATE DATABASE $nombreTH";
	$conn->query($sql);
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
	$sql = "CREATE TABLE $nombreTH($atributo $tipodato)";
	$conn->query($sql);
    $conn = null;
  }
  crear_tabla_hechos();
?>



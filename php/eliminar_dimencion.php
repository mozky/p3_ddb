<?php
  function eliminar_dimension(){
    include "conexion_servidor.php";
  	$nombre = $_POST["nombreTH"];
    $dimension = $_POST["dimension"];
  	$sql = "USE $nombre";
  	$conn->query($sql);
  	$sql = "DROP TABLE $dimension";
  	$conn->query($sql);
    $nombreKey = str_replace("dim", "key", $dimension);
    $sql = "ALTER TABLE $nombre DROP COLUMN $nombreKey";
    $conn->query($sql);
    $conn = null;
  }
  eliminar_dimension();
?>

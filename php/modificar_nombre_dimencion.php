<?php
  function modificar_nombre_dimencion(){
    include "conexion_servidor.php";
  	$nombreth = $_POST["nombreTH"];
  	$dimension = $_POST["dimension"];
  	$nuevoNombre = $_POST["nuevoNombre"];
  	$sql = "USE $nombreth";
  	$conn->query($sql);

    // Modificar el nombre de las columnas
    $oldKey = str_replace("dim", "key", $dimension);
    $newKey = str_replace("dim", "key", $nuevoNombre);

    $sql = "ALTER TABLE $nombreth CHANGE $oldKey $newKey INTEGER";
    $conn->query($sql);

    $sql = "ALTER TABLE $dimension CHANGE $oldKey $newKey INTEGER";
    $conn->query($sql);

    // Modificar el nombre de la tabla de la dimension
    $sql = "ALTER TABLE $dimension RENAME $nuevoNombre";
    $conn->query($sql);

    $conn = null;
  }
  modificar_nombre_dimencion();
?>

<?php
  function count_query(){
    include "conexion_servidor.php";
  	$basedatos = $_POST["basedatos"];
    $tabla = $_POST["tabla"];
    $atributo = $_POST["atributo"];
    $operador = $_POST["operador"];
    $predicado = $_POST["predicado"];
    $result = "";
  	$sql = "USE $basedatos";
  	$conn->query($sql);
    $sql = "SELECT COUNT(*) FROM $tabla WHERE $atributo $operador $predicado";
    foreach ($conn->query($sql) as $row){
      $result .= $row[0];
    }
    echo $result;
    $conn = null;
  }
  count_query();
?>

<?php
  function count_query(){
    include "conexion_servidor.php";
  	$basedatos = $_POST["basedatos"];
    $tabla = $_POST["tabla"];
    $atr1 = $_POST["atr1"];
    $ope1 = $_POST["ope1"];
    $val1 = $_POST["val1"];
    $atr2 = $_POST["atr2"];
    $ope2 = $_POST["ope2"];
    $val2 = $_POST["val2"];
    $result = "";
  	$sql = "USE $basedatos";
  	$conn->query($sql);
    $sql = "SELECT COUNT(*) FROM $tabla WHERE $atr1 $ope1 $val1 AND $atr2 $ope2 $val2";
    foreach ($conn->query($sql) as $row){
      $result .= $row[0];
    }
    echo $result;
    $conn = null;
  }
  count_query();
?>

<?php
  function drop_atributos(){
    include "conexion_servidor.php";
  	$bd = $_POST["basedatos"];
  	$t = $_POST["tabla"];
    $result = "";
  	$sql = "USE $bd";
  	$conn->query($sql);
    $sql = "DESC $t";
    foreach ($conn->query($sql) as $row){
      $result .= "<option value='$row[0]'>".$row[0]."</option>";
    }
    echo $result;
    $conn = null;
  }
  drop_atributos();
?>

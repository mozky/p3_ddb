<?php
  function drop_bases(){
    include "conexion_servidor.php";
    $tables = "";
    $sql = "SHOW DATABASES";
    foreach ($conn->query($sql) as $row){
      $tables .= "<option value='$row[0]'>".$row[0]."</option>";
    }
    echo $tables;
    $conn = null;
  }
  drop_bases();
?>

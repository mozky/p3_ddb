<?php
  function listar_medidas(){
    include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
	$dimension = $_POST["dimension"];
    $medidas = "<option value=''> Selecciona medida</option>";
	$sql = "USE $basedatos";
	$conn->query($sql);
    $sql = "DESC $dimension";
    foreach ($conn->query($sql) as $row){
		$TH = $row[0];
		if(($TH[0] == "k") && ($TH[1] == "e") && ($TH[2] == "y"))
			continue;
		else
			$medidas .= "<option value='$row[0]'>".$row[0]."</option>";
    }
    echo $medidas;
    $conn = null;
  }
  listar_medidas();
?>

<?php

//funcion para obtener la lista de atributos en forma de tabla
function info_relacion($relacion){
	include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
	$sql = "USE $basedatos";
	$conn->query($sql);
	$sql = "DESC ".$relacion;
	$atts = '<div class="table-responsive">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>Field</th>
							<th>Type</th>
							<th>Null</th>
							<th>Key</th>
						</tr>
					</thead>	
					<tbody>';
					
    foreach ($conn->query($sql) as $row){
		$atts .= "<tr>
					<td>".$row["Field"]."</td>
					<td>".$row["Type"]."</td>
					<td>".$row["Null"]."</td>
					<td>".$row["Key"]."</td>
				</tr>";
    }
	return $atts."</tbody></table></div>";
}

//funcion para obtener la lista de la tablas de la base de datos ft_ventas en forma de panels
function info_tabla_hechos(){
	include "conexion_servidor.php";
	$basedatos = $_POST["basedatos"];
	$dims = "";
	$fact_table = "";
	$sql = "USE $basedatos";
	$conn->query($sql);
	$sql = "SHOW TABLES";
	foreach ($conn->query($sql) as $row){
		$TH = $row[0];
		if($TH[0] == "f" && $TH[1] == "t"){
			$fact_table .= '<div class="col-sm-12">
							<div class="panel panel-primary">
								<div class="panel-heading">
									<h3 class="panel-title">Tabla de hechos :  '.$row[0].'</h3>
								</div>
								<div class="panel-body">'.
								//se manda el nombre de la relacion para obtener atributos
									info_relacion($row[0])
								.'</div>
							</div>
						</div>';
		}
		else{
			$dims .= '<div class="col-sm-12">
							<div class="panel panel-success">
								<div class="panel-heading">
									<h3 class="panel-title">Dimension :  '.$row[0].'</h3>
								</div>
								<div class="panel-body">'.
								//se manda el nombre de la relacion para obtener atributos
									info_relacion($row[0])
								.'</div>
							</div>
						</div>';
		}
	}
	echo $fact_table.$dims;
	$conn = null;
}

info_tabla_hechos();
?>


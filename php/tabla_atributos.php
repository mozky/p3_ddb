<?php
function tabla_atributos(){
	include "conexion_servidor.php";
	$bd = $_POST["basedatos"];
	$t = $_POST["tabla"];
	$sql = "USE $bd";
	$conn->query($sql);
	$sql = "DESC $t";
	$atts = '
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
		$atts .= "<tr value=".$row[0].">
					<td>".$row["Field"]."</td>
					<td>".$row["Type"]."</td>
					<td>".$row["Null"]."</td>
					<td>".$row["Key"]."</td>
				</tr>";
    }
    echo $atts."</tbody>";
    $conn = null;
	// return $atts."</tbody></table>";
}

tabla_atributos();
?>

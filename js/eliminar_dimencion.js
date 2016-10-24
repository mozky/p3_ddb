document.getElementById("eliminarDTDH").addEventListener("click", eliminar_dimencion);

function eliminar_dimencion(){
	var aux = 0;
	var nombreTH = document.getElementById("edth-nombreTablaHechos").value;
  var dimencion = document.getElementById("edth-dimencion").value;
	var alerta = document.getElementById("edth-msj-error");
	if(nombreTH == ""){
		aux++;
	} if(dimencion == ""){
    aux++;
  }
	if(aux > 0){
    var text_alerta = "	<br/>";
    text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
    text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
    text_alerta += "		<strong>¡Error!</strong> <br>Seleccione un valor en todos los campos.";
    text_alerta += "	</div>";
    alerta.innerHTML = text_alerta;
	}else{
		var http_request = null;
		if(window.XMLHttpRequest){
			http_request = new XMLHttpRequest();
		}else{
			if(window.ActiveXObject){
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}

		http_request.onreadystatechange = function (){
			if((http_request.readyState == 4) && (http_request.status == 200)){
				busca_relaciones_tabla_hechos();
				busca_tablas_hechos_edth();
				busca_dimenciones_edth();
			}
		}

		http_request.open("POST", "php/eliminar_dimencion.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreTH="+nombreTH+"&dimension="+dimencion);

    var text_alerta = "	<br/>";
    text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
    text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
    text_alerta += "		<strong>¡Eliminado correctamente!</strong> <br>La dimension fue eliminada correctamente.";
    text_alerta += "	</div>";
    alerta.innerHTML = text_alerta;
	}
}

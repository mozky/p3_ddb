document.getElementById("cambiarnombreDTDH").addEventListener("click", modificar_nombre_dimencion);

function modificar_nombre_dimencion(){
	var aux = 0;
	var nombreTH = document.getElementById("cndth-nombreTablaHechos").value;
	var dimension = document.getElementById("cndth-dimencion").value;
  var nuevoNombre = document.getElementById("cndth-nombredimencion").value;
	var alerta = document.getElementById("cndth-msj-error");
	if(nombreTH == ""){
		aux++;
	}
	if(dimension == ""){
		aux++;
	}
  if(nuevoNombre == ""){
    aux++;
  }
	if(aux > 0){
    var text_alerta = "	<br/>";
    text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
    text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
    text_alerta += "		<strong>¡Error!</strong> <br>Seleccione y escriba un valor en todos los campos.";
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
				if(http_request.responseText.toString().length != 0){
					var text_alerta = "	<br/>";
					text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
					text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
					text_alerta += "		<strong>¡Error!</strong> <br> Dimencion duplicada.";
					text_alerta += "	</div>";
					alerta.innerHTML = text_alerta;
				}else{
					busca_tablas_hechos_cndth();
					busca_dimenciones_cndth();
					busca_relaciones_tabla_hechos();
					document.getElementById("cndth-nombredimencion").value = "Nuevo nombre de la dimension";
				}
			}
		}

		http_request.open("POST", "php/modificar_nombre_dimencion.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreTH="+nombreTH+"&dimension="+dimension+"&nuevoNombre="+ dimension.replace(/_(.*)_/, "_" + nuevoNombre + "_"));

    var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Modificado correctamente!</strong> <br>El nombre de la dimension fue modificado correctamente.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}

document.getElementById("eliminarHechoTDH").addEventListener("click", eliminar_tabla_hechos);

function eliminar_tabla_hechos(){
	var aux = 0;
	var nombreTH = document.getElementById("ehth-nombreTablaHechos").value;
	var nombreH = document.getElementById("ehth-hecho").value;
	var alerta = document.getElementById("ehth-msj-error");
	if(nombreTH == ""){
		aux++;
	}
	if(nombreH == ""){
		aux++;
	}
	if(aux > 0){
		
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
				busca_hecho_ehth();
			}
		}
		http_request.open("POST", "php/eliminar_hecho_tabla_hechos.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreTH="+nombreTH+"&nombreH="+nombreH);
	}
	if(aux > 0){
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Error!</strong> <br>Seleccione un valor en todos los campos.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}else{
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Eliminado correctamente!</strong> <br>El hecho fue eliminado correctamente de la tabla de hechos.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}
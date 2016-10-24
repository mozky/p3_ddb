document.getElementById("generarMDTH").addEventListener("click", generar_dimencion_tabla_hechos);

function generar_dimencion_tabla_hechos(){
	var aux = 0;
	var nombreTH = document.getElementById("cmd-nombreTablaHechos").value;
	var nombreD = document.getElementById("cmd-tabla").value;
	var nombreM = document.getElementById("cmd-medida").value;
	var nombreTD = document.getElementById("cmd-tipodato").value;
	var alerta = document.getElementById("cmd-msj-error");
	if(nombreTH == ""){
		aux++;
	}
	if(nombreD == ""){
		aux++;
	}
	if(nombreM == ""){
		aux++;
	}
	if(nombreTD == ""){
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
				if(http_request.responseText.toString().length != 0){
					var text_alerta = "	<br/>";
					text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
					text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
					text_alerta += "		<strong>¡Error!</strong> <br> Medida duplicada o tipo de dato incorrecto.";
					text_alerta += "	</div>";
					alerta.innerHTML = text_alerta;
				}else{
					busca_relaciones_tabla_hechos();
				}
			}
		}
		http_request.open("POST", "php/crear_medida_dimencion_tabla_hechos.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreTH="+nombreTH+"&nombreD="+nombreD+"&nombreM="+nombreM+"&nombreTD="+nombreTD);
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
		text_alerta += "		<strong>¡Agregado correctamente!</strong> <br>El predicado simple se agrego correctamente.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}
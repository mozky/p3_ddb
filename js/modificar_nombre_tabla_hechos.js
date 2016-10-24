document.getElementById("cambiarnombreTDH").addEventListener("click", modificar_nombre_tabla_hechos);

function modificar_nombre_tabla_hechos(){
	var aux = 0;
	var nombreTH = document.getElementById("cnth-nombreTablaHechos").value;
	var nombre = document.getElementById("cnth-nombre").value;
	var alerta = document.getElementById("cnth-msj-error");
	if(nombreTH == ""){
		aux++;
	}
	if(nombre == ""){
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
					text_alerta += "		<strong>¡Error!</strong> <br> El nombre de tabla de hechos fue creado anteriormente.";
					text_alerta += "	</div>";
					alerta.innerHTML = text_alerta;
				}else{
					busca_relaciones_tabla_hechos();

				}
			}
		}
		http_request.open("POST", "php/modificar_nombre_tabla_hechos.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreTH="+nombreTH+"&nombre="+nombre);
	}
	if(aux > 0){
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Error!</strong> <br>Seleccione y escriba un valor en todos los campos.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}else{
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Modificado correctamente!</strong> <br>El nombre de la tabla de hechos fue modificado correctamente.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}
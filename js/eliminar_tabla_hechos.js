document.getElementById("eliminarTDH").addEventListener("click", eliminar_tabla_hechos);

function eliminar_tabla_hechos(){
	var aux = 0;
	var nombreTH = document.getElementById("eth-nombreTablaHechos").value;
	var alerta = document.getElementById("eth-msj-error");
	if(nombreTH == ""){
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
				busca_tablas_hechos();
				busca_tablas_hechos_cnth();
				busca_tablas_hechos_eth();
				busca_tablas_hechos_ahth();
				busca_tablas_hechos_cdth();
				busca_tablas_hechos_ehth();
				busca_tablas_hechos_cmd();
				document.getElementById("infoTabladeHechos").innerHTML = "<center>No se ha seleccionado una tabla de hechos</center>";
			}
		}
		http_request.open("POST", "php/eliminar_tabla_hechos.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreTH="+nombreTH);
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
		text_alerta += "		<strong>¡Eliminado correctamente!</strong> <br>La tabla de hechos fue eliminada correctamente.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}
document.getElementById("cambiarTipoDatoMDTH").addEventListener("click", cambia_nombre_medida);


function actualizaSelectTDMedida(){
	var basedatos = document.getElementById("ctdmd-nombreTablaHechos").value;
	var dimension = document.getElementById("ctdmd-dimencion").value;
	var medidas = document.getElementById("ctdmd-medida");
	document.getElementById("ctdmd-nuevonombre").value = "";
	
	if(dimension == ""){
		medidas.innerHTML = "<option> Selecciona dimension</option>";
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
				medidas.innerHTML = http_request.responseText;
			}
		}
		http_request.open("POST", "php/listar_medidas.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos+"&dimension="+dimension);
	}
}

function cambia_nombre_medida(){
	var basedatos = document.getElementById("ctdmd-nombreTablaHechos").value;
	var dimension = document.getElementById("ctdmd-dimencion").value;
	var medida = document.getElementById("ctdmd-medida").value;
	var new_tipo_dato_medida = document.getElementById("ctdmd-nuevonombre").value;
	var alerta = document.getElementById("ctdmd-msj-error");
	if((basedatos != "") && (dimension != "") && (medida != "") && (new_tipo_dato_medida != "")){
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
				if(http_request.responseText == 0){
					var basedatos = document.getElementById("thc-tablas").value;
					if(basedatos == ""){
						actualizaSelectTDMedida();
						document.getElementById("infoTabladeHechos").innerHTML = "<center>No se ha seleccionado una tabla de hechos</center>";
						var text_alerta = "	<br/>";
							text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
							text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
							text_alerta += "		<strong>¡Tipo cambiado correctamente!</strong> <br>El predicado simple se cambió correctamente.";
							text_alerta += "	</div>";
							alerta.innerHTML = text_alerta;
					}
					else{
						actualizaSelectTDMedida();
						busca_relaciones_tabla_hechos();
						var text_alerta = "	<br/>";
							text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
							text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
							text_alerta += "		<strong>¡Tipo cambiado correctamente!</strong> <br>El predicado simple se cambió correctamente.";
							text_alerta += "	</div>";
							alerta.innerHTML = text_alerta;
					}
				}
			}
		}
		http_request.open("POST", "php/cambiar_tipo_dato_medida.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos+"&dimension="+dimension+"&medida="+medida+"&new_tipo_dato_medida="+new_tipo_dato_medida);
	}
	else{
		window.alert("Te hace falta un especificar un campo para cambiar el tipo de dato de la medida");
	}
}
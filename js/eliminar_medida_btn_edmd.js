document.getElementById("eliminarMDTH").addEventListener("click", elimina_medida);


function actualizaSelectEliminaMedida(){
	var basedatos = document.getElementById("edmd-nombreTablaHechos").value;
	var dimension = document.getElementById("edmd-dimencion").value;
	var medidas = document.getElementById("edmd-medida");
	
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


function elimina_medida(){
	var basedatos = document.getElementById("edmd-nombreTablaHechos").value;
	var dimension = document.getElementById("edmd-dimencion").value;
	var medida = document.getElementById("edmd-medida").value;
	var alerta = document.getElementById("edmd-msj-error");
	if((basedatos != "") && (dimension != "") && (medida != "")){
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
						actualizaSelectEliminaMedida();
						document.getElementById("infoTabladeHechos").innerHTML = "<center>No se ha seleccionado una tabla de hechos</center>";
						var text_alerta = "	<br/>";
							text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
							text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
							text_alerta += "		<strong>¡Medida eliminada correctamente!</strong> <br>El predicado simple se cambió correctamente.";
							text_alerta += "	</div>";
							alerta.innerHTML = text_alerta;
					}
					else{
						actualizaSelectEliminaMedida();
						busca_relaciones_tabla_hechos();
						var text_alerta = "	<br/>";
							text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
							text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
							text_alerta += "		<strong>¡Medida eliminada correctamente!</strong> <br>El predicado simple se cambió correctamente.";
							text_alerta += "	</div>";
							alerta.innerHTML = text_alerta;
					}
				}
			}
		}
		http_request.open("POST", "php/elimina_medida.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos+"&dimension="+dimension+"&medida="+medida);
	}
	else{
		window.alert("Te hace falta un especificar un campo para eliminar la medida");
	}
}

document.getElementById("generarTDH").addEventListener("click", generar_tabla_hechos);

function generar_tabla_hechos(){
	var aux = 0;
	var nombreTH = document.getElementById("cth-nombreTablaHechos").value;
	var nombreDB = document.getElementById("cth-basedatos").value;
	var nombreT = document.getElementById("cth-tabla").value;
	var nombreA = document.getElementById("cth-atributo").value;
	var alerta = document.getElementById("cth-msj-error");
	if(nombreTH == ""){
		aux++;
	}
	if(nombreDB == ""){
		aux++;
	}
	if(nombreT == ""){
		aux++;
	}
	if(nombreA == ""){
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
				if(http_request.responseText.toString().length != 4){
					var text_alerta = "	<br/>";
					text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
					text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
					text_alerta += "		<strong>¡Error!</strong> <br> El nombre de tabla de hechos fue creado anteriormente.";
					text_alerta += "	</div>";
					alerta.innerHTML = text_alerta;
				}else{
					busca_tablas_hechos();
					busca_tablas_hechos_cnth();
					busca_tablas_hechos_eth();
					busca_tablas_hechos_ahth();
					busca_tablas_hechos_cdth();
					busca_tablas_hechos_ehth();
					busca_tablas_hechos_cmd();
					busca_relaciones_tabla_hechos();

				}
			}
		}
		http_request.open("POST", "php/crear_tabla_hechos.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreTH="+nombreTH+"&nombreDB="+nombreDB+"&nombreT="+nombreT+"&nombreA="+nombreA);
	}
	if(aux > 0){
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Error!</strong> <br>Seleccione y escruba un valor en todos los campos.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}else{
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Agregado correctamente!</strong> <br>La tabla de hechos fue agregada correctamente.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}
function busca_tablas_hechos(){
	var database_tables = document.getElementById("thc-tablas");
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
			database_tables.innerHTML = http_request.responseText;
			//Se asigna la función correspondiente para obtener info de la tabla de hechos
			database_tables.addEventListener("change", busca_relaciones_tabla_hechos);
		}
	}
	http_request.open("POST", "php/listar_tablas_hechos.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send(null);
}

//funcion para obtener la info de la tabla de hechos seleccionada
function busca_relaciones_tabla_hechos(){
	var basedatos = document.getElementById("thc-tablas").value;
	if(basedatos == ""){
		document.getElementById("infoTabladeHechos").innerHTML = "<center>No se ha seleccionado una tabla de hechos</center>";
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
				document.getElementById("infoTabladeHechos").innerHTML = http_request.responseText;
			}
		}
		http_request.open("POST", "php/info_tabla_hechos.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos);
	}
}

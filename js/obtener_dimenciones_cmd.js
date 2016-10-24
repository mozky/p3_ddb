document.getElementById("cmd-nombreTablaHechos").addEventListener("change", busca_dimenciones_cmd);

function busca_dimenciones_cmd(){
	var basedatos = document.getElementById("cmd-nombreTablaHechos").value;
	var tablas = document.getElementById("cmd-tabla");
	if(basedatos == ""){
		tablas.innerHTML = "<option> Selecciona tabla de hechos</option>";
		atributos.innerHTML = "<option> Selecciona tabla de hechos</option>";
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
				tablas.innerHTML = http_request.responseText;
			}
		}
		http_request.open("POST", "php/listar_dimenciones.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos);
	}
}
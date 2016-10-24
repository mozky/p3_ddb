document.getElementById("edmd-nombreTablaHechos").addEventListener("change", busca_dimenciones_edmd);

function busca_dimenciones_edmd(){
	var basedatos = document.getElementById("edmd-nombreTablaHechos").value;
	var dimensiones = document.getElementById("edmd-dimencion");
	if(basedatos == ""){
		dimensiones.innerHTML = "<option> Selecciona tabla de hechos</option>";
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
				dimensiones.innerHTML = http_request.responseText;
			}
		}
		http_request.open("POST", "php/listar_dimenciones.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos);
	}
}
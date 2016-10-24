document.getElementById("ctdmd-dimencion").addEventListener("change", busca_medidas_cnmd);

function busca_medidas_cnmd(){
	
	var basedatos = document.getElementById("ctdmd-nombreTablaHechos").value;
	var dimension = document.getElementById("ctdmd-dimencion").value;
	var medidas = document.getElementById("ctdmd-medida");
	
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
function busca_tablas_hechos_cndth(){
	var database_tables = document.getElementById("cndth-nombreTablaHechos");
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
		}
	}
	http_request.open("POST", "php/listar_tablas_hechos.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send(null);
}

document.getElementById("ehth-nombreTablaHechos").addEventListener("change", busca_hecho_ehth);

function busca_hecho_ehth(){
	var basedatos = document.getElementById("ehth-nombreTablaHechos").value;
	var atributos = document.getElementById("ehth-hecho");
	if(basedatos == ""){
		atributos.innerHTML = "<option> Selecciona hecho</option>";
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
				atributos.innerHTML = http_request.responseText;
			}
		}
		http_request.open("POST", "php/listar_hechos.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos);
	}
}
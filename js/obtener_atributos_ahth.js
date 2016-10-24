document.getElementById("ahth-tabla").addEventListener("change", busca_atributos_ahth);

function busca_atributos_ahth(){
	var basedatos = document.getElementById("ahth-basedatos").value;
	var tablas = document.getElementById("ahth-tabla").value;
	var atributos = document.getElementById("ahth-atributo");
	if(tablas == ""){
		atributos.innerHTML = "<option> Selecciona tabla</option>";
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
		http_request.open("POST", "php/listar_atributos.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos+"&tabla="+tablas);
	}
}
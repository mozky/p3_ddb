function loadDBs(){
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
			document.getElementById("v_drop_BD").innerHTML = http_request.responseText;
			document.getElementById("h_drop_BD").innerHTML = http_request.responseText;
			$('.selectpicker').selectpicker('refresh');
		}
	}
	http_request.open("POST", "php/listar_bases_datos.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send(null);
}

function loadTables(obj, option){
		var basedatos = obj.value;
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
				var tabla = "#" + option + "_drop_T";
				$(tabla).html(http_request.responseText).prop("disabled", false);
				$('.selectpicker').selectpicker('refresh');
			}
		}
		http_request.open("POST", "php/listar_tablas.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos);
}

$(document).ready(function() {
	loadDBs();
});

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
			$("#v_drop_BD").html(http_request.responseText).prop("disabled", false);
			$("#h_drop_BD").html(http_request.responseText).prop("disabled", false);
			$('.selectpicker').selectpicker('refresh');
		}
	}
	http_request.open("POST", "php/drop_bases.php", true);
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
				$("#" + option + "_drop_T").html(http_request.responseText).prop("disabled", false);
				$('.selectpicker').selectpicker('refresh');
			}
		}
		http_request.open("POST", "php/drop_tablas.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("basedatos="+basedatos);
}

function loadAtributes(obj, option){
	var tabla = obj.value;
	var basedatos = $("#"+option+"_drop_BD").val();
	var http_request = null;
	var hr = null;

	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
		hr = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
			hr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	http_request.onreadystatechange = function (){
		if((http_request.readyState == 4) && (http_request.status == 200)){
			$("#" + option + "_tabla_bd").html(http_request.responseText).removeClass("hidden");
		}
	}

	hr.onreadystatechange = function (){
		if((hr.readyState == 4) && (hr.status == 200)){
			$("#" + option + "_drop_A").html(hr.responseText).prop("disabled", false);
			$('.selectpicker').selectpicker('refresh');		}
		}

	http_request.open("POST", "php/tabla_atributos.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send("basedatos="+basedatos+"&tabla="+tabla);

	hr.open("POST", "php/drop_atributos.php", true);
	hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	hr.send("basedatos="+basedatos+"&tabla="+tabla);

}

$(document).ready(function() {
	loadDBs();
});

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

function generarPredicados(){
	var predicado = {
		"atributo": $("#h_drop_A").val(),
		"operador": $("#h_drop_O").val(),
		"valor": $("#h_box_V").val()
	}

	$("#h_tabla_predicados").append(
		"<tr onclick='agregarSimple(this)'><td>" +
		predicado.atributo +
		"</td><td>" +
		predicado.operador +
		"</td><td>" +
		predicado.valor +
		"</td></tr>"
	);
}

function agregarSimple(th) {
	simples.push($(th).text());
	countSimples += 1;
	if(countSimples == 2)
		generarMiniterminos();
}

function generarMiniterminos(){

// jalar los dos valores de simples y hacer la multipliacion

	var inverso = {
		"==": "<>",
		"<>": "==",
		">=": "<",
		"<=": ">",
		">": "<=",
		"<": ">="
	}

	$("#h_tabla_minis").append(
		"<tr><td>" +
		"prueba" +
		"</td><td>" +
		"==" +
		"</td><td>" +
		"prueba" +
		"</td></tr>" +
		"<tr><td>" +
		"prueba" +
		"</td><td>" +
		inverso["=="] +
		"</td><td>" +
		"prueba" +
		"</td></tr>"
	);

	$("#h_tabla_minis > tbody > tr").on("click", function(){
		miniterminos.push($(this).text());
		console.log(miniterminos);
	});

}

function enviarMinis() {
	alert("Falta crear las consultas para enviar el contenido de 'miniterminos' a la base de datos del sitio seleccionado");
}

function setTriggers(){
	$("#h_drop_A").on("change", function() {
		$("#h_drop_O").prop("disabled", false);
		$('.selectpicker').selectpicker('refresh');
	});

	$("#h_drop_O").on("change", function() {
		$("#h_box_V").prop("disabled", false);
		$('.selectpicker').selectpicker('refresh');
	});

	$("#h_box_V").on("change", function() {
		$("#h_btn_G").prop("disabled", false);
	});

	$("#h_drop_S").on("change", function() {
		$("#h_btn_E").prop("disabled", false);
	});

	// $("#h_tabla_predicados > tbody > tr").on("click", function(){
	// 	simples.push($(this).text());
	// 	console.log($(this).text());
	// 	countSimples += 1;
	// 	if(countSimples == 2)
	// 		generarMiniterminos();
	// });

}

$(document).ready(function() {
	loadDBs();
	setTriggers();
	window.miniterminos = [];
	window.simples = [];
	window.countSimples = 0;
});

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

function generarPredicados(option){
	var predicado = {
		"atributo": $("#" + option + "_drop_A").val(),
		"operador": $("#" + option + "_drop_O").val(),
		"valor": $("#" + option + "_box_V").val()
	}

	$("#h_tabla_predicados").append(
		"<tr onclick='agregarSimple(this, \""+ option + "\")'><td>" +
		predicado.atributo +
		"</td><td>" +
		predicado.operador +
		"</td><td>" +
		predicado.valor +
		"</td></tr>"
	);
}

function agregarSimple(obj, option) {
	// cambiar algo en la interfaz para que se vea que se selecciono un predicado
	simples.push($(obj).text());
	countSimples += 1;
	if(countSimples == 2)
		generarMiniterminos(option);
}

function generarMiniterminos(option){
	var basedatos = $("#"+option+"_drop_BD").val();
	var tabla = $("#"+option+"_drop_T").val();
	var inverso = {
		"==": "<>",
		"<>": "==",
		">=": "<",
		"<=": ">",
		">": "<=",
		"<": ">="
	}

	// Ciclo que construye el array miniterminos con los 4 predicados simples
	for ( var i = 0; i < simples.length; i ++) {
		var s;
		if (simples[i].indexOf("==") > 0) {
			s = simples[i].split("==");
			s.push("==");
		} else if (simples[i].indexOf("<>") > 0) {
			s = simples[i].split("<>");
			s.push("<>");
		} else if (simples[i].indexOf("<=") > 0) {
			s = simples[i].split("<=");
			s.push("<=");
		} else if (simples[i].indexOf(">=") > 0) {
			s = simples[i].split(">=");
			s.push(">=");
		} else if (simples[i].indexOf("<") > 0) {
			s = simples[i].split("<");
			s.push("<");
		} else if (simples[i].indexOf(">") > 0) {
			s = simples[i].split(">");
			s.push(">");
		}
		miniterminos.push(
			{
				"atributo" : s[0],
				"operador" : s[2],
				"predicado" : s[1]
			}
		)
		miniterminos.push(
			{
				"atributo" : s[0],
				"operador" : inverso[s[2]],
				"predicado" : s[1]
			}
		)
	}

	console.log(miniterminos);
	// Llamamos a count_query para ver si el count es mayor a 1
	var hr1 = null;
	var hr2 = null;

	if(window.XMLHttpRequest){
		hr1 = new XMLHttpRequest();
		hr2 = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			hr1 = new ActiveXObject("Microsoft.XMLHTTP");
			hr2 = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	hr1.onreadystatechange = function (){
		if((hr1.readyState == 4) && (hr1.status == 200)){
			console.log(hr1.responseText);
		}
	}

	hr2.onreadystatechange = function (){
		if((hr2.readyState == 4) && (hr2.status == 200)){
			console.log(hr2.responseText);
		}
	}

	hr1.open("POST", "php/count_query.php", true);
	hr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	hr1.send(
		"basedatos="+basedatos
		+"&tabla="+tabla
		+"&atributo="+miniterminos[0].atributo
		+"&operador="+miniterminos[0].operador
		+"&predicado="+miniterminos[0].predicado
	);

	hr2.open("POST", "php/count_query.php", true);
	hr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	hr2.send(
		"basedatos="+basedatos
		+"&tabla="+tabla
		+"&atributo="+miniterminos[1].atributo
		+"&operador="+miniterminos[1].operador
		+"&predicado="+miniterminos[1].predicado
	);


	// ONLY APPEND THE ONES THAT COUNT > 0
	// $("#h_tabla_minis").append(
	// 	"<tr><td>" +
	// 	"prueba" +
	// 	"</td><td>" +
	// 	"==" +
	// 	"</td><td>" +
	// 	"prueba" +
	// 	"</td></tr>" +
	// 	"<tr><td>" +
	// 	"prueba" +
	// 	"</td><td>" +
	// 	inverso["=="] +
	// 	"</td><td>" +
	// 	"prueba" +
	// 	"</td></tr>"
	// );
	//
	// $("#h_tabla_minis > tbody > tr").on("click", function(){
	// 	miniterminos.push($(this).text());
	// 	console.log(miniterminos);
	// });

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

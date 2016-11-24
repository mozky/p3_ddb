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
	var inverso = {
		"=": "!=",
		"!=": "=",
		">=": "<",
		"<=": ">",
		">": "<=",
		"<": ">="
	}

	var predicado = {
		"atributo": $("#" + option + "_drop_A").val(),
		"operador": $("#" + option + "_drop_O").val(),
		"valor": $("#" + option + "_box_V").val()
	};

	var negado = {
		"atributo": predicado.atributo,
		"operador": inverso[predicado.operador],
		"valor": predicado.valor
	};

	simples.push(predicado);
	simples.push(negado);

	$("#h_tabla_predicados").append(
		"<tr><td>" +
		predicado.atributo +
		"</td><td>" +
		predicado.operador +
		"</td><td>" +
		predicado.valor +
		"</td></tr>"
	);

	if (simples.length == 4)
		generarMiniterminos(option);
}

function generarMiniterminos(option){
	var basedatos = $("#"+option+"_drop_BD").val();
	var tabla = $("#"+option+"_drop_T").val();

// Mandamos las 4 queries para ver si alguna tupla cumple con el predicado minitermino
	var hr1 = null, hr2 = null, hr3 = null, hr4 = null;
	if(window.XMLHttpRequest){
		hr1 = new XMLHttpRequest();
		hr2 = new XMLHttpRequest();
		hr3 = new XMLHttpRequest();
		hr4 = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			hr1 = new ActiveXObject("Microsoft.XMLHTTP");
			hr2 = new ActiveXObject("Microsoft.XMLHTTP");
			hr3 = new ActiveXObject("Microsoft.XMLHTTP");
			hr4 = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	hr1.onreadystatechange = function (){
		if((hr1.readyState == 4) && (hr1.status == 200)){
			if (hr1.responseText > 0) {
				miniterminos.push(
					{
						"1": simples[0],
						"2": simples[2],
						"count": hr1.responseText
					}
				);
			}
		}
	}

	hr2.onreadystatechange = function (){
		if((hr2.readyState == 4) && (hr2.status == 200)){
			if (hr2.responseText > 0) {
				miniterminos.push(
					{
						"1": simples[0],
						"2": simples[3],
						"count": hr2.responseText
					}
				);
			}
		}
	}

	hr3.onreadystatechange = function (){
		if((hr3.readyState == 4) && (hr3.status == 200)){
			if (hr3.responseText > 0) {
				miniterminos.push(
					{
						"1": simples[1],
						"2": simples[2],
						"count": hr3.responseText
					}
				);
			}
		}
	}

	hr4.onreadystatechange = function (){
		if((hr4.readyState == 4) && (hr4.status == 200)){
			if (hr4.responseText > 0) {
				miniterminos.push(
					{
						"1": simples[1],
						"2": simples[3],
						"count": hr4.responseText
					}
				);
			}
		}
	}

	hr1.open("POST", "php/count_query.php", true);
	hr2.open("POST", "php/count_query.php", true);
	hr3.open("POST", "php/count_query.php", true);
	hr4.open("POST", "php/count_query.php", true);

	hr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	hr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	hr3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	hr4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	hr1.send(
		"basedatos="+basedatos
		+"&tabla="+tabla
		+"&atr1="+simples[0].atributo
		+"&ope1="+simples[0].operador
		+"&val1="+simples[0].valor
		+"&atr2="+simples[2].atributo
		+"&ope2="+simples[2].operador
		+"&val2="+simples[2].valor
	);

	hr2.send(
		"basedatos="+basedatos
		+"&tabla="+tabla
		+"&atr1="+simples[0].atributo
		+"&ope1="+simples[0].operador
		+"&val1="+simples[0].valor
		+"&atr2="+simples[3].atributo
		+"&ope2="+simples[3].operador
		+"&val2="+simples[3].valor
	);

	hr3.send(
		"basedatos="+basedatos
		+"&tabla="+tabla
		+"&atr1="+simples[1].atributo
		+"&ope1="+simples[1].operador
		+"&val1="+simples[1].valor
		+"&atr2="+simples[2].atributo
		+"&ope2="+simples[2].operador
		+"&val2="+simples[2].valor
	);

	hr4.send(
		"basedatos="+basedatos
		+"&tabla="+tabla
		+"&atr1="+simples[1].atributo
		+"&ope1="+simples[1].operador
		+"&val1="+simples[1].valor
		+"&atr2="+simples[3].atributo
		+"&ope2="+simples[3].operador
		+"&val2="+simples[3].valor
	);


	// Agregamos los objetos en 'miniterminos' a la tabla
	// Ponemos un timeout de 1 seg para esperar los resultados de php

	setTimeout(function(){
		for (var i = 0; i < miniterminos.length; i ++) {
			$("#" + option + "_tabla_minis").append(
				"<tr><td>" +
				miniterminos[i][1].atributo +
				" " +
				miniterminos[i][1].operador +
				" " +
				miniterminos[i][1].valor +
				"</td><td>" +
				miniterminos[i][2].atributo +
				" " +
				miniterminos[i][2].operador +
				" " +
				miniterminos[i][2].valor +
				"</td><td>" +
				miniterminos[i].count +
				"</td></tr>"
			);
			$("#"+ option + "_drop_SM").append(
				$('<option>', {
    		value: i,
    		text: miniterminos[i][1].atributo + " " + miniterminos[i][1].operador + " " + miniterminos[i][1].valor + " and " + miniterminos[i][2].atributo + " " + miniterminos[i][2].operador + " " + miniterminos[i][2].valor
			}));
			$("#"+ option + "_drop_SM").prop( "disabled", false );
			$('.selectpicker').selectpicker('refresh');
		}
	}, 1000);

	// TODO: Agregar
	// $("#h_tabla_minis > tbody > tr").on("click", function(){
	// 	miniterminos.push($(this).text());
	// 	console.log(miniterminos);
	// });
}

function enviarMinis(option) {
	var basedatos = $("#"+option+"_drop_BD").val();
	var tabla = $("#"+option+"_drop_T").val();
	var fragmento = $("#" + option + "_drop_SM").val();
	var sitio = $("#" + option + "_drop_S").val();

	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	http_request.onreadystatechange = function (){
		alert("El fragmento ha sido enviado con exito al sitio");
	}

	http_request.open("POST", "php/insert_atributos.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send("basedatos="+basedatos
										+"&tabla="+tabla
										+"&sitio="+sitio
										+"&fragmento="+fragmento
										+"&atr1="+miniterminos[fragmento][1].atributo
										+"&ope1="+miniterminos[fragmento][1].operador
										+"&val1="+miniterminos[fragmento][1].valor
										+"&atr2="+miniterminos[fragmento][2].atributo
										+"&ope2="+miniterminos[fragmento][2].operador
										+"&val2="+miniterminos[fragmento][2].valor);
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
}

$(document).ready(function() {
	loadDBs();
	setTriggers();
	window.miniterminos = [];
	window.simples = [];
	window.countSimples = 0;
});

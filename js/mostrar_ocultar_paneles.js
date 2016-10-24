document.getElementById("panel_base_heading").addEventListener("click", mostrar_ocultar_panel_base);
document.getElementById("panel_relacion_heading").addEventListener("click", mostrar_ocultar_panel_relacion);
document.getElementById("panel_atributo_heading").addEventListener("click", mostrar_ocultar_panel_atributo);


function mostrar_ocultar_panel_base(){
	$("#panel_base").slideToggle();
}

function mostrar_ocultar_panel_relacion(){
	$("#panel_relacion").slideToggle();
}

function mostrar_ocultar_panel_atributo(){
	$("#panel_atributo").slideToggle();
}

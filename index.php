<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" media="screen" title="no title">
  <title>Practica 3 DDB</title>
</head>
<body>
<div class="container" >
    <div class="row">
        <div class="tab-content" >
			<div class="row">
				<div>
					<div class="tab-content">
						<br/>
						<div class="tab-pane fade in active">
							<div class="row">
								<div class="col-sm-6">
									<div class="row">
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3 class="panel-title">lorem ipsum</h3>
											</div>
											<div class="panel-body">
												<ul class="nav nav-tabs">
													<li class="active"><a data-toggle="tab" href="#P1">Paso 1</a></li>
													<li><a data-toggle="tab" href="#P2">Paso 2</a></li>
													<li><a data-toggle="tab" href="#P3">Paso 3</a></li>
												</ul>
												<div class="tab-content">
													<br/>
													<div id="P1" class="tab-pane fade in active">
														<div class="row">
															<div class="col-sm-12">
																<div class="panel panel-default">
																	<div class="panel-heading" id="panel_base_heading">
																		<h3 class="panel-title">Base de Datos</h3>
																	</div>
																	<div class="panel-body"  id="panel_base" style='display:none;'>
																		<div class="row">
																			<div class="col-sm-12">
																				<label for="relacion" class="col-lg-12 control-label">Base de datos</label>
																			</div>
                                    </div>
                                    <div class="row">
																			<div class="col-sm-12">
																				<select class="form-control" id="drop-basedatos" name="tablas">
																					<option> Selecciona base de datos</option>
																				</select>
																			</div>
                                    </div>
                                    <div class="row">
																			<div class="col-sm-12">
																				</br>
																				<button type="button" class="btn btn-primary btn-block" id="generarTDH">Seleccionar base de datos</button>
																			</div>
																		</div>
                                    <div class="row">
                                      <div class="col-sm-12" id="cth-msj-error"></div>
                                    </div>
                                  </div>
                                </div>
															</div>
														</div>
														<div class="row">
															<div class="col-sm-12">
																<div class="panel panel-default">
																	<div class="panel-heading" id="panel_relacion_heading">
																		<h3 class="panel-title">Relacion</h3>
																	</div>
																	<div class="panel-body" id="panel_relacion" style='display:none;'>
																		<div class="row">
																			<div class="col-sm-12">
																				<label for="relacion" class="col-lg-12 control-label">Selecciona una relacion</label>
																			</div>
																			<div class="col-sm-12">
																				<select class="form-control"name="tablas">
																					<option>Selecciona una relacion</option>
																				</select>
																			</div>
																			<div class="col-sm-12">
																				</br>
																				<button type="button" class="btn btn-primary btn-block">Seleccionar relacion</button>
																			</div>
																		</div>
																		<div class="col-sm-12" id="cnth-msj-error">
																		</div>
																	</div>
																</div>
															</div>
														</div>
                            <div class="row">
															<div class="col-sm-12">
																<div class="panel panel-default">
																	<div class="panel-heading" id="panel_atributo_heading">
																		<h3 class="panel-title">Atributo</h3>
																	</div>
																	<div class="panel-body" id="panel_atributo" style='display:none;'>
																		<div class="row">
																			<div class="col-sm-12">
																				<label for="relacion" class="col-lg-12 control-label">Selecciona un atributo</label>
																			</div>
																			<div class="col-sm-12">
																				<select class="form-control"name="tablas">
																					<option>Selecciona un atributo</option>
																				</select>
																			</div>
																			<div class="col-sm-12">
																				</br>
																				<button type="button" class="btn btn-primary btn-block">Seleccionar atributo</button>
																			</div>
																		</div>
																		<div class="col-sm-12" id="cnth-msj-error">
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div id="P2" class="tab-pane fade">
													</div>
													<div id="P3" class="tab-pane fade">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h3 class="panel-title">lorem ipsum</h3>
										</div>
										<div class="panel-body">
											<div class="row">
												<div class="col-sm-12">
													<div class="row">
														<div class="col-sm-12">
															<label for="relacion" class="col-lg-12 control-label">blabla</label>
														</div>
														<div class="col-sm-12">
															<select class="form-control" name="tablas">
																<option>blabla</option>
															</select>
														</div>
													</div>
													<br/>
													<div class="row">
														<div class="col-sm-12">
															<div class="panel panel-default">
																<div class="panel-heading">
																	<h3 class="panel-title">blabla</h3>
																</div>
																<div class="panel-body">
																	<div class="row">
																		<div class="col-sm-12">
																			<div class="row">
																				<center>blabla</center>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!--Bootstrap--->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="bootstrap/bootstrap-datepicker.de.js" charset="UTF-8"></script>
<!--JS consular las tablas de hechos realizadas-->
<script type="text/javascript" src="js/obtener_tablas_hechos.js"></script>
<!--JS para el apartado de "Crear tabla de hechos"-->
<script type="text/javascript" src="js/obtener_bases_datos_cth.js"></script>
<script type="text/javascript" src="js/obtener_tablas_cth.js"></script>
<script type="text/javascript" src="js/obtener_atributos_cth.js"></script>
<script type="text/javascript" src="js/crear_tabla_hechos.js"></script>
<!--JS para el apartado de "Cambiar nombre de tabla de hechos"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_cnth.js"></script>
<script type="text/javascript" src="js/modificar_nombre_tabla_hechos.js"></script>
<!--JS para el apartado de "Eliminar tabla de hechos"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_eth.js"></script>
<script type="text/javascript" src="js/eliminar_tabla_hechos.js"></script>
<!--JS para el apartado de "Agregar hecho a tabla de hechos"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_ahth.js"></script>
<script type="text/javascript" src="js/obtener_bases_datos_ahth.js"></script>
<script type="text/javascript" src="js/obtener_tablas_ahth.js"></script>
<script type="text/javascript" src="js/obtener_atributos_ahth.js"></script>
<script type="text/javascript" src="js/agregar_hecho_tabla_hechos.js"></script>
<!--JS para el apartado de "Eliminar hecho de tabla de hechos"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_ehth.js"></script>
<script type="text/javascript" src="js/obtener_hechos_ehth.js"></script>
<script type="text/javascript" src="js/eliminar_hecho_tabla_hechos.js"></script>

<!--JS para el apartado de "Crear dimencion de la tabla de hechos"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_cdth.js"></script>
<script type="text/javascript" src="js/obtener_bases_datos_cdth.js"></script>
<script type="text/javascript" src="js/obtener_tablas_cdth.js"></script>
<script type="text/javascript" src="js/obtener_atributos_cdth.js"></script>
<script type="text/javascript" src="js/crear_dimencion_tabla_hechos.js"></script>

<!-- JS para el apartado de "Cambiar nombre de dimension" -->

<!-- JS para el apartado de "Cambiar nombre de dimension" -->
<script type="text/javascript" src="js/obtener_tablas_hechos_cndth.js"></script>
<script type="text/javascript" src="js/obtener_dimenciones_cndth.js"></script>
<script type="text/javascript" src="js/modificar_nombre_dimencion.js"></script>

<!-- JS para el apartado de "Eliminar dimension" -->

<!-- JS para el apartado de "Eliminar dimension" -->
<script type="text/javascript" src="js/obtener_tablas_hechos_edth.js"></script>
<script type="text/javascript" src="js/obtener_dimenciones_edth.js"></script>
<script type="text/javascript" src="js/eliminar_dimencion.js"></script>

<!--JS para el apartado de "Crear medida de dimencion"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_cmd.js"></script>
<script type="text/javascript" src="js/obtener_dimenciones_cmd.js"></script>
<script type="text/javascript" src="js/crear_medida_dimencion_tabla_hechos.js"></script>
<!--JS para el apartado de "Cambiar el nombre de medida de dimencion"-->
<!--JS para el apartado de "Cambiar el nombre de medida de dimencion"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_cnmd.js"></script>
<script type="text/javascript" src="js/obtener_dimenciones_cnmd.js"></script>
<script type="text/javascript" src="js/obtener_medidas_cnmd.js"></script>
<script type="text/javascript" src="js/cambiar_nombre_medida_btn_cnmd.js"></script>

<!--JS para el apartado de "Cambiar el tipo de medida de dimencion"-->
<!--JS para el apartado de "Cambiar el tipo de medida de dimencion"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_ctdmd.js"></script>
<script type="text/javascript" src="js/obtener_dimenciones_ctdmd.js"></script>
<script type="text/javascript" src="js/obtener_medidas_ctdmd.js"></script>
<script type="text/javascript" src="js/cambiar_tipo_dato_medida_btn_ctdmd.js"></script>

<!--JS para el apartado de "Cambiar el tipo de medida de dimencion"-->
<!--JS para el apartado de "Cambiar el tipo de medida de dimencion"-->
<script type="text/javascript" src="js/obtener_tablas_hechos_edmd.js"></script>
<script type="text/javascript" src="js/obtener_dimenciones_edmd.js"></script>
<script type="text/javascript" src="js/obtener_medidas_edmd.js"></script>
<script type="text/javascript" src="js/eliminar_medida_btn_edmd.js"></script>

<!--JS para el apartado mostrar y ocultar peneles de herramientas-->
<script type="text/javascript" src="js/mostrar_ocultar_paneles.js"></script>

<script>
$(window).load(function() {
	busca_bases_datos();
});
</script>

</body>
</html>

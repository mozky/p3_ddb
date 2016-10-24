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
<script src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
<!--JS GENERAL-->
<script type="text/javascript" src="js/script.js"></script>

<!--JS para el apartado mostrar y ocultar peneles de herramientas-->
<script type="text/javascript" src="js/mostrar_ocultar_paneles.js"></script>

<script>
$(window).load(function() {
	busca_bases_datos();
});
</script>

</body>
</html>

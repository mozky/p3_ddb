//Mío
<?php
  function insert_atributos(){

    $basedatos = $_POST["basedatos"];
    $tabla = $_POST["tabla"];
    $sitio = $_POST["sitio"];
    $fragmento = $_POST["fragmento"];
    $atr1 = $_POST["atr1"];
    $ope1 = $_POST["ope1"];
    $val1 = $_POST["val1"];
    $atr2 = $_POST["atr2"];
    $ope2 = $_POST["ope2"];
    $val2 = $_POST["val2"];
    $servername;
    $username;
    $password;
    $dbname;

    if ($sitio==1){ //sitio 1
      $servername = "localhost";
      $username = "root";
      $password = "n0m3l0s3";
      $dbname = "fragmentos";
    }else if($sitio==2){ //sitio 2$tabla$sitio\y$fragmento
      $servername = "10.100.65.68:3306";
      $username = "root";
      $password = "root";
      $dbname = "fragmentos";
    }else if($sitio==3){  //sitio 3
      $servername = "localhost";
      $username = "root";
      $password = "root";
      $dbname = "fragmentos";
    }

    $connLocal = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES  \'UTF8\''));
    $connLocal->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $connForanea = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES  \'UTF8\''));
    $connForanea->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "USE $basedatos";
    $connLocal->exec($sql);

    $sqlForanea = "DROP TABLE IF EXISTS $tabla$sitio$fragmento";
    $connForanea->exec($sqlForanea);

    $sqlForanea = "CREATE TABLE $tabla$sitio$fragmento (";
    $sql = "DESC $tabla";
    $stm = $connLocal->prepare($sql);
    $stm->execute();
    $campos = $stm->fetchAll();
    $lastKey = array_search(end($campos), $campos);
    foreach ($campos as $key => $campo){
      if($key === $lastKey) {
        $sqlForanea .= "$campo[Field] $campo[Type])";
      }
      else {
        $sqlForanea .= "$campo[Field] $campo[Type], ";
      }
    }
    $connForanea->exec($sqlForanea);

    $sql = "SELECT * FROM $tabla WHERE $atr1 $ope1 \"$val1\" AND $atr2 $ope2 \"$val2\"";
    $stm = $connLocal->prepare($sql);
    $stm->execute();
    $instancias = $stm->fetchAll(PDO::FETCH_NUM);

    $auxsqlForanea = "INSERT INTO $tabla$sitio$fragmento VALUES (";
    foreach ($instancias as $instancia){
      $lastKey = array_search(end($instancia), $instancia);
      $sqlForanea = $auxsqlForanea;
      foreach($instancia as $key => $valor){
        if($key === $lastKey) {
          $sqlForanea .= "\"$valor\")";
        }
        else {
          $sqlForanea .= "\"$valor\",";
        }
      }
      $connForanea->exec($sqlForanea);
      error_log(print_r($sqlForanea, TRUE));
    }

    // $sqlForanea = "CREATE TABLE $dbname";
    // $sqlForanea = "INSERT INTO $tabla (idDepto, nombre) VALUES (\"D015\", \"Not Marisqueria\")";
    //
    // $connLocal->query($sql);

    // foreach ($connLocal->query($sql) as $row){
    //   error_log(print_r($row, TRUE));
    //
    // }
    // $sql = "INSERT INTO $tabla (idDepto, nombre) VALUES (\"D014\", \"Marisqueria\")";
    // $connLocal->query($sql);
    //
    // $sql = "USE $basedatos";
    // $connForanea->query($sql);
    // $sqlForanea = "INSERT INTO $tabla (idDepto, nombre) VALUES (\"D015\", \"Not Marisqueria\")";
    //$connForanea->query($sql);
    //$sql = "INSERT INTO $tabla (idDepto, nombre) VALUES ("D014", (SELECT nombre FROM $tabla WHERE $atr1 $ope1 \"$val1\" AND $atr2 $ope2 \"$val2\"))";
    //$conn->query($sql);

    $connLocal = null;
    $connForanea = null;
  }
  insert_atributos();
?>

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
    }else if($sitio==2){ //sitio 2
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

    $sqlForanea = "DROP TABLE IF EXISTS $basedatos$tabla$sitio$fragmento";
    $connForanea->exec($sqlForanea);

    $sqlForanea = "CREATE TABLE $basedatos$tabla$sitio$fragmento (";
    $sql = "DESC $tabla";
    $stm = $connLocal->prepare($sql);
    $stm->execute();
    $campos = $stm->fetchAll();

    $numItems = count($campos);
    $i = 0;
    //$lastKey = array_search(end($campos), $campos);
    foreach ($campos as $key => $campo){
      if(++$i === $numItems) {
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

    $auxsqlForanea = "INSERT INTO $basedatos$tabla$sitio$fragmento VALUES (";
    foreach ($instancias as $instancia){
      $numItems = count($instancia);
      $i = 0;
      $sqlForanea = $auxsqlForanea;
      foreach($instancia as $key => $valor){
        if(++$i === $numItems) {
          $sqlForanea .= "\"$valor\")";
        }
        else {
          $sqlForanea .= "\"$valor\",";
        }
      }
      //error_log(print_r($sqlForanea, TRUE));
      $connForanea->exec($sqlForanea);
    }
    $connLocal = null;
    $connForanea = null;
  }
  insert_atributos();
?>

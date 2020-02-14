<?php
    error_reporting(0);
    SESSION_START();
    if($_SESSION['Iniciado'])
    { 
        require('./../config/Conect.php');

        $statement = $conection -> prepare ('UPDATE pedidos SET Fecha_Entrega=?,Cliente=?,Kilos=?,Importe=?,Observaciones=? WHERE Id=?');
        $statement -> BIND_PARAM('ssiisi',$fecha_entrega,$cliente,$kg,$importe,$observaciones,$id);
        if((isset($_POST['Id']))&&(isset($_POST['Entrega']))&&(isset($_POST['Cliente']))&&(isset($_POST['Kg']))&&(isset($_POST['Importe'])))
        {
            $id=$_POST['Id'];
            $fecha_entrega = date("Y-m-d",strtotime($_POST['Entrega']));
            $cliente = filter_input(INPUT_POST, 'Cliente',FILTER_SANITIZE_STRING);
            $kg = $_POST['Kg'];
            $importe =$_POST['Importe'];

            if(isset($_POST['Observaciones']))
                $observaciones = filter_input(INPUT_POST, 'Observaciones',FILTER_SANITIZE_STRING);
            else
                $observaciones=NULL;

            $statement -> execute();
        }
        if($conection -> affected_rows >= 1)
            echo json_encode('Aceptado');
        else 
            echo json_encode('Error');
    }

?>
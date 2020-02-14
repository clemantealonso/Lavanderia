<?php
    error_reporting(0);
    SESSION_START();
    if($_SESSION['Iniciado'])
    { 
        require('./../Config/Conect.php');
        $statement = $conection -> prepare ('INSERT INTO pedidos (Id,Fecha_Recepcion,Fecha_Entrega,Cliente,Kilos,Importe,Observaciones) VALUES(?,?,?,?,?,?,?)');
        $statement -> BIND_PARAM('isssiis',$id,$fecha_registro,$fecha_entrega,$cliente,$kg,$importe,$observaciones);
        if((isset($_POST['Entrega']))&&(isset($_POST['Cliente']))&&(isset($_POST['Kg']))&&(isset($_POST['Importe'])))
        {
            $id=NULL;
            $fecha_registro = date("Y").'-'.date("m").'-'.date("d");
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
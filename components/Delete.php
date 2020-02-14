<?php
    error_reporting(0);
    SESSION_START();
    if($_SESSION['Iniciado'])
    {  
        require('./../config/Conect.php');

        $statement = $conection -> prepare ('DELETE FROM pedidos WHERE Id=?');
        $statement -> BIND_PARAM('i',$id);
        
        if((isset($_POST['Id'])))
        {
            $id=$_POST['Id'];

            $statement -> execute();
        }
        if($conection -> affected_rows >= 1)
            echo json_encode('Aceptado');
        else 
            echo json_encode('Error');
    }
?>
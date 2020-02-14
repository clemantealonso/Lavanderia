<?php
    error_reporting(0);
    SESSION_START();
    if($_SESSION['Iniciado'])
    {   
        require('./../config/Conect.php');
        $sql='SELECT * FROM pedidos';
        $resultados = $conection->query($sql);
        $data = array();
        if($resultados->num_rows)
            while($fila=$resultados->fetch_Assoc())
                $data[] = array('Id'=>$fila['Id'],'Fecha_Recepcion'=>$fila['Fecha_Recepcion'],'Fecha_Entrega'=>$fila['Fecha_Entrega'],'Cliente'=>$fila['Cliente'],'Kilos'=>$fila['Kilos'],'Importe'=>$fila['Importe'],'Observaciones'=>$fila['Observaciones']);
        if(isset($data))
            echo json_encode($data);
        else
            echo json_encode("Error");
    }
?>
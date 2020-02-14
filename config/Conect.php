<?php
    SESSION_START();
    $conection = new mysqli('localhost','root','','Examen3');
    if($conection -> connect_errno)
        die('Este pedo anda mal');

    if(isset($_POST['Iniciar']))
    {
        $_SESSION['Iniciado']=true;
        echo json_encode("Activado");           
    }
    else if(isset($_POST['Terminar']))
    {
        unset($_SESSION['Iniciado']);
        session_destroy();
        echo json_encode("Desactivado");    
    }
?>
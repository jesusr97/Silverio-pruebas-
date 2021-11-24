<?php
    if (isset($_POST['usuario']) && isset($_POST["mensaje"])){
        $usuario=$_POST["usuario"];
        $mensaje=$_POST["mensaje"];
        $image = $_FILES['archivos']['tmp_name'];
        $imgContenido = file_get_contents($image);
        $imgContenido=base64_encode($imgContenido);
        $conec=mysqli_connect("localhost","root","");
        $db=mysqli_select_db($conec,'foro');
        $sql="INSERT INTO mensajes (`id`, `usuario`, `mensaje`, `archivos`, `hora`) VALUES (NULL,'${usuario}', '${mensaje}', '${imgContenido}' ,NOW())";

        mysqli_query($conec,$sql);
        echo "OK";

        
        
    }
    else{
        echo "ERROR";
    }

    // if (isset($_POST['archivos'])){
    //     $archivos=$_POST["archivos"];
    
    //     $conec=mysqli_connect("localhost","root","");
    //     $db=mysqli_select_db($conec,'foro');
    //     $sql="INSERT INTO mensajes (`archivos`) VALUES ('${archivos}')";
    //     mysqli_query($conec,$sql);
    //     echo "OK";
    // }
    // else{
    //     echo "ERROR";
    // }


?>
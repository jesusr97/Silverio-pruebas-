<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
	<title>Pagina Principal</title>

    <script  src="codigo.js"></script>
 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

   
<body>
  

    <?php $nombre="Jesus Rueda Padilla";?>

    <h1>Mi nombre es <?php echo $nombre;?></h1>

    <p>EDAD <input type="text" id="edad" placeholder="Introduce tu edad"></p>
    <p><button onclick="alert(document.getElementById('edad').value)"> Calcular</button></p>
	
    <p>
        <input type="text" name="sumando1" id="sumando1"/> +
        <input type="text" name="sumando2" id="sumando2"/> =
        <input type="text" name="resultado" id="resultado"/>


    </p>
    <p><button onclick="suma()"> Calcular</button></p>
    
    
</body>


</html>
 
  
   
    
     
      
       
        
          

    document.getElementById('validar').addActionListener('respuesta', function(){
    var fecha=document.getElementsById("Fecha").value;
    var span=document.getElementsById("respuesta");
    span.innerHTML=(fecha.valida_fecha())?"OK":"ERROR";

})
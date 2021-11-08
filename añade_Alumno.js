window.addEventListener("load",function(){

    var boton=document.getElementById("boton");

boton.onclick=function () {

    var nombreDado = document.getElementById("nombre").value;
    var apellido1Dado = document.getElementById("apellido1").value;
    var  apellido2Dado = document.getElementById("apellido2").value;
    var  FNacimientoDado = document.getElementById("fechaNacimiento").value;
    var DNIdado = document.getElementById("dni").value;
    var cursoDado = document.getElementById("curso").value;

    var alumno1= new alumno1 (nombreDado,apellido1Dado,apellido2Dado,FNacimientoDado, DNIdado,cursoDado);
    
    p.innerHTML=alumno.escribir();


}
})
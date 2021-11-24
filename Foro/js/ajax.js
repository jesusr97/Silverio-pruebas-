window.addEventListener("load",function(){

const enviar=document.getElementById("enviar");
const form1=document.getElementById("form1");
const contenedor=document.getElementById("contenedor");

var ultimo=0;
var usuario=form1["usuario"];
var mensaje=form1["mensaje"];
var archivos=form1["archivos"];

enviar.onclick=EnviarMensaje;



var tmp1=this.setInterval(pedirMensajes,5000);


function pedirMensajes(){

    const ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status==200){

            var respuesta=JSON.parse(ajax.responseText);

            if(respuesta.mensajes.length>0){
                for(let i=0; i<respuesta.mensajes.length; i++){

                    var div=crearContenido(respuesta.mensajes[i],usuario.value);
                    contenedor.appendChild(div);
                    contenedor.scrollTop=contenedor.scrollHeight;
                }

            }
            ultimo=respuesta.ultimo;
        }

    }

    ajax.open("GET","php/pedir.php?ultimo="+ultimo);
    ajax.send();
}


function crearContenido(mensaje,usuario){
    var claseUsuario=(mensaje.usuario==usuario)?"propio":"otros";

    const div1=document.createElement("div");
    div1.className=claseUsuario;

    const div2=document.createElement("div");
    div2.className="usuario";
    div2.innerHTML=mensaje.usuario;

    const div3=document.createElement("div");
    div3.className="hora";
    div3.innerHTML=mensaje.fecha;

    const div4=document.createElement("div");
    div4.className="mensaje";
    div4.innerHTML=mensaje.mensaje;

    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);

   return div1;


}


function EnviarMensaje(ev){
    //no hagas lo que estas acostumbrado a hacer
    ev.preventDefault();
    if(usuario.value !="" && mensaje.value !=""){
        var texto=encodeURI("usuario="+ usuario.value + "&" +
        "mensaje="+ mensaje.value+"archivos="+ archivos.value);
        
        const ajax=new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && ajax.status==200){

                var respuesta=ajax.responseText;
                // alert(respuesta);
                if(respuesta=="OK"){
                    form1["mensaje"].value="";
                    form1["mensaje"].focus();
                    form1["archivos"].value="";
                    form1["archivos"].focus();
                }

            }

        }
        ajax.open("POST","php/insertar.php");
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        ajax.send(texto);
    }
  
}

    function EnviarArchivos(ev){
        //no hagas lo que estas acostumbrado a hacer
        ev.preventDefault();
        if(archivos.value !=""){
            var archivo=encodeURI("archivos="+ archivos.value);

            const ajax=new XMLHttpRequest();
            ajax.onreadystatechange=function(){
                if(ajax.readyState==4 && ajax.status==200){

                    var respuesta=ajax.responseText;
                    // alert(respuesta);
                    if(respuesta=="OK"){
                        form1["archivos"].value="";
                        form1["archivos"].focus();
                    }

                }

            }
            ajax.open("POST","php/insertar.php");
            ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            ajax.send(archivo);
        }
    
    }




})
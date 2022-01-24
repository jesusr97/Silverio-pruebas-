window.addEventListener("load",function(){

const enviar=document.getElementById("enviar");
const form1=document.getElementById("form1");
const contenedor=document.getElementById("contenedor");

var ultimo=0;

var usuario=form1["usuario"];
var mensaje=form1["mensaje"];
var archivos=form1["archivos"];

// if(this.localStorage.getItem("usuario")!=""){

//     usuario.value=this.localStorage.getItem("usuario");
// }
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
    // if(archivos.files.length>0){
        
            const div5=document.createElement("img");
            div5.className="archivos";
            div5.setAttribute("src","data:image/jpeg;base64,"+mensaje.archivos);
            div1.appendChild(div5);
        
        
//     }
  
    

   return div1;


}


 function EnviarMensaje(ev){
    //no hagas lo que estas acostumbrado a hacer
    ev.preventDefault();
    if(usuario.value !="" && mensaje.value !=""){
        localStorage.setItem("usuario",usuario.value);
        var formData=new FormData();
        formData.append("usuario",usuario.value);
        formData.append("mensaje",mensaje.value);
        if(archivos.files.length>0){
            formData.append("archivos",archivos.files[0]);

        }
        fetch("php/insertar.php",{

            method:"POST",
            body:formData

        }).then(response => response.json())
          .catch(error=>console.error("Error",error))
          .then(response => {

            if(response.respuesta){

              
                    form1["mensaje"].value="";
                    form1["mensaje"].focus();
                    form1["archivos"].value="";
                    form1["archivos"].focus();
          

            }

          })


    }
  
}


})
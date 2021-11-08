window.addEventListener("load",function(){

    const dni= document.getElementById("dni");
    const Fecha_nac= document.getElementById("Fecha_nac");
    
        const newAlumNombre=document.getElementById("nombre");

    dni.onkeyup=function(){

        if(this.value.length==8){
            this.readOnly=true;
    
            this.value= this.value+ averiguaLetraDni();
            
        }

    }
    function averiguaLetraDni()
    {
    cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    posicion = document.getElementById("dni").value%23;
    letra = cadena.substring(posicion,posicion+1);
    this.value=letra;
    return letra;
    }


    Fecha_nac.onkeyup=function(){
        
            if(this.value.length==2 || this.value.length==5){
                    
                this.value=this.value + "/";
               
            }

    }

    document.getElementById("insertar").onclick=function(){
           
        insertar(dni.value);
        insertar(newAlumNombre.value);
        insertar(Fecha_nac.value);
   
    };

    function insertar(Datos){
        var option=document.createElement("option");        
        option.innerHTML=Datos;      
        var tbody=document.getElementById("newAlum");
        tbody.appendChild(option).value;
 



    }






})




window.addEventListener("load",function(){

    const dni= document.getElementById("dni");
    const Fecha_nac= document.getElementById("Fecha_nac");
    
        const nombre=document.getElementById("nombre");

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
           
        insertar(dni.value,nombre.value,Fecha_nac.value);
   
   
    };

    // function insertar(Datos){
        
    //     var option=document.createElement("option");        
    //     option.innerHTML=Datos;      
    //     var tbody=document.getElementById("newAlum");
    //     tbody.appendChild(option).value;
 




    // }

    function insertar(dni,nombre,Fecha_nac){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        // // tdX.onclick=borrar;
        // var tdE=document.createElement("td");
        // // tdE.onclick=editar;

        // var tdC=document.createElement("td");
        // // tdC.onclick=cancelar;
        
        td1.innerHTML=dni;
        td2.innerHTML=nombre;
        td3.innerHTML=Fecha_nac;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        // tr.appendChild(tdX);
        // tr.appendChild(tdE);
        // tr.appendChild(tdC);
        var tbody=document.getElementById("newAlum");
        tbody.appendChild(tr);
        
    }







})




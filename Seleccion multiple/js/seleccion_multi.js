window.addEventListener("load",function(){

    const btnDerAll=document.getElementById("btnDerAll");
    const btnIzqAll=document.getElementById("btnIzqAll");
    const selectIzq=document.getElementById("alumnos");
    const selectDer=document.getElementById("seleccionados");
    const btnDer=this.document.getElementById("btnDer");
    const btnIzq=this.document.getElementById("btnIzq");
    const btnGrabar=this.document.getElementById("guardar");
    const btnBorrarStorage=this.document.getElementById("borrar");


    btnDerAll.onclick=function(){
        selectDer.añadirTodos(selectIzq);
        selectDer.Ordenar();
        }

        btnDer.onclick=function(){
            selectDer.añadirSeleccionados(selectIzq);
            selectDer.Ordenar();
    
            }    

        
    btnIzqAll.onclick=function(){
        selectIzq.añadirTodos(selectDer);
        selectIzq.Ordenar();

    }

    btnIzq.onclick=function(){
        selectIzq.añadirSeleccionados(selectDer);
        selectIzq.Ordenar();

        }

    document.getElementById("insertar").onclick=function(){
      
        var newAlum= document.getElementById('newAlum').value;
       
      
        insertar(newAlum);
   
    };

    function insertar(newAlum){
        var option=document.createElement("option");
        
        // var alt=document.createAttribute("value");
        // alt.innerHTML=newAlum;
        option.innerHTML=newAlum;
        // option.appendChild(td1);
        var tbody=document.getElementById("alumnos");
        tbody.appendChild(option);



    }

    btnGrabar.onclick=function(){
        var vector=[];
        var options = selectIzq.options;

        for( var i=0; i<options.length; i++)
        {
            vector.push({"value":options[i].value, "texto":options[i].text})
        }

        var textoEnJSON=JSON.stringify(vector);
        localStorage.setItem("nombre_alumnos",textoEnJSON);
    }

     btnBorrarStorage.onclick=function(){
         localStorage.clear();
     }

    var alumnos = JSON.parse(localStorage.getItem("nombre_alumnos"));
        for (let i=0; i<alumnos.length; i++)
        {
            var option = document.createElement("option");
            option.value=alumnos[i].value;
            option.text=alumnos[i].texto;
            selectIzq.appendChild(option);
        }
    


})
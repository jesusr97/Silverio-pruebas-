 window.addEventListener("load",function(){
   
   
    document.getElementById("insertar").onclick=function(){
      
        var dni= document.getElementById('dni').value;
        var nombre= document.getElementById('nombre').value;
        var edad= document.getElementById('edad').value;
      
        insertar(dni,nombre,edad);
   
    };
    
    function insertar(dni,nombre,edad){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var tdX=document.createElement("td");
        tdX.onclick=borrar;
        var tdE=document.createElement("td");
        tdE.onclick=editar;

        var tdC=document.createElement("td");
        tdC.onclick=cancelar;
        
        td1.innerHTML=dni;
        td2.innerHTML=nombre;
        td3.innerHTML=edad;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(tdX);
        tr.appendChild(tdE);
        tr.appendChild(tdC);
        var tbody=document.getElementById("bodytabla");
        tbody.appendChild(tr);
        
    }

    var cabecera = this.document.querySelectorAll("table thead tr th");
    cabecera[0].onclick=ordenaColumnas(0);
    cabecera[1].onclick=ordenaColumnas(1);
    cabecera[2].onclick=ordenaColumnas(2);
    
  

    function ordenaColumnas(cabecera){

            return function(){
                var vector=[];
               var tbody=document.getElementById("bodytabla");
                for(let j=0;j<tbody.children.length;j++){
                    vector.push(tbody.children[j]);
                }
                vector.sort(function(a,b){return a.children[cabecera].innerText.localeCompare(b.children[cabecera].innerText)})
                for(let j=0;j<tbody.children.length;j++){
                    tbody.appendChild(vector[j]);
                }
            }
        }
        
        var tbody=document.getElementById("bodytabla");

        tbody.parentElement.ondblclick=function(){
            var editable=this.getAttribute("editable");
            if (editable!=null && editable!="on"){
                this.setAttribute("editable","on");

                // var table = document.getElementById("tabla");  
                 var headtabla= document.getElementById("headtabla");
                var th = document.createElement("th");
                th.innerHTML="ACCION";
                document.getElementById("x").appendChild(th);
                // table.appendChild(headtabla);
           
                

                for (let i=0;i<tbody.children.length;i++){

                    // var td1 = document.createElement("td");
                    /*
                        Explicacion lineas posteriores
                        Tbody= <tbody></tbody>
                        tbody.rows= <tbody>
                                        <tr></tr>
                                        <tr></tr>
                                        <tr></tr>
                                    </tbody>

                        tbody.rows.children=<tbody> (accede a los td de los tr)
                                        <tr>
                                         <td>77382413V</td>
                                         <td>Jesus</td>
                                         <td>24</td>
                                         <td></td>
                                         <td></td>
                                        </tr>
                                    </tbody>

                    tbody.rows.children.innerHTML="X"; => 
                            <tbody> (accede a los td de los tr)
                                        <tr>
                                         <td>77382413V</td>
                                         <td>Jesus</td>
                                         <td>24</td>

                                         <td>X</td>
                                         <td>E</td>
                                        </tr>
                                    </tbody>
                    */

                    tbody.rows[i].children[3].innerHTML="X"; 

                    tbody.rows[i].children[4].innerHTML="E";

    
                        
                        tbody.children[i].children[5].innerText="C";
                        
                  
                    
                }
                        

            }
        }
        function borrar(){

            var fila=this.parentElement;
            fila.parentElement.removeChild(fila);

        }

        function editar(){
            
            var fila=this.parentElement;
            var tds=fila.children;

            for(i=0;i<tds.length-3;i++){
            
                var input=document.createElement("input");
                input.type="text";
                var contenido=fila.children[i].innerText;
                input.value=contenido;

                tds[i].setAttribute("valor",contenido);
                tds[i].removeChild(tds[i].childNodes[0]);
                tds[i].appendChild(input);
                
            }
           


        }

        function cancelar(){
            var fila=this.parentElement;
            var tds=fila.children;

            for(let i=0;i<tds.length-1;i++){
                let valor=tds[i].getAttribute("valor");
                tds[i].innerHTML=valor;
            }
            td.innerHTML="";
            fila.appendChild(fila.children[0]);
            fila.appendChild(fila.children[0]);
            
        }



        
});




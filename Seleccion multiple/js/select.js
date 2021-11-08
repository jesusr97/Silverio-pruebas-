HTMLSelectElement.prototype.añadirTodos=function(select){

    while(select.children.length>0){
        
        this.appendChild(select.children[0]);

    }



}

HTMLSelectElement.prototype.añadirSeleccionados=function(select){


    var options=select.selectedOptions;

    while(options.length>0){

        this.appendChild(options[0]);
    }


}

HTMLSelectElement.prototype.Ordenar=function(){

    var v = [];

    var coleccion = this.options;
    for(i=0; i<this.options.length; i++){
        v.push(coleccion[i]);
    }
    v.sort(function(a,b){return a.innerHTML.localeCompare(b.innerHTML)});
    
    for(i=0;i<v.length;i++){
        this.appendChild(v[i]);
    }
    
    
}
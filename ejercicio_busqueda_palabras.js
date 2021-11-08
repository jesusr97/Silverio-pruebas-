String.prototype.buscar=function(subcadena=""){

var texto="Juana va al cine mañana";
var j=-1;
respuesta=[]


    while (texto.indexOf("a",j)>=0){
        j=texto.indexOf("a",j);
        respuesta.push(j++);
    }
}

// text area (area de texto) Formulario que tenga caja de texto y un t area, en el t area escribimos una frase
// yb en la caja de texto lo que queremos buscar y que saque la palabra donde se ha encontrado


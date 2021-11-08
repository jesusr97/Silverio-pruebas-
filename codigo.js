

        // 1. Validar que es fecha 

      //  mood cutre -> var exp= /^\d\d[\/-]\/\d\d[\/-]\/\d{4}/
      //  mood bonito ->var exp= /^(0[1-9]|[0-2]\d|3[0-1])[\/-](0[1-9]|1[0-2])[\/-](\d{4})/

        
        // 2. Validar la hora minutos y segundos
       
      //  var exp = /^(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]):(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])/

      // La frase comienza por una palabra mayuscula y capturar la palabra

     //  var exp= /^([A-ZÑ][a-zñ]+) .*$/

    // Expresion regular para tarjeta de credito.

    // var exp= /^([0-9]{4} ?){4}$/

     //Un aula del instituto donde las aulas son el primer digito la planta el segundo el segundo el aula y la letra el edificio
     //siendo A -- 3 plantas
     // B -- 2 plantas 
     // D -- 2 Plantas

    // var exp=/^(0[1-3]| ) /
    
/*7-Expresión regular que valida una matricula */

//var exp = /^(\d){4}\s(([B-D]|[F-H]|[J-N]|[P]|[R-T]|[V-Z]){3})/

//8-Expresión regular que valida un email/

//var exp = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/

//Meter direccion y el codigo postal -- nos sale la provincia y seleccionamos localidad


// radiobutton para elegir si es empresa o particular
// documento de identificacion, si es particular el dni y si es una empresa el documento
// si es una empresa razón social(nombre de la empresa) si es particular nombre y apellidos
// dirección (provincia readonly)
//fecha de nacimiento validada
//fecha carnet
//telefono

//info del coche
// matricula, fecha matriculacion, marca, modelo, cilindrada, puertas(entre 2 y 5), extras(textarea, 
//cada linea un extra) 

//Se tiene que validar todo y devolverlo en un json
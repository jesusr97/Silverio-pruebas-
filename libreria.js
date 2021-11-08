// FECHAS:


/* definir fechas = const d = new Date();

 new Date(year,month,day,hours,minutes,secobds,miliseconds);


 a=new Date(2021,12);
     Sat Jan 01 2022 00:00:00 GMT+0100 (hora estándar de Europa central)
 new Date(2022,1,29);
     Tue Mar 01 2022 00:00:00 GMT+0100 (hora estándar de Europa central)
 new Date(2024,1,29);
     Thu Feb 29 2024 00:00:00 GMT+0100 (hora estándar de Europa central)
 (new Date(2022)).toUTCString();
     'Thu, 01 Jan 1970 00:00:02 GMT'
 (new Date()).getDay();   Te da el dia de la semana (del 0 al 6, siendo 0 el domingo)
       1

*/

/* EJERCICIOS
1. Caja de texto con fecha, un boton de validar y si la fecha es buena sale un span si es correcta con un OK o un error si no lo es

2. Lo mismo que el ejercicio anterior pero calculando la edad (metes la fecha de nacimiento y te dice que edad tienes en un span) 

3. Lo mismo pero te salen los dias que llevas existiendo (metes fecha nac y t saca los dias y las horas que han pasado desde que naciste)
   se da por defecto que nacemos a las 0:00 horas.

4. Dos cajas para poner diferentes fechas (fecha 1 y fecha 2), 
 un boton CALCULAR y sale un texto en pantalla diciendote los años,meses y dias.

5. Una fecha, un boton de calcular y saca texto con los años, meses y dias ue te quedan para jubilarte (digamos que a los 65 años la jubilacion)
*/

// para ue la pagina no se recarge al pulsar un boton      document.getElementById("boton").onclick=function(ev){
                                                                        // ev.preventDefault();

                                                                // }


    //usar getDay();                                            

//Capturar boton y que funcione:





String.prototype.valida_fecha=function (){

   var respuesta=false;
   var partes=this.split("/");
   if(partes.length==3){
        var fecha=new Date(partes[2],partes[1]-1,partes[0]);
        if(fecha.getFullYear()==partes[2] &&
        fecha.getMonth()==(partes[1]-1) && 
        fecha.getDate()==partes[0]){

            respuesta=true;
        }
        
        
        
        

   }

   return respuesta;
}


String.prototype.edad=function(){

    var a=newDate(año,mes-1,dia);
    año=getElementById("año");

}
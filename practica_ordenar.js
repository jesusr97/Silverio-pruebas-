
numeros.sort(function(a,b){return Math.random()-0,5});


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a,b){return a.year -b.year});

  cars.sort(function(a,b){return b.year -a.year});

//Forma dificil de comparar String:

  cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1};
    if (x > y) {return 1};
    return 0;
  });

  // Otra forma mas facil:
    cars.sort(function(a,b){return a.type.localeCompare(b.type.localeCompare)});

    //Escribir en html varios nuemros de telefonos, devolver los numeros de telefono ordenador en una lista (array)
    // con un boton que al pulsarlo los ordene
    //podremos meter textos y ordenarlos alfabeticamente(con otro boton)
    //tambien ordenar fechas
    //usar un text area

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

      5. Una fecha, un boton de calcular y saca texto con los años, meses y dias ue te quedan para jubilart (digamos que a los 65 años la jubilacion)
    */

      

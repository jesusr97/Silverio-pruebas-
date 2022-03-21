$(function(){
    

    function detalleProducto(id){
      guardarProductos();
      var continente =$('<div>').appendTo($('.cuerpo').load('plantillas/detalles.html',function(){

        $.$.getJSON("ajax.php",
        {accion:"detalle",
          id:id
        },
          function (data) {
            console.log(data);
            continente.find("div.precio").text(data.precio + '€');
            continente.find("p").text(data.descripcion);
            var ruta="index_files/"+
              ((id<10))
          }
        );


      }));
    }

    $('a[id^="detalles_"]').click(function (e) { 
        e.preventDefault();
        //split para separar una cadena por un caracter (ej detalles_3 quiero separar el 3 de detalles_)
        //posicion 0 del split pillaria detalles y la posicion 1 pillaria el numero 3 pej (separando por la cadena '_')
        var numeroProd = $(this).attr('id').split('_')[1];

        alert("Has seleccionado detalles del producto numero " +numeroProd);
        // detalleProducto(numeroProd);
      

    });

    $('a[id^="comprar_"]').click(function (e) { 
      e.preventDefault();
      //split para separar una cadena por un caracter (ej detalles_3 quiero separar el 3 de detalles_)
      //posicion 0 del split pillaria detalles y la posicion 1 pillaria el numero 3 pej (separando por la cadena '_')
      var numeroProd = $(this).attr('id').split('_')[1];

      alert("Has seleccionado comprar del producto numero " +numeroProd);
      // detalleProducto(numeroProd);
    

  });
    $('a#ver_carrito').click(function (e){
      e.preventDefault();
      mostrarcarrito();
    });
  
    
    // $('.foto').draggable(function (e) { 
    //     e.preventDefault();

    //     $('.ver_carrito').ondragover();
      

    
 
          
            var $foto = $( ".foto" );
            var $carrito = $( "#carrito" );
         

            $( $foto ).draggable({
              revert: "invalid",
              helper: "clone",
              
            
            });
            
          
            $carrito.droppable({
                
                  drop: function( event, ui ) {
                    //comprarProducto(id);
                    // comprarProducto(ui.draggable.attr('id').split('_')[1]);
                    alert("Comprame esto mama");
                  }
            });

            var memoria = $('<div>');

            function guardarProductos(){
              $('.cuerpo').children().appendTo(memoria);
            }

            function restaurarProductos(){
              memoria.appendTo($('.cuerpo'));
            }
          
             
    //Ejercicio 7
    function mostrarCarrito(){
      var cont=$("<div>").load("plantilla/carrito.html")


    }
          
    
});


 





$(function(){

    var continentes=$("#continentes");
    var paises=$("#paises");
    var resultado=$("#resultado");

    function cargarPais(pais){
        return function(){
            resultado.empty();
            resultado.text(JSON.stringify(pais));

        }
    }

    continentes.find("option").click(function(){
        paises.empty();
        $.getJSON("https://restcountries.com/v3.1/region/"+$(this).val(),
            function(data, textStatus, jqXHR){
                $.each(data,function(ind,valor){
                    $("<option>")
                    .text(valor.translations.spa.official)
                    .click(cargarPais(valor))
                    .appendTo(paises);
                
                })
            }
        ); 
    })
});
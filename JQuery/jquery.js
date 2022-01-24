//5. los li en posicion impar los escrinimos en mayuscula.
$("ol li:nth-child(odd), ul li:nth-child(odd)").each(function(ind,valor){(console.log($(valor).text($(valor).text().toUpperCase())))})
//6. añadimos en la tercera posicion un li con el texto "atun".
    $("<li>Atún</li>").insertBefore($("li").eq(3))
// 7. al pulsar sobre un li con "click" lo situamos delante del inmediato superior.
    $("li").on(
        {
            click:function(){$(this).insertBefore($(this).prev())}
        })
// 8. al pulsar sobre un li con "dblclick" lo situamos detras del inmediato inferior.
    $("li").on(
        {
            dblclick:function(){$(this).insertAfter($(this).next())}
        })
// 9. al posicionarme sobre un li se aumenta el tamaño de la letra a 30px despues de 2 segundos.
    $("li").hover(function(){ $(this).animate({fontSize:"30px"},2000)})
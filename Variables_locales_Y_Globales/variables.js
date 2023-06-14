//esto es una variable global:
var x = "informatica"; 

/* esto significa que la variable x se 
puede utilizar en cualquier parte del codigo*/

function local (){ 
    var u = "programación"//esto es una variable local
    /*esto significa que la variable u solo se puede utilizar
    dentro de la funcion local*/
    document.write("a mi me gusta la " + u + "<br>");
}
local();

/*el document.write de aquí abajo no funciona con la variable u 
porque la variable u solo se puede utilizar dentro de la funcion local*/

//document.write("a mi me gusta la " + u + "<br>");

//el document.write de aquí abajo si funciona con la variable x porque es una variable global
document.write("a mi no me gusta la " + x + "<br>");
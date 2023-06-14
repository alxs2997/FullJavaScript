//dentro de una funcion se declara otra funcion

function uno (){
    document.write("Soy la funcion uno <br>");
};
function dos (){
    document.write("Soy la funcion dos, llamando a uno: <br>");
};
function telefono (){
    dos();
    uno();
};

telefono();
/* en javascript el código se lee de arriba hacia abajo,
 por lo que si llamamos a una función que está declarada 
 más abajo, no la va a reconocer, por lo que hay que 
 declararla antes de llamarla. */
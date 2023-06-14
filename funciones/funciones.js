//Un programa grande funciona con muchas funciones pequeñitas

// Funciones declarativas
/*function saludo(contiene parametros) {
    // codigo a ejecutar
};*/

function saludar() {
    alert("Hola, cómo estás?"); //cada vez que querramos usar la función tenemos que llamarla
};
//se llama a la función al hacer click en un boton en el archivo html

//funciones forma moderna
function Sumar (a,b){
    document.write(a+b);
} 

//funciones expresivas o de flecha
const Sumar2 = (c,t) => {
    document.write(c+t);
}

//llamamos a la función de flecha:
Sumar2(5,5);
document.write("<br>");
//llamamos a la función moderna:
Sumar(2,2);

/* Las funciones flecha brillan mejor con cualquier cosa que 
requiera que this esté vinculado al contexto, y no a la función en sí. 
A pesar del hecho de que son anónimas, también me gusta usarlas con métodos como map y reduce
, porque creo que hace mi código más legible.*/
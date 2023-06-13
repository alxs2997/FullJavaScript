//comentario de una sola linea
/* comentario de varias lineas*/

//Tipos de datos son 6:
/* Númericos: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
String: "Hola", "Mundo", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
Boleanos: true, false
Null: null
Undefined: undefined
function: function(){}*/

//Variables: var, let, const

/* almacenar datos en una variable que pueden ser utilizados
posteriores en el programa. El valor de una variable puede cambiar (variar)
durante la ejecución del programa.*/

var nombre = "Juan";
var almacenar = 1 + 2; //el punto y coma indica que finaliza la sentencia

/* que es una palabra clave o keyword: son palabras reservadas que
no pueden ser utilizadas como nombres de variables, funciones, etc.*/

/*Palabras reservadas: var, let, const, if, else, for, while, switch, 
case, break, continue, function, return, true, false, null, undefined, new, this, delete, typeof, instanceof, 
in, do, try, catch, throw, finally, debugger, with*/

console.log(nombre); //imprime en consola el valor de la variable
console.log(almacenar);

//tipos de datos: Number. (enteros), float (decimales)
var entero = 7;
console.log("valor del tipo entero es:" + entero);//a esto se le llama concatenar una cadena de texto con una variable

var flotante = 7.5;
console.log("valor del tipo flotante es:" + flotante);

var cantidad = "Cien = 100";
console.log("valor del tipo string es:" + cantidad);//van entre comillas ("") o ('')

var num_string = "100";
var num_string2 = "200";
console.log("valor del tipo string es:" + num_string + num_string2);//concatena los valores de las variables

//booleanos: true, false (1 y 0)

var verdadero = true;
var falso = false;
console.log("valor del tipo booleano verdadero es: " + verdadero + "valor del tipo booleano falso es: " + falso);



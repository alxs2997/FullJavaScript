//Tipos de operadores: aritméticos, relacionales, lógicos, asignación, ternario, etc.

//Operadores aritméticos
/* 
Suma: +
Resta: -
Multiplicación: *
División: /
Módulo: % //residuo de la división
*/

var numero1 = 7, numero2 = 12, cadena ='Hola';

console.log('Operadores aritméticos');
console.log('Suma: ' + (numero1 + numero2));//resultado de la operación: 19
console.log('Resta: ' + (numero1 - numero2));//resultado de la operación: -5
console.log('Multiplicación: ' + (numero1 * numero2));//resultado de la operación: 84
console.log('División: ' + (numero1 / numero2));//resultado de la operación: 0.5833333333333334
console.log('Módulo: ' + (numero1 % numero2));//resultado de la operación: 7

console.log(numero1 + numero2 + cadena); //cadena + numero = concatenación
console.log(cadena + numero1 + numero2); //cadena + numero = concatenación

/*Operador unario: no son simbolos, son palabras como: 
typeof, delete, new, etc.  ESTE OPERADOR SOLO TRABAJA A TRAVÉS DE UN SOLO VALOR*/

//typeof: muestra una cadena con el tipo de dato de la variable

console.log("Operador unario: 'typeof'");
console.log(typeof numero1); //number
console.log(typeof cadena); //string
console.log(typeof true); //boolean

/*Operadores de comparación:retornan valores booleanos (true o false)
 exactamente igual: ===
 Distinto de: !==
 Menor que: <
 Mayor que: >
 Menor o igual que: <= 'example: 5 <= 5 = true'
 Mayor o igual que: >= 'example: 9>=8 = true'*/ 

 console.log("Operadores de comparación");
 console.log(numero1 === numero2); //false   | recordemos numero1 = 7 y numero2 = 12
 console.log(numero1 !== numero2); //true   | numero1 = 7 y numero2 = 12
 console.log(numero1 < numero2); //true     | numero1 = 7 y numero2 = 12
 console.log(numero1 > numero2); //false    | numero1 = 7 y numero2 = 12
 console.log(numero1 <= numero2); //true    | numero 1 = 7 y numero2 = 12
 console.log(numero1 >= numero2); //false   | numero 1 = 7 y numero2 = 12

 //Operadores lógicos: && (and), || (or), ! (not)
 /* && (and): si las dos condiciones son verdaderas, el resultado es verdadero.
    || (or): si una de las dos condiciones es verdadera, el resultado es verdadero.
    ! (not): niega la condición, si es verdadera, la convierte en falsa y viceversa.*/

console.log("Operadores lógicos: && (and)");
//operador and:
console.log(false && false); //false
console.log(false && true); //false
console.log(true && true); //true
console.log(numero1 < numero2 && numero2 > numero1); //true
 console.log("Operadores lógicos: || (or)");
//operador or:
console.log(false || false); //false
console.log(false || true); //true
console.log(true || true); //true
console.log(numero1 < numero2 || numero2 > numero1); //true

console.log("Operadores lógicos: ! (not)");
//operador not:
console.log(!false); //true
console.log(!true); //false
console.log(!(numero1 < numero2)); //false
console.log(!(numero2 < numero1)); //true

//Operadpres Ternarios: ? (ternario) Opera sobre 3 valores
/* cuando es true se elige el valor medio, cuando es 
false se elige el valor de la derecha*/

console.log("Operadores Ternarios: ? (ternario)");
console.log(numero1 > numero2 ? "Es mayor" : "Es menor"); //Es menor
console.log(numero1 < numero2 ? "Es mayor" : "Es menor"); //Es mayor
console.log(true ? 2 : 3); //2
console.log(false ? 2 : 3); //3
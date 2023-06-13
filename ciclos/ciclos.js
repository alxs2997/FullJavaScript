//Control de flujo de la aplicación

//CICLOS (LOOPS) while, do while, for

/*WHILE (mientras)
mientras (condición true) { //mientras la condición sea verdadera hasta que sea falsa
    //ejecuta este código
}
hacer{
    //ejecuta lo que tengo aquí
} mientras (true);

for ( *(inicias:)*var i = 0; *(evaluas:)* i < 10; *(lo que hace al final:)* i++) { // se indica como se divide el bloque de un for
    //repite este código 10 veces
}
*/

/* control de flujo con ciclos
Creando ciclos while, do while, for
*/

/*bucle while (mientras): la condicion entre parentesis
sea true, se ejecutará el código que está dentro de las llaves y las declaraciones
dentro del bucle se ejecutarán hasta que la condición sea false*/
/*
var num = 0; //inicializamos la variable

while(num <= 100){
    console.log(num); //nos mostrara 0  // el ciclo se rompe en 102 que no se mostrará
    num = num + 2; //incrementamos la variable en 2
}*/

/*no caer en ciclos infinitos ejemplo: while(num <= num)
se ejecutará infinitamente porque la condición 
siempre será true.

 igual cuando no le otorgamos un incremento a la variable
 para llegar a un resultado
*/

//ciclo do while (hacer mientras): se ejecuta al menos una vez

/*var deuda = 0;
var totalDePagos = 0;

do{
    deuda = Number(prompt("¿Cuánto es tu pago: ?"));
    totalDePagos = totalDePagos + deuda;
}//while(!deuda); //si no hay deuda, se ejecuta el ciclo
while(deuda); //si hay deuda, se ejecuta el ciclo hasta que se coloque 0
alert("Gracias por tu pago de $" + totalDePagos);*/

//ciclo for (para): se ejecuta un número determinado de veces

//mismo ejercicio del while pero con for
for(var num = 0; num <= 100; num = num + 2){ //representación compacta de un ciclo while
    console.log(num);
}


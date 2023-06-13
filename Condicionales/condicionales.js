//ahora si empezamos con la programación real
/*condicionales if, else if, else*/

/*¿Qué es una expresión?
es un fragmento de código que produce un valor, ejemplo:
2+2, "miNombreEsCarlos", 77, typeof 77, etc.

¿Qué es una decalaración?
es una sentencia que declara una variable, ejemplo:
console.log("hola"), var x = 5, etc.

NUESTROS PROGRAMAS SERÁN UNA SERIE DE 
DECLARACIONES
*/

/* IF (si)
ELSE IF (sino si)
ELSE (sino)

EJEMPLO: 
si (condición) {
    //ejecuta este código
} sino, si (esta condición es verdadera) {
    //ejecuta esrta operación
} sino {
    //muestrale esto en pantalla
    }
*/
/*
var semaforo = "anaranjado"; //todo lo que no sea verde, rojo o amarillo, se mostrará el mensaje de "el semaforo esta apagado"

if (semaforo === "verde") {
    alert("puedes pasar");
}
else if (semaforo === "rojo") {
    alert("no puedes pasar");
}
else if (semaforo === "amarillo") {
    alert("puedes pasar con precaución");
}
else{
    alert("el semaforo está en: " + semaforo + ", por lo tanto, está apagado"); //tarea realizada
}*/

var suedad = Number(prompt("¿Cuántos años tienes?: "));
var sgenero = prompt("¿Eres hombre (h) o mujer (m)?: ");

if ((suedad >= 18)&&(sgenero === "h")){
    alert("Puedes entrar al bar");
}
else if ((suedad < 18) && (sgenero === "h")){
    alert("No puedes entrar al bar");
}
else if ((suedad >= 18) && (sgenero === "m")){
    alert("Puedes entrar al bar acompañada de un hombre");
}
else if ((suedad < 18) && (sgenero === "m")){
    alert("No puedes entrar al bar regresa con tus padres");
}
else if ((suedad < 0) || (suedad > 100)){
    alert("Eres un fantasma");
}
else{
    alert("No entiendo tu respuesta");
} /*se enviará este mensaje si en el prompt no se escribe un número 
 una letra contemplada en la variable*/
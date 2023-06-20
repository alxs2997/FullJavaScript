//se crea el elemento de la lista de comida [lista1]
var elemento = document.createElement("li"),
//se crea el texto que se agregara al elemento
    producto = document.createTextNode("Manzana");
//se agrega el texto al elemento
    elemento.appendChild(producto);
//se agrega el elemento a la listavia el id de la lista
var padre = document.getElementById("lista1");
//se agrega el elemento a la lista en el html
padre.appendChild(elemento);

//Agregando un elemento antes de otro

//se crea el elemento de la lista de cosas [lista2]

var elemento2 = document.createElement("li"),
//se crea el producto que se agregara al elemento
    producto2 = document.createTextNode("Headset");

//se agrega el texto al elemento
    elemento2.appendChild(producto2);

//se agrega el elemento a la lista
var padre2 = document.getElementById("lista2");
//se agrega el elemento a la lista en el html
padre2.insertBefore(elemento2, padre2.childNodes[2]);

//cambiamos el color del elemento agregado

elemento2.style.color = "red";

//y del elemento agregado al final en la primera lista

elemento.style.color = "blue";

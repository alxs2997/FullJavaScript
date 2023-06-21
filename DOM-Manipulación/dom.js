//se crea el elemento de la lista de comida [lista1]
var elemento = document.createElement("li"),
//se crea el texto que se agregara al elemento
    producto = document.createTextNode("Manzana");
//se agrega el texto al elemento
    elemento.appendChild(producto);
//se agrega el elemento a la listavia el id de la lista
//var padre = document.getElementById("lista1");
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


//modificando un elemento ya existente
//var primerElemento = document.getElementById("lista1");

//primerElemento.textContent = "Pera <i><b>con</b> crema</i>"; //esto ejecuta como texto plano el html

//para acceder y cambiar el elemento uno de la lista 1 podemos ocupar innerHTML

//primerElemento.innerHTML = "Pera <i class='foo'><b>con</b> crema</i>"; //en cambio con innerHTML se ejecuta el código en función de html

var elementiun = document.createTextNode("Pera");
/*var padre3 = document.getElementsByTagName("li")[4].parentNode,
referencia = document.getElementsByTagName("li")[3];

padre3.replaceChild(elementiun, referencia);*/
var padre = document.getElementById("lista1");
var padre = document.getElementsByTagName("li")[2].parentNode;

//eliminando un elemento
padre.remove(document.getElementsByTagName("li")[2]);
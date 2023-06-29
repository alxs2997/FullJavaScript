//como se crea un objeto de tipo XMLHttpRequest:

//var xhr = new XMLHttpRequest();

/* todos los navegadores entienden este objeto
, pero no todos lo soportan*/

// new - crea un nuevo request
//.abort() - cancela el request
//getAllResponseHeaders() - devuelve las cabeceras de la respuesta
//open(method, url, async, user, password) - inicializa el request
//send(body) - envia el request al servidor
//setRequestHeader(header, value) - especifica el valor de una cabecera

//Ejemlo de uso:

var xhr = new XMLHttpRequest();

xhr.open('GET or POST', 'data.json.PHP.XML', true);

xhr.send(null);

//POST - envia datos al servidor
//GET - obtiene datos del servidor

//Ejemplo de uso en un formulario:

var xhr = new XMLHttpRequest();

xhr.open('POST', 'crear_usuario.php', true);

xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send('nombre=Juan&apellido=Perez');

//Estados y propiedades del objeto XMLHttpRequest

//XMLHttpRequest.readyState - devuelve el estado del objeto XMLHttpRequest

//El estado inicial es el que se representa con el numero 0

//readyState = 0 - request no inicializado
//readyState = 1 - conexion con el servidor establecida
//readyState = 2 - request recibido
//readyState = 3 - procesando request
//readyState = 4 - request finalizado y la respuesta esta lista

//Otra propiedad disponible en XMLHttpRequest es:

//onreadystatechange - define una funcion que sera llamada cuando el estado del objeto cambie
//esta función se ejecuta cada vez que el estado del objeto cambia con readyState.

//responseText - devuelve la respuesta del servidor como un string
//responseXML - devuelve la respuesta del servidor como un XMLDocument object

//status - devuelve el estado de la respuesta del servidor,
//status retorna el estado del request en forma de numerom,
//por ejemplo 404 para not found, 200 para ok, 500 para error interno del servidor

//ejejmplo de uso:

var xhr = new XMLHttpRequest();

xhr.open('GET', 'crear_usuario.php', true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var divUser = document.getElementById('registro');
        divUser.innerHTML = xhr.responseText;
    }

}

xhr.send(null);
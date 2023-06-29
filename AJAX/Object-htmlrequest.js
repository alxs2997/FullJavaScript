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


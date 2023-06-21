var elementiun = document.createElement("div");
var padre = document.getElementById("contenedor");
var referencia = document.getElementsByTagName("div")[0];


elementiun.setAttribute("class","rojo");
padre.insertBefore(elementiun,referencia);
//document.body.appendChild(elementiun);
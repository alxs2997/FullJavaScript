//console.log('ajax.js called');

document.querySelector('#boton').addEventListener('click', traeDatos);

function traeDatos() {
    //console.log('traeDatos called');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'datos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            
            //esta respuesta de aca solo es texto plano
            //necesitamos transformarla a un objeto JSON
            //console.log(this.responseText);

            //declaramos una variable para transformar el texto plano a JSON
            let datos = JSON.parse(this.responseText);

            //console.log(datos);

            //para acceder a los datos del JSON en el array

            let res = document.querySelector('#resp');

            //vamos a colocar unas comillas para limpiar el contenido
            res.innerHTML = '';

            //el ciclo for sera el encargado de rellenar nuestra tabla
            for(let item of datos) {

                res.innerHTML += `
                    <td>${item.nombre}</td>
                    <td><img class="circular--square" src="${item.foto}"></td>
                    <td>${item.edad}</td>
                    <td><strong>$:</strong> ${item.salario}</td>`;
                //si yo envio esto al console.log me va a mostrar solo el nombre
                //console.log(item.salario);
            }
        }
    }
}
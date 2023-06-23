var encabezado = document.getElementById('encabezado');

/*FORMA 1*/
//encabezado.className = 'titulo tituloGrande';

/*FORMA 2*/
encabezado.style.background = 'navy';
encabezado.style.color = 'white';

//con las propiedades que tengan dos palabras, se debe usar camelCase
encabezado.style.fontFamily = 'Arial';
encabezado.style.paddingTop = '20px';
encabezado.style.textTransform = 'uppercase';
//menú lateral, completamente responsive:

//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760) {

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function () {

    if (window.innerWidth > 760) {

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760) {

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});
//Elemento seleccionado con la clase active en el sidebar

$(function() {
  
    // elementos de la lista
    var sideSelect = $(".menu__side div a"); 
  
    // manejador de click sobre todos los elementos
    sideSelect.click(function() {
       // eliminamos active de todos los elementos
       sideSelect.removeClass("selected");
       // activamos el elemento clicado.
       $(this).addClass("selected");
    });
  
  });

//sección para funcionamiento del carrousel de imágenes
var int;
function setInt() {
    clearInterval(int);
    int = setInterval(function() {
        var btns = document.getElementsByName("carousel");
        for(var i = 0; i < btns.length; i++) {
            if(btns[i].checked) {
                btns[i].checked = false;
                if(i + 1 == btns.length) {
                    btns[0].checked = true;
                }
                else {
                    btns[i + 1].checked = true;
                }
                return;
            }
        }
    }, 5000); // 5000 milliseconds
}
setInt();

//evento al hace clic sobre el bontón ordenar ahora (Order Now!)
let allContainerOrden = document.querySelector('.container-card');
let containerOrden = document.querySelector('.mostrar');
let priceTotal = document.querySelector('.total-price');
let vaciarCarritoBtn = document.querySelector('.limpiar');

let OderThings = [];

let totalPrice = 0;

//funciones a través de eventos escuchados
loadEventListeners();

function loadEventListeners() {
    allContainerOrden.addEventListener('click', addProductsToOrder);
    //elimina productos del carrito
    containerOrden.addEventListener('click', deleteProduct);
    //vaciar carrito de compras
    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);
}

//elimina productos del carrito
function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        OderThings.forEach(value => {
            if (value.id === deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalPrice = totalPrice - priceReduce;
                totalPrice = totalPrice.toFixed(2);
            }
        });

        //elimina del arreglo de OderThings por el data-id
        OderThings = OderThings.filter(product => product.id !== deleteId);
    }
    loadHTML(); //iterar sobre el carrito y mostrar su html
}
//imprime lo que hemos seleccionado del contenedor principal de las cards
function addProductsToOrder(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-ordenar-content')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
        //console.log(e.target.parentElement);
    }
}

//lee el contenido del producto
function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.contenido-card h3').textContent,
        price: product.querySelector('.precio-plato-carta span').textContent,
        description: product.querySelector('.contenido-card p').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }
    totalPrice = parseFloat(totalPrice) + parseFloat(infoProduct.price);
    totalPrice = totalPrice.toFixed(2);

    //revisa si un elemento ya existe en el carrito
    const exist = OderThings.some(product => product.id === infoProduct.id);

    if (exist) {   //actualizamos la cantidad
        const prod = OderThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product; //retorna el objeto actualizado
            } else {
                return product; //retorna los objetos que no son los duplicados
            }
        }); //creamos un nuevo arreglo
        OderThings = [...prod];
    } else {
        OderThings = [...OderThings, infoProduct];
    }
    loadHTML();
}

function loadHTML() {
    cleanHTML();
    OderThings.forEach(product => {
        const { image, title, price, description, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
        <img src="${image}" alt="">
        <div class="item-content">
            <h5>${title}</h5>
            <p>${description}</p>
            <h5 class="order-price">$ ${price}</h5>
            <h6>cantidad: ${amount}</h6>
        </div>
        <span  class="delete-product" data-id="${id}">Quitar</span>
            `;

        containerOrden.appendChild(row);
        priceTotal.innerHTML = totalPrice;
    });
}

function cleanHTML() {
    containerOrden.innerHTML = ''
    }


//vaciar carrito de compras
function vaciarcarrito() {
    OderThings = []; //reseteamos el arreglo
    cleanHTML(); //eliminamos todo el html
    totalPrice = 0;
    priceTotal.innerHTML = totalPrice;
}



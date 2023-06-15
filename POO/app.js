/*
//esta es como la plantilla de la clase: 

clase mascota {
    propiedades (variables)
    cabeza
    patas
    orejas
    cola
    color

    metodos (funciones)
    comer
    corre
    camina
}
//se toman las propiedades y metodos de la clase y se crean los objetos
objeto perro uno{
    cabeza = 1
    patas = 4
    orejas = 2
    cola = 1   
    color = "cafe"

    comer : comida
    corre : rapido
    camina : lento
}
objeto gato uno{
    cabeza = 1
    patas = 4
    orejas = 2
    cola = 1
    color = "blanco"

    comer : cualquier cosa
    corre : despacio
    camina : tranquilo
}

mostrame gato uno > 1 cabeza, 4 patas, 2 orejas, 1 cola, color blanco, come cualquier cosa, corre despacio, camina tranquilo
*/

class  miClase {
    constructor (primero, segundo) {//a parte de estos valores se pueden agregar mas
        this.uno = primero
        this.dos = segundo
        this.otro = "Hola a todos" //desde aca se puede agregar mas valores extras, ejemplo tres
    }
    miMetodoUno () {
       return this.otro;
    };
    miMetodoDos (parametroUno, parametroDos) {
        document.write('el parametro uno es: ' + parametroUno +
        'el parametro dos es: ' + parametroDos + '<br>')
    };
};
 //intanciar la clase
var objetoUno = new miClase ('Hola', 777); //se crea el objeto en base a la clase

/*recuperar los valores de la clase
document.write(objetoUno.uno + '<br>' + objetoUno.dos + '<br>') //se llama a la propiedad de la clase
objetoUno.miMetodoDos("Alex ", 23) //se llama al metodo de la clase*/

//herencia
//consiste en crear una clase nueva en base a una clase ya existente

//la palabra clave 'extends' indica que se va a crear una clase nueva en base a una clase ya existente:

class miOtraClase extends miClase {
    constructor (primero, segundo, tercero) {
        super(primero, segundo) //se llama a los valores de la clase padre
        this.tres = tercero //se agrega un nuevo valor a la clase
    }
    miMetodoTres () {
        return this.tres
    }
}
var ObjertoDos = new miOtraClase ('Hola Miguel ', 787, 'Chau') //se crea el objeto en base a la clase

//recuperar los valores de la clase

document.write(ObjertoDos.uno + '<br>' + ObjertoDos.dos + '<br>' + ObjertoDos.tres + '<br>' + ObjertoDos.miMetodoUno()) //se llama a la propiedad de la clase
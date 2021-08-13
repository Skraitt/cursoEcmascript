//PARAMETROS

    function newFunction(name,age,contry) {
        var name = name || "Oscar";
        var age = age || 32;
        var country = contry || "Col";
        console.log(name, age, contry)
    }

    newFunction();
    newFunction("camilo", 35, "MX");

    // es6

    function newFunction2 (name = "oscar", age = 32, contry = "col"){
        console.log(name, age, contry)
    }

    newFunction2();
    newFunction2("camilo", 35, "MX");

//CONCATENACION

    let hello = "Hello";
    let world = "World"
    let frase = hello + ' ' + world;
    console.log(frase);

    // es6

    let frase2 = `${hello} ${world}`; // Comillas fransesas se sacan con alt + 96 
    console.log(frase2);

//MULTILINEA

    let lorem = "Incerte frase epica aca por favor \n"
    + "aqui el resto de la frase epica xd";
    console.log(lorem);

    // es6

    let lorem2 = `aqui otra frase
    y en teoria esto deberia ir separado sin el barra n :v`
    console.log(lorem2)

//DESTRUCTURACION

    let persona = {
        name : 'Carlos',
        age : 15,
        contry : 'col'
    };

    console.log(persona.name, persona.age);

    //es6

    let {name, age, contry} = persona;
    console.log(name, age);

//OPERADOR DE PROPAGACION 

    let team1 = ['Oscar', 'Julian', 'Ricardo'];
    let team2 = ['Valeria', 'Natalia', 'Camila'];

    let colegio = ['Andres','Oscar', 'Julian', 'Ricardo','Valeria', 'Natalia', 'Camila'];
    console.log(colegio);
    console.log();

    //es6

    let colegio2 = ['Andres', ...team1, ...team2]; 
    console.log(colegio2);

//LET Y CONST

    var hola = 'Hola'; // Esta variable es GLOBAL

    //es6

    let holi = 'Hola'; // Solo funciona en el bloque de codigo en la que se designo
    const a = 'b'; // Es constante ni puedo cambiar su valor y NO es global al igual que let
    
//OBJETOS

    let nombre = 'Javier';
    let edad = 20;

    obj = {nombre: nombre, edad: edad};
    console.log(obj);

    //es6

    obj2 ={nombre, edad};
    console.log(obj2);

//FUNCIONES TIPO FLECHA

    const names = [
        {name: 'Javier', age: 20},
        {name: 'Natalia', age: 19},
    ]

    let listaDeNombres = names.map(function (item){
        console.log(item.name);
    })

    //es6 

    let listaDeNombres2 = names.map(item => console.log(item.name)); //FUNCION DECLARATIVA

    const cuadrado = num => num*num;  //FUNCION EXPRESIVA

    const funcion = (nombre, edad, ciudad) => { //FUNCION EXPRESIVA
        //...
    };

//PROMESAS

    /*Una promesa basicamente le da tiempo al servidor para que realice los procesos que tenga
    que realizar en el backend asi que una promesa tiene 3 estados: Pending, resolve, reject*/

    function helloPromise(){
        return new Promise ((resolve, reject) => {
            if(true){
                resolve('Se cumple');
            }else{
                reject('no se cumple :S');
            }
        });
    }

    helloPromise()
        .then(response => console.log(response)) // Este metodo nos permite obtener la respuesta puede ser aprovada o no.
        .catch(error => console.log(error)); // Este nos permite atrapar los errores que puedan surgir.

//CLASES

    class Calculadora {
        constructor(){
            this.valorA = 0;
            this.valorB = 0;
        }
        sum(valorA, valorB){
            this.valorA = valorA;
            this.valorB = valorB;
            return this.valorA + this.valorB;
        }
    }

    const cal = new Calculadora();
    console.log(cal.sum(2, 2));
    console.log(cal);

//IMPORAR Y EXPORTAR LOGICA

    import {hello} from './logic.js'; // estamos importandon una funcion desde otro archivo

//GENERADORES

    function* holaMundo(){
        if(true){
            yield 'Hello '
        }
        if(true){
            yield 'World'
        }
    }

    const generadorHola = holaMundo();
    console.log(generadorHola.next().value); // imprime el Hello
    console.log(generadorHola.next().value); // imprime World
    console.log(generadorHola.next().value); // imprime indefinido por que no esta programado en el generador
    


//CONVERTIR OBJETOS EN ARREGLOS
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data); // Esta constante es un arreglo que contiene arreglos.
console.log(entries);

//CONVERTIR VALORES DE UN OBJETO A UN ARREGLO

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data); // Esta constante es un arreglo que contiene los valores de los objetos.
console.log(values);

//PADDINGS

const string = 'hola';
console.log(string.padStart(6,"hi")); // agrega un la frase al principio 
console.log(string.padEnd(12,' -')); // agrega lo escrito al final y lo hace tantas veces como espacio haya
console.log('food'.padEnd(12, ' -'));

//ASYNC AWAIT

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout (() => resolve('Hello World'),3000)
            :reject(new Error('test Error'));
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch (error) {
        console.log(error);
    }
}

anotherFunction();
//OPERADOR DE REPOSO

const obj = {
    name: 'javier',
    age: 20,
    contry: 'Col'
};

let {name, ...all} = obj; 
console.log(name, all); // Imprime el nombre y dentro de llaves el resto de caracteristicas
console.log(all); // impreme las caracteristicas dentro de llaves menos el nombre

//UNIR ELEMENTOS DE OBJETOS A UN NUEVO OBJETO
const obj1 = {
    name: 'javier',
    age: 20
};

const obj2 = {
    ...obj1, // ficiona el objeto 1 con el objeto 2
    country: 'Col'
};

console.log(obj2);

//PROMISE.FINALY

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout (() => resolve('Hello World'),3000)
            :reject(new Error('test Error'));
    });
}

helloWorld()
    .then(response => console.log(response)) 
    .catch(error => console.log(error))
.finally(() => console.log('Finalizo'));

//REGEX

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ // sintaxis para la fecha, expresion regular año/mes/dia 
const match = regexData.exec('2018-04-20'); // establece match con el formato de La expresion regular establecisa 
const year = match[1];
const month = match[2];
const day = match [3];

console.log(year, month, day);
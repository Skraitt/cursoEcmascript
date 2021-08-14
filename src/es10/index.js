//APLANAR ARREGLOS (EXPERIMENTAL METODO .FLAT())
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat()); // aplana solo el primer level
console.log(array.flat(0)); // no aplana nada
console.log(array.flat(2)); // aplana hasta el segundo nivel

//MAPEAR CADA ELEMENTO Y APLANARLO SEGUN EL RESULTADO

let array = [1,2,3,4,5]; 
console.log(array.flatMap(value => [value,value * 2])); //recorre un arreglo y deja el valor actual n y luego n*2;

//ELIMINAR ESPACIOS EN BLANCO DE UN STRING

let hello = '      hellow world     ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trimStart().trimEnd());

//TRANSFORMAR ARREGLOS EN OBJETOS

    let entries = [['name', 'Javier'], ['age', 20]];
    console.log(Object.fromEntries(entries)); // transforma 

// ELEMENTOS DE TIPO SIMBOLO 

    let mySymbol = 'My symbol';
    let symbol = Symbol(mySymbol);
    console.log(symbol.description);
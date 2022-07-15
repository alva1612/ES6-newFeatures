let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(0));

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value*2]));

let hello = '  hello world ';

console.log(hello.trimStart().trimEnd()+"1");

try {
    
} catch {
    error;
}

//De arreglo a objetos
let entries = [["name", "alvaro"], ["age","21"]];
console.log(Object.fromEntries(entries));

//Symbols
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);
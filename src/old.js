//DEFAULT VALUES
function newFunction(name, age, country) {
    var name = name || 'alvaro';
    var age = age || 32;
    var country = country || 'peru';
    console.log(name, age, country);
}

//CONCATENACION
let hello = 'hello';
let world = 'world';
let phrase = hello + ' ' + world;
console.log(phrase);

//MULTILINEA
let lorem = "Zafa noma \n" 
+ "cachao";

//DESESTRUCTURACION
let person = {
    'nombre':'alvaro',
    'age':21,
    'country':'PE'
}
console.log(person.nombre, person.age);

//OBJETOS
let nom = 'Alvaro';
let ed = 21;

obj ={name: nom, age: ed};
console.log(obj);

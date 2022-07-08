//DEFAULT VALUES
function newFunction2(name='Oscar', age=32, country='peru') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'Japon');


//CONCATENACION
let newPhrase = `${hello} ${world}`;
console.log(newPhrase);


//MULTILINEA
let lorem2 = `Zafa noma
cachao`

console.log(lorem);
console.log(lorem2);

//DESESTRUCTURACION
let person = {
    'nombre':'alvaro',
    'age':21,
    'country':'PE'
}

let {nombre, age, country} = person;
console.log(nombre, age);
console.log(country);

//SPREAD OPERATOR
let team1 = ['Alvaro', 'Angie', 'Rosi'];
let team2 = ['Migue', 'Martha', 'Arturo'];

let education = ['David', ...team1,...team2];
console.log(education);

//LET y CONST
{
    var globalVar = "Global var";
}
console.log(globalVar);
{
    let globalLet = 'Global let';
    console.log(globalLet);
}
const a = 'b';

//OBJETOS
let nom = 'Alvaro';
let ed = 21;

obj = {nom, ed};
console.log(obj);

//PROMISES
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Oops');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Sandwich!'))
    .catch(error => console.log(error));


//CLASSES
class calculator {
    constructor() {
        this.valA = 0;
        this.valB = 0;
    }

    sum(valA, valB) {
        this.valA = valA;
        this.valB = valB;
        return this.valA + this.valB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//IMPORT Y EXPORT MODULES
import hello from './module.js';

console.log(hello());


//GENERATORS
function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
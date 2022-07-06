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




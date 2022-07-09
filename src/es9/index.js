//OPERADOR DE REPOSO
    //PREPARA OBJETOS RÁPIDO
const obj = {
    name:"Alvaro",
    age:32,
    country:"PE",
};

let {name, ...all} = obj;
console.log(name, all);


//CONCATENACION DE OBJETOS FACIL
const obj1 = {
    name:"Alvaro",
    age:32
}

const obj2 = {
    ...obj1,
    country:"PE"
}

console.log(obj2);

//FINALLY
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout( () => resolve('Hello World'),3000)
        : reject(new Error('Test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizo"));

//REGEX MEJORAS
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);
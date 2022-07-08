//OBJECT
const data = {
    frontend: 'Alvaro',
    backend: 'Angie',
    design: 'Juan',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const datos = {
    frontend: 'Alvaro',
    backend: 'Angie',
    design: 'Juan',
}

const values = Object.values(datos);
console.log(values);
console.log(values.length);

//PADDING
const string = 'Hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));
console.log('food'.padEnd(12,' ----'));

//TRAILING COMMNAS
const obj = {
    name:'alvaro',
}

//ASYNC AWAIT
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();

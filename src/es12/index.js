const string = "JavaScript es maravilloso, con Java creo futuro.";

const replaced = string.replace("Java", "Py");
console.log(replaced);

const replacedAll = string.replaceAll("Java","Py");
console.log(replacedAll);


//Private
class Message {
    #show(val) {
        console.log(val);
    };
}

const msg = new Message();
msg.show("Hola!");

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));


class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = true;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);
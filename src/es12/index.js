//Caracteristicas de ES12

//replaceAll
//Primero vemos como es el replace solo para compararlo
const string = "JavaScript es maravilloso, con JavaScript puedod crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);
//Si ejecutamos nos damos cuenta que el primer valor str que dice JavaScript, ha sido reemplazado por Python
//Sin embargo no reemplaza todos los elementos que tengan esa primer coincidencia

//ahora si, el replaceAll
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);




//utilizacion de Metodos privados
class Message {
    #show(val) {
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!');
//Si colocamos el # antes del show, al ejecutar no podremos acceder a esa clase







//promiseAny
//Es un objto global de Any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));






//WeakRef, que nos permitira que no sea recogido un elemtno por el garbage colector
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}





//Los nuevos operadores logicos son AND logico &&= luego el OR logico ||= luego la anulacion logica ??=
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);


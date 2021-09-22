
//Funciones antes de ES6

function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 23;
    var country = country || 'colombia';
    console.log(name, age, country);
}

//Funciones a partir de ES6

function newFunction2(name = 'oscar', age = 23, country = 'colombia') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 22, 'CO');

//Para unir varios elementos antes de ES6

let hello = "Hello";
let world = "World";
let Phrase = hello + ' ' + world;
console.log(Phrase);
//Con el template literal, utilizamos las comillas francesas y ${}
let hello = "Hello";
let world = "World";
let Phrase2 = `${hello} ${world}`;
console.log(Phrase2);
//Con esto finalizamos la primera leccion.

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


//Multilinea de strings en ES6
//Como era antes

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase"

//Como es con ES6

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);





//Desestructuracion de elementos en ES6

//Creamos el objeto

let person = {
    'name': 'felipe',
    'age': 23,
    'country': 'MX',
}

//Luego para llamar los elementos del objeto a un output, normalmente hariamos esto

console.log(person.name, person.age, person.country);

/*La desestructuracion consiste en crear una constante que contenga los elementos
del objeto, y estoss elementos los requerimos de nuestro objeto = person */

let { age, country } = person;
console.log(age, country);







//Spread Operator

//Creamos 2 arrays que seran Teams de personas

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

//ahora un elemento adicional que es donde utilizaremos el Spread Operator

let education = ['David', ...team1, ...team2];

console.log(education);






//Let vs Var como variable

/* Var permite desde el scope global hacer un output de un elemento
Let permite solo en el bloque de codigo tomar esa variable */

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
    //El let si es accesible dentro de este mismo bloque
}

//Ahora intentaremos hacer un output

console.log(globalVar);
console.log(globalLet);

//Notaremos que el var es accesible y el let no



//Const como variable, es constante, no cambia de valor, no deja asignarle nuevo valor

const a = "b";
a = "a";

//Al ejecutar, nos daremos cuenta que sale TypeError

console.log(a);

//Hasta aqui la segunda clase






//Propiedad de objetos mejorada

/* Antes teniamos que crear un objeto, definiendo un
nombre para sus elementos y luego vinculandolos a una
variable, ahora, con ES6, solo necesitamos llamar el
nombre de esa variable */

let name = "felipe";
let age = 23;

//ES5
obj = { name: name, age: age };
//ES6
obj2 = { name, age };

console.log(obj);
console.log(obj2);

//Si vemos el output, tiene el mismo output






//Arrow Functions o Funciones tipo flecha

//Brindan una sintaxis mas reducida

//Crearemos una const, que sera un Array donde tendremos dos objetos

const names = [
    { name: 'Oscar', age: 23 },
    { name: 'Yesica', age: 27},
]

//llamaremos esos elementos de forma tradicional

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

//Con Arrow Function

let listOfNames2 = names.map(item => console.log(item.name));

// Otra forma en la que veremos Arrow Functions es con constantes

const listOfNames3 = (name, age, country) => {
    //Bloque de codigo que necesito
}

// Cuando estamos pasando un solo elemento o parametro

const listOfNames4 = name => {
    //Bloque de codigo que necesito
}

/*La ultima es cuando podemos directamente hacer 
el Arrow Function con un solo valor, sin asignar bloques de llaves, 
por ejemplo sacandole el cuadrado a un numero */

const square = num => num * num;






// La Promesa o promise

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

//Para ejecutarlo la siguiente funcion, con los valores .then y .catch

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error));

//Si ejecutamos, solo tenemos que cambiar el false o true de la condicion para cambiar ese output.
//Hasta aqui la tercera leccion









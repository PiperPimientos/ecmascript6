//Nuevas caracteristicas ES8

// El valor object.entries, que nos sirve para hacer una matriz con un elemento u objeto

//primero creamos un objeto con una constante
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design:'Ana',
}

//Ahora, para convertir este objeto en matriz creamos otra constante donde guardaremos nuestro nuevo valor
//Recordemos que Object es palabbra reservada
const entries = Object.entries(data);

//retornamos la matriz con un console.log

console.log(entries);
//esto nos permite usar el valor .length para saber cuantos elementos hay
console.log(entries.length);






// El valor Object.values que nos transformara un objeto en array

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design:'Ana',
}

const values = Object.values(data);
console.log(values);
//ahora ejecutamos y notaremos que se habra convertido en Array







//Ahora veremos el padding, que se hace con el valor .padStart

//Creamos una variable con nuestro string inicial
const string = 'hello';
//imprimimos y le pedimos el valor .padStart() que debera contener el nuevo numero de caracteres, seguido del nuevo string que queremos
console.log(string.padStart(7,'hi'));
//Veremos que imprime antes del hello, un hi

//Podemos hacerlo tambien en el end con un .padEnd()
console.log(string.padEnd(7,'hi'));





// Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}


//Ahora vamos a ver como funciona y cual es la logica que implica usarlas
//identificamos un async y await cuando antes de pasarle los argumentos, tiene un async

const helloAsync = async () => {
    const hello = await helloWorld();
    //incluso podriamos generar otro await para otra funcion que generemos mediante promises
    //const hello2 = await 
    console.log(hello);
}

//Ahora para ejecutar, llamamos nuestra funcion
helloAsync();

//veremos que espera los 3 segundos de la funcion y luego nos imprime el Hello World

//Ahora lo veremos con try catch que es otra propuesta
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();
//Si le damos run code a todo el codigo, veremos que produce el mismo resultado.
//Si cambiamos en la funcion, el true, por false, veremos todo el camino del error y por que nuestra aplicacion no funciona
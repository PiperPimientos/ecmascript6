//Nuevas caracteristicas ES9

//Operador de Reposo, sirve para extraer las propieade de un objeto que aun no se ha construido
//Creamos un objeto con nuestra info
const obj = {
    name: 'felipe',
    age: 32,
    country: 'MX',
};

let { name, ...all } = obj ;
console.log(name, all);
//Si ejecutamos, veremos que nos trae la propiedad que extraimos y, luego, encapsuladas, las demas.





// Ahora veremos las propiedades de propagacion, para propagar cuantos elementos queramos de un objeto a un nuevo objeto
//Creamos un objeto
const obj = {
    name: 'Felipe',
    age: 23,
}
//Creamos otro objeto donde anidaremos el operador de propagacion
const obj1 = {
    ...obj, //la sintaxis es 3 puntos seguido del nombre del objeto
    country: 'CO'
}

console.log(obj1);
//Si ejecutamos vemos como el obj1 anida las propiedades de obj









//Ahora veremos promise.finally que nos sirve para saber cuando ha terminado el llamado y poder ejecutar alguna funcion o logica de codigo, segun sea el caso
//Creamos una funcion que sera una promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hello World')
        : reject(new Error('Test Error'))
    });
};

helloWorld()
//normalmente para llamar la respuesta
.then(response => console.log(response))
//normalmente para llamar el error
.catch(error => console.log(error))
//para llamar el indicador de que la promesa finalizo
.finally(() => console.log('Finalizado'))
// Si ejecutamos, nos damos cuenta que despues del response, porque esta en true, muestra Finalizado







// mejora para trabajar con Regex
//Agrupar regex y poder acceder a cada uno de ellos

//generamos el regex, que para el caso sera el formato de fecha, year, month, day
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
//Aqui decimos que los valores iran de los numeros 0 al 9 y cuantos valores tiene cada elemento
//Para saber si estan los datos establecidos
const match = regexData.exec('2021-04-20');

//Luego vemos como podemos acceder a cada dato
const year = match[1]
const month = match[2]
const day = match[3]

//luego podremos llamar cada dato
console.log(year, month, day);
//la impresion nos mostrara cada grupo
//Dynamic Import
//Nos permite importar solo una parte de uno de los modulos para llevar a cabo, por ejemplo, una funcion de un boton, solo cuando la necesitemos
//aqui esta la primera parte del codigo que va junto con los archivos index.html que es el que se ejecuta con live server y por otro lado el file.js que es el dynamic import
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hola();
});








//big INT
//Nos permite tener un numero mas grande que el permitido por javascript
const aBigNumber = 9007199254740991n; //la n es para que el numero pueda ser valido
//o podemos utilizar directamente el metodo bigINT
const anotherBigNumber = BigInt(9007199254740991); //Aqui no es necesario ponerle la n

console.log(aBigNumber);
console.log(anotherBigNumer);
//Si imprimimos vemos que JS ya puede trabajar con esos valores








//Promise All Settled
//nos va devolver una promesa que se resuelve despues de que todas las promesas dadas se hayan cumplido o rechazado
//Creamos 3 promesas para hacerlo
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));
//Si ejecutamos nos regresara una estructura para conocer cada elemento, con un status rejected y despues las que se cumplieron de forma correcta, fulfilled







//global.this que es para tener acceso global a un this o por ejemplo a un window en el navegador
//si lo hicieramos en el navegador
console.log(window);
//si lo hacemos con node
console.log(globalThis);





//el operador de nulo o ?? que nos servira para retornar el operando del lado derecho cuando el izquierdo es nulo
const foo = null ?? 'default string';
console.log(foo);
//Si ejecutamos nos devolvera el default string, pero si colocamos en vez de null otra cosa, saldra esa otra cosa







//optional chaining, que nos va permitir acceder a una parte del elemento que estemos ejecutando en un array u objeto, sin tenerlo previamente
const user = { }; //objeto tiene que estar vacio para poder accederlo despues
console.log(user?.profile?.email);
//Ahora si ejecutamos no nos sale error sino que el objeto que no pudo leer, sale undefined



















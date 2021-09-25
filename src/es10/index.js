//Caracteristicas incorporadas en ES10

//Array.flat
//Sirve para devolver cualquier matriz con una submatriz aplanada
//Crearemos una matriz con subniveles
let array = [1,2,3, [1,2,3, [1,2,3]]];
//ahora lo ejecutaremos, el flat recibe como argumento la profundidad que queremos
console.log(array.flat()) //si lo dejamos sin nada, solo va devolver la primera profundidad




//.flatMap
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));
//Si ejecutamos veremos como el valor siguiente, se va multiplicando por 2, para dar el siguiente valor




//trimStart para borrar los espacios que sobren al comienzo de un string
let hello = '             hello world';
console.log(hello);
console.log(hello.trimStart());
//Si ejecutamos podremos ver la diferencia de la impresion normal a la impresion sin espacios
//tambien podriamos quitar los espacios del final con trimEnd







//con el try/catch trae la funcionalidad de optional catch binding
//Tradicionalmente teniamos que traer el valor error para el catch
try {

} catch (error) {
    error
}

//Sin embargo ahora solo tendremos que utilizar una vez el error

try {

} catch (error) {
    error
}





//fromEntries va a transformar clave valor en un objeto
//Esto es si trabajamos con arrays y queremos convertirlo a objeto
let entries = [["name", "felipe"], ["age", 23]];
console.log(Object.fromEntries(entries));
//Si imprimimos, vemos como nos convierte todos los elementos del array en objetos





//Objeto tipo simbolo o Symbol
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description)
//Si ejecutamos nos dara la descripcion del objeto tipo Symbol
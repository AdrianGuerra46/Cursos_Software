/*
! Ejercicio #9
Realizaremos la operacion inversa de nuestro ejercicio anterior: recibirems un array de pares por parametro
y retornaremos un array en el que cada elemento sea un objeto. Pero debemos asiganr el id desde el siguiente 
array:
*/

let pairs = [
    [1, { name: "Nicolas"}],
    [2, { name: "Felipe"}],
    [3, {name: "Goku"}],
]

function toCollection(arr){
    let collection = [];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection
}
let resultado = toCollection(pairs);
console.log(resultado);
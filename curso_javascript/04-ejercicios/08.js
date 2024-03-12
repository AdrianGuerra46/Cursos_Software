/*
! Ejercicio #8
?En este ejercicio construiremos una funcion que se usa bastante en el "mundo real"

Construir una funcion que reciba un array con objetos (y sus respectivas propiedades)
y devuelva un array de pares. Un array de pares tendria la siguiente estructura:

let pares = [
    [1, { id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Goku"},
]
*/

let array = [
    {
        id:1,
        name: "Nicolas",
    },{
        id:2,
        name: "Felipe",
    },{
        id:3,
        name: "Goku",
    }];
function toPairs(arr){
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs
}

let resultado = toPairs(array);
console.log(resultado);
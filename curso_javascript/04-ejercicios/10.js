/*
! Ejercicio #10, el ultimo de esta seccion 
Crear una funcion que reciba por parametro un numero N y retorne un array cuyos
elementos seran los numeros de 1 hasta N
*/

let longitud  = 10;

function crearArray(n){
    if (n < 0){
        return 'No puedes ingresar numeros negativos'
    }
    let numbers = [];
    let i = 1;
    while (i <= n){
        numbers[i] = i;
        i++;
    }
    return numbers
}
let resultado = crearArray(longitud);

console.log(resultado);

//? En el curso lo resolvieron de la siguiente manera:
/*
let longitud  = 10;

function crearArray(n){
    if (n < 0){
        return [];
    }
    let arr = [];
    for (let i = 0; i<n; i++){
        arr[i] = i + 1;
    }
    return numbers
}
let resultado = crearArray(longitud);

console.log(resultado);
*/
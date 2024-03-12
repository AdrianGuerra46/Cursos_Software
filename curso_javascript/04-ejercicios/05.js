/*
! Ejercicio #5
Crear un algoritmo qeu devuelva el numero mayor y menor de un array 
*/

let array = [1, 100, -500, -95, 64, 1523];

function getMinMax(arr){
    let max = 0; // Una vez resuelto y revisado el curso, ESTO ES UN ERROR, porque si el minimo elemento de array es > 0, hay error
    let min = 0;
    if (typeof arr != 'object'){
        return 'Debe ingresar un array'
    }
    for (let search of arr){
        if (search > max){
            max = search;
        }else if (search < min){
            min = search
        }       
    }
    return [min, max];

}

let numeros = getMinMax(array);
console.log( numeros);

//En el video lo resolvieron de la siguiente forma: 
// ! Este es un algoritmo de entrevista tecnica, el truco esta en que te pidan que no puedes ordenarlo ni iterarlo mas de ua vez 
//Ordenarlo hace que sea un algoritmo mucho mas pesado

let entrada = [1, 100, -500, -95, 64, 1523];

function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for (let numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];

}

respuesta = getMenorMayor(entrada);
console.log(respuesta);

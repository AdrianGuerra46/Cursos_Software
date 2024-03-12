/*  
!Ejercicio #6 
Crear un algoritmo que devuelva la cantidad de numeros positivos de un array
*/

let array = [-1, 100];

function getPositivos(arr){
    let positivos = 0; 
    if (typeof arr != 'object'){
        return 'Debe ingresar un array'
    }
    for (let search of arr){
        if (search > 0){
            positivos++;
        }else continue
        }     
    return positivos;  
    }
    


let numeros = getPositivos(array);
console.log("Hay ", numeros, "numeros positivos en el array");
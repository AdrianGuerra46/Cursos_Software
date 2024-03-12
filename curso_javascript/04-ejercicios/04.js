/*
! Ejercicio #4
Crear un algoritmo que imprima los numeros impares entre el 1 y el 10. Se debe utlizar un loop y un algoritmo
que diferencia entre numeros pares e impares
*/

//No me pidieron hacerlo con una funcion pero lo hare asi para poder ingresar hasta que numero quiero los pares
function impares(numero){
    let i = 0;
    while(i < numero){
        i++;
        if (i % 2 != 0){
            console.log('el numero imapr es:', i);
            
        }
        else{
            continue
        }  
    }
    console.log('Esos son los numeros impares hasta el:', numero)
}

let impar = impares(10);

/*
! Ejercicio #7
Crear un algoritmo que reciba por paramtero precio e impuesto 
y devuelva el precio total del producto
*/

function precioTotal(precio, impuesto){
    let total = precio* (1 + impuesto);
    return total
}

let resultado = precioTotal(19.90, 0.15);
console.log(resultado);
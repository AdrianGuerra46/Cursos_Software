/*
! Ejercicio #1
Crear una funcion que reciba dos valores por parametro
y retorne el mayor de los dos 
*/

function cualEsMayor(a, b){
    if (a>b){
        return a;
    }
    else if (b>a){
        return b;
    }else{
        return "Ninguno es mayor que ninguno";
    };
}

let mayor = cualEsMayor(10,5);

console.log(mayor);

//? Otra posible solucion (y mucho mas corta) es usando el operador ternario 

function cualEsMayorTer(a, b){
    return (a > b) ? a : b;
    };

let mayorTer = cualEsMayorTer(10,5);
console.log(mayorTer);
/*
! Ejercicio #2
Se debe crear una funcion que reciba dos parametros y segun el valor de estos parametros
retorne que resolucion es 
*/

/**
 * Nombre: Ancho x Alto
 * 8K: 7680 x 4320
 * 4K: 3840 x 2160
 * WQHD: 2560 x 1440
 * FHD: 1920 x 1080 
 * HD: 1280 x 720
 */

function nombreResolucion (ancho, alto) {
    if (arguments.length != 2){
        return 'Debe ingresar dos parametros [ancho, alto]';
    } else if ( (ancho >= 7680) && (alto >= 4320)){
        return 'Tu resolucion es 8K'
    }else if ( (ancho >= 3840) && (alto >= 2160)){
        return 'Tu resolucion es 4K'
    }else if ( (ancho >= 2560) && (alto >= 1440)){
        return 'Tu resolucion es WQHD'
    }else if ( (ancho >= 1280) && (alto >= 720)){
        return 'Tu resolucion es FHD'
    }else return 'false'
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);
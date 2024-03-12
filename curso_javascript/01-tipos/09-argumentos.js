//A las funciones se les pueden configurar parámetros para flexibilizarlas
function suma(a, b){
    console.log(arguments);

    return a + b
}

//Cuando se le definen valores a los parametros, estos valores se llama ARGUMENTOS 
let resultado = suma(4, 3);
console.log(resultado);
console.log(typeof suma);

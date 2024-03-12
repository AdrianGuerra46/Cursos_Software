//Bloque de codigo que se ejecutará al llamar la función
function saludar(){
    console.log("Hola mundo")
}

saludar();
//La palabra reservada "return" nos permite reutilizar resultados de las funciones
function suma(){
    return 2 + 2
}

let resultado = suma();
console.log(resultado);
console.log(suma());
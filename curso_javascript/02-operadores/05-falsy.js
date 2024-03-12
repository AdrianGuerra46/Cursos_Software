// short-circuit 

//? Los valores que evaluan en false, son los siguientes:
//false
//0
//''
//null
//undefined
//NaN -> Este valor se retorna cuando una operacion matematica no arroja un numero valido
//? A todos estos valores anteriores se les conoce como "Falsy"

let nombre = 'Goku'; //Si agrego un nombre usarname retornaria el nombre, si no, retorna anonimo 
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log("Soy funcion 1")
    return false;
}
function fn2(){
    console.log("Soy funcion 2")
    return true;
}

let x = fn1() && fn2();


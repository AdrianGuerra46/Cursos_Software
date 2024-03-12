//? Las funcinoes se comportan como objetos de primer nivel 
//Esto que se pueda asignar a ots variables, usar como argumento de otras funciones o ser retornadas por otras funciones

function Usuario(nombre) {
    this.nombre = nombre;
}

//Propiedades de una funcion
console.log(Usuario.name);
console.log(Usuario.length);

//Asignadno funcion a una constante
const U = Usuario;
let user = new U('Nicolas');

console.log(user);

//Pasando una funcion y su parametro como argumenntos
function of(Fn,arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Goku');
console.log(user1);

//Retornando una funcion 
function returned(){
    return function(){
        console.log('Hola mundo');
    }
}

let saludo = returned();
saludo();
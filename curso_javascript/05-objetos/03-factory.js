/*
let user = {
    id:1,
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave')
    }, 
};

*/

function crearUsuario(name, email){
    return {
        email, //Esto es exactamente igual (debido al parametro) a un email: email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave')
        }, 
    };
}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Felipe', 'nico@holamundo.io');

console.log(user1,user2);

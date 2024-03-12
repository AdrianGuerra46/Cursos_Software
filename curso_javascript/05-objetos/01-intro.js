
let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion:{
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave')
    }, //A esto se le llama funcion anonima y nos sirve para situaciones como esta, donde no 
};

//A este estilo de programacion donde tomamos datos que se encuentran relacionados entre si se le conoce como:
//* Programacion Orientada a Objetos (POO) o OPP (Object Oriented Programming)
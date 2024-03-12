//Los objetos en JS son de tipo "de referencia" no primitivos

//Los objetos son una agrupación de datos que tiene sentido tenerlos juntos

// Personajes de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre:"Tanjiro",
    anime:"Demon Slayer",
    edad: 16,
};

console.log(personaje);
//JS NO asegura el orden de las propiedades 
console.log(personaje.nombre);
console.log(personaje["anime"]);

delete personaje.anime; 

//personaje[indice].newatributo = "valor" nos permite agregar propiedades al objeto
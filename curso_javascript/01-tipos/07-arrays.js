//Array viene del inglés que traduce "colección"

let animales = ["Cerdo", "Caballo"]; 

console.log(animales);
console.log(animales[0]);
animales[2] = "Dragón"

console.log(animales);
// El Array respeta el orden con el que le pasamos los elementos
animales[10] = "Pez"

console.log(animales);
console.log(animales[7]);
console.log(typeof animales);
console.log(animales.length);

/*
! CUIDADO:   
Con los indices al momento de agregar, ya que si pones un indice erroneo, puedes sobreescribir algún elementos existente
o afectar el tamaño del array agregando valores vacios
*/
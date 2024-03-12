let user = {
    id: 1,
    name: 'Goku',
    age:25,
};

for(prop in user){
    console.log(prop, ':', user[prop]);
}
/*  
?Antiguamente tambien se podia usar el for in para iterar los elementos de un arreglo, no es una mala practica, solo que for of es 
?es relativamente nueva 
*/
let animales = ['Cerdo', 'Dragon', 'Perro'];

for (let indice in animales ) {
    console.log(indice, animales[indice]);
}
//Lo anterior no es recomendable pero se explica porque nos podemos encontrar con codigo asi
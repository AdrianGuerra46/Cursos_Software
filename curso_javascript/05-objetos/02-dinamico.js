const user = {id:1};

user.name = 'Nicolas';
user.guardar = function(){
    console.log('Guardadno', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

/*
? Cuando definimos una variable con const NO PODEMOS cambiarle el VALOR a esta varibale pero si el valor es un objeto o un array
? si podremos cambiarle los valores a los propiedades de este objeto o elementos de un array. PERO no podemos hacer que deje de ser
? un objeto o array
*/


//const user1 = Object.freeze({id: 1});//Si queremos que NO SE PUEDA MODIFICAR UN OBJETO 
const user1 = Object.seal({id: 1});//Si queremos que NO SE PUEDA MODIFICAR UN OBJETO PERO SI EL VALOR DE SUS PROPIEDADES
user1.name = 'Nico';
user1.id = 2;
console.log(user1);

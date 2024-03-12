let obj = {};
let obj2 = new Object(); //Esta linea y la anterior hacen exactamente lo mismo

/**
 * new Array();
 * new String(); '' "" ``
 * new Number();
 * ner Boolean();
 */

function Usuario() {
    this.name = "Goku"
}

let user = new Usuario();

console.log(user.constructor);

const s1 = "1 + 1"; //Esta es la manera recomendada para no tener errores 
const s2 = new String("1 + 1");

console.log(s1,s2);
console.log(eval(s1),eval(s2));
console.log(s2.valueOf());
let a = 1;
let b = a;

b++;
console.log(a,b); 


/* Ahora haremos lo mimso de antes pero con objetos, para demostrar que se van a cambiar ambos
Ya que al hacer d=c lo que hace es almacenarse LA MISMA DIRECCION DE MEMORIA la hacer tipo de dato de referenica
Entonces al variar uno, varia el otro.  */
let c = {};
let d = c;

d.prop = 1;

console.log(c,d);

//Ahora lo haremos con una funcion. 

let e = 1;

function suma(n){ //Cada vez que definimos parametros JS crea una variable especial para ese parametro. Por ende el argumento no se ve afectado
    n++;
}

suma(e);
console.log(e);

//Ahora pasando un objeto como parametro

console.log(c,d);

//Ahora lo haremos con una funcion. 

let f = {prop:1};

function suma(n){ 
    n.prop++;
}

suma(f);
console.log(f);
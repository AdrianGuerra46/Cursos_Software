const punto = {
    x:10,
    y:15,
    dibujar() { //Esto es exactamente lo mismo que dibujar: function () {}
        console.log('Dibujando...');
    }
};
//delete punto.dibujar;
if ('dibujar' in punto){
    punto.dibujar();
}

console.log(Object.keys(punto))

for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave])
}

for (let entry of Object.entries(punto)){
    console.log(entry);
}

//Recordemos que ya sabiamos hacer lo anterior con for in, pero las anteriores eran las formas antiguas porque for in es realtivamente new
let i = 2;
while (i < 2){
    if(i % 2 == 0){
        console.log('numero par:', i);
    }
    i ++;
    
}
console.log('Fuera del while');

do {
    if(i % 2 == 0){
        console.log('numero par:', i);
    }
    i ++;

} while(i < 2);
console.log('Fuera del do-while');
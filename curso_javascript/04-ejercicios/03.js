/* 
! Ejercicio #3
Se debe contruir una funcion que reciba por parametro un array y un indice y retorne el el elemento por su indice. 
El indice NO puede ser < 0 y el elemento TIENE que existir en el array 
*/
function getByIndex(array, indice){
    if ((typeof array != 'object') || (typeof indice != 'number')){
        return 'Debe ingresar un array como primer argumento y un indice[number] como segundo argumento'
    }else if (indice < 0){
        return 'No puedo ingresar un indice menor que cero [0]'   
    }else if (indice >= array.length){
        return 'El elemento no existe'
    }else{
        return array[indice];
    }
    
}
let resultado = getByIndex([1,7,8], 8)
console.log(resultado);
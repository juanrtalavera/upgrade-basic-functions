/* Crea una función que reciba por parámetro un array
y cuando es un valor number lo sume
y de lo contrario cuente la longitud del string y lo sume.
Puedes usar este array para probar tu función: 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
 function averageWord(param) {
   // insert code
} */



const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let suma=0;
    for (let index = 0; index < param.length; index++) {
        if(typeof param[index]==='number'){
            suma+=param[index];
        }
        if (typeof param[index]==='string') {
            suma+=param[index].length
        }
        
    }
    return suma;
}
console.log(averageWord(mixedElements));
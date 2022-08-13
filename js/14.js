// Arrays o arreglos

// const numeros = [10, 20, 30, 40, 50]; // El array se especifica entre [], dentro de este irán los elementos separados entre ,
// const random = [10, "Nicolas", true, null, 550, "Manteca"] // Dentro de un array puede haber cualquier tipo de valor, ya sea un str, number, boolean, etc.

// console.log(random); // Hago un print normal del array random
// console.table(random); // Hago un print en forma de table del array random, en el cual me va mostrar todos los valores con un índice
// console.log(random.length) // Hago un print de la cantidad de elementos / extensión que tengo en un array, en este caso 6.
// console.log(numeros[3]); // Hago un print específico del índice declarado, en este caso me haría un print de 40 ya que es el índice 3 (como en la mayoría de lenguajes, el índice empieza a contar desde 0)
// console.log(numeros[1]);
// console.log(numeros[1]); 
// console.log(numeros[2]);
// console.log(numeros[4]);

// En vez de hacer prints 1 por 1 de un índice se puede hacer lo siguiente 
// Esto es una iterador

// numeros.forEach( function(numeros) {
//     console.log(numeros)
// })


const numeros = [10, 20, 30, 40, 50];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// Esta forma de agregar elementos es obsoleta, no se usa mucho
//numeros[5] = 60 // Agrego el valor 60 en el índice "5", pongo 5 porque el último indice es 4 entonces automáticamente me crea un índice nuevo automáticamente con el valor asignado.
//numeros[4] = 55 // Acá no me agrega un nuevo índice/valor ya que estoy seleccionando el índice 4 y ya existe, por lo tanto me modifica el valor del mismo.

//numeros.push(60) // Esto hace exactamente lo mismo sólo que de cierta forma automatizada, es decir, agrega el índice automáticamente con el valor asignado.
//numeros.push(70, 80, 90, 100) // Lo mismo que antes pero agregando más de 1 valor en una misma línea 
// numeros.unshift(-10, -20, -30) // Hace lo mismo que el push, sólo que agregando los elementos al inicio / Esto corrompe los índices del array, es decir, reordena los ínidices a partir de los nuevos creados, por lo tanto -10 pasaría a ser el índice 0 y así sucesivamente

// console.table(numeros)

// meses.pop() // Elimina el último valor del array
// meses.shift() // Elimina el primer valor del array
//meses.splice(3) // Splice lo que hace es eliminar el array a partir índice establecido, en este caso elimina todos a partir del índice 3, por lo tanto borra Abril y Mayo.
//meses.splice(3, 1) // Especificando el "1" después de una , es para decirle que sólo borre un elemento a partir de determinado índice, es decir, en este caso borraría a partir de Abril y sólo borraría Abril porque le dije que borre 1, Mayo seguiría estando.

// Este método es para agregar un elemento a un array pero sin modificar el original, es decir, crea un nuevo array con los mismos valores pero agregando también nuevos.

// const mesesNuevo = [...meses, "Junio"] // Declaro la const nueva "mesesNuevo", seguidamente especifico que es una array con [] y le agrego el otro array con ...nombreDelArray seguidamente el nuevo valor separado con una ,
const mesesNuevo = ["Junio", ...meses] // Hace exactamente lo mismo que antes sólo que agrega el nuevo elemento al principio.

console.table(mesesNuevo)

// For Loops
// Los loops sirven para ejecutar determinado código hasta que una condición se cumpla o deje de cumplir

// for(let i = 0; i < 10; i++) {
//      console.log(i)
// }

// Explicación a esta sintaxis/fórmula.

// Declaro con un "for", luego entre () voy a colocar todas las condiciones.

// 0; - Coloco 0 porque es a partir de dónde voy a empezar a "contar" en este caso, los iteradores la mayoría de las veces se utilizan para los arrays y los índices de estos empiezan desde 0, por lo tanto arranco desde ahí.

// i < 10 - Luego del ; coloco la condición que quiero que se cumpla, es decir, mientras que la condición especificada se cumpla, entonces todo este for se va a ejecutar. Acá simplemente pongo que si índice es menor a 10 entonces se ejecute todo el código. Si es mayor (o igual) a 10, entonces el for deja de ejecutarse.

// i++ - Este ya lo usé antes, es básicamente para incrementar de 1 en 1. En este caso quiero que el índice se vaya incrementando de 1 en 1 a partir de 0, cuando llegue a 10, entonces va dejar de incrementarse.

// for(let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`Sí, el número ${i} es PAR`)
//     } else {
//         console.log(`Sí, el número ${i} es IMPAR`) 
//     }
// }

const carrito = [
    { nombre : "Monitor 20 pulgadas", precio : 500 },
    { nombre : "Televisión 50 pulgadas", precio : 700 },
    { nombre : "Tablet", precio : 300 },
    { nombre : "Audífonos", precio : 200 },
    { nombre : "Teclado", precio : 50 },
    { nombre : "Celular", precio : 300 },
    { nombre : "Bocinas", precio : 300 },
    { nombre : "Laptop", precio : 800 }
];

// for(i = 0; i < carrito.length; i++) {
//     // console.log(carrito[i]);
//     console.log(carrito[i].nombre);
// }

// While Loop // Es muy similar al for, la sintaxis es un poco diferente, pero donde se colocan es diferente. Este se ejecuta cuando una condicion sea evaluada como verdadera.

// let i = 1; // índice - Valor inicial
// while(i <= 100) { // Condición // Evalúa primero esta condición, si se cumple...
//     // ...entonces hacé todo esto. Si no se cumple la condición entonces no ejecuta nada que haya acá adentro.
//     if (i % 2 === 0) { 
//         console.log(`El número ${i} es par`)
//     } else {
//         console.log(`El número ${i} es impar`)
//     }
//     i++; // Incremento
// }

// Do While Loop // 

let i = 11; // Índice - Valor incial igual que en el while

do { // Acá cambia la sintaxis, empezamos con DO directamente, es decir, hacé esto...

    console.log(i) // ...esto...

    i++ // // ...y esto.

} while (i < 10); // Y luego evaluá esto.

// El código en DO While siempre se va ejecutar al menos 1 vez, más allá de si la condición se cumpla o no. Primero se ejecuta, después evalúa. Caso contrario al WHILE normal, primero evalúa, después ejecuta.

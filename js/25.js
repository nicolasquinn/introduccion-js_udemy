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

// forEach y map
// ¿Para qué usamos el forEach y map?
// Sólo pueden ser utilizado sólo en arreglos/arrays. Estos se van a ejecutar 1 vez por cada elemento que haya en un arreglo, no es necesario declarar 1 por 1.

// forEach

// carrito.forEach(function(){
//     console.log("Una vez por cada elemento")
// })

// carrito.forEach(function(producto){
//     console.log(producto)
// })

// carrito.forEach(function(producto){
//     console.log(producto.nombre)
// })

// carrito.forEach(function(producto){
//     console.log(producto.precio)
// })

// carrito.forEach( producto => console.log(producto) )

// map

//carrito.map( producto => console.log(producto) )


// ¿Qué diferencia hay entre forEach y map, si ambos tienen la misma sintaxis y hacen exactamente lo mismo?
// Voy a utilizar forEach para iterar sobre un arreglo y mostrar los elementos en pantalla, o bien en la consola.
// Voy a utilizar map para crear un nuevo arreglo.

const arreglo1 = carrito.forEach( producto => console.log(producto.nombre) )

const arreglo2 = carrito.map( producto => producto.nombre )

console.log(arreglo1)
console.log(arreglo2)
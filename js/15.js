// Array methods

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


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// forEach

meses.forEach(function(nose) {
    console.log(nose)
});

meses.forEach(function(nose) {
     if(nose == "Marzo") {
         console.log("Marzo si existe")
     }
});

meses.forEach(function(forEachParaMeses) {
    if(forEachParaMeses == "Febrero") {
        console.log("Febrero existe")
    }
});

// Includes

let resultado = meses.includes("Marzo")
console.log(resultado)

// Some - Ideal para arrays que tienen objetos

resultado = carrito.some(function(producto) {
    return producto.nombre == "Celular"
});

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

// Filter

resultado = carrito.filter(function(producto) {
    return producto.precio > 400
})

resultado = carrito.filter(function(producto) {
    return producto.nombre === "Celular"
})

console.log(resultado);


// Arrow functions

// const funcionDePrueba2 = (n1, n2) => console.log(n1 + n2);

// const aprendiendo = (tecnologia) => {
//     console.log(`Aprendiendo ${tecnologia}`)
// } TANTO ESTE

// const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`) // COMO ESTE son exactamente lo mismo, sólo que con una sintaxis más resumida.

// aprendiendo("JavaScript")
// funcionDePrueba2(1, 1)

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

// 1-. Normal
meses.forEach(function(nose) {
    console.log(nose)
});
// 1-. Arrow function / Puedo poner todo en 1 sóla linea y sin llaves
meses.forEach( nose => console.log(nose) ); 

// 2-. Normal 
meses.forEach(function(nose) {
     if(nose == "Marzo") {
         console.log("Marzo si existe");
     }
});
// 2-. Arrow function
meses.forEach( nose => {
    if(nose == "Marzo") {
        console.log("Marzo si existe");
    }
});


// 3-. Normal
meses.forEach(function(forEachParaMeses) {
    if(forEachParaMeses == "Febrero") {
        console.log("Febrero existe");
    }
});
// 3-. Arrow function
meses.forEach(forEachParaMeses => {
    if(forEachParaMeses == "Febrero") {
        console.log("Febrero existe");
    }
});

// Some - Ideal para arrays que tienen objetos
// 4-. Normal
resultado = carrito.some(function(producto) {
    return producto.nombre == "Celular"
});
// 4-. Arrow function
resultado = carrito.some(producto => producto.nombre == "Celular");

// Reduce
// 5-. Normal
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);
// 5-. Normal
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
// 6-. Normal
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});
// 6-. Arrow function
resultado = carrito.filter(producto => producto.precio > 400);

// 7-. Normal
resultado = carrito.filter(function(producto) {
    return producto.nombre === "Celular"
});
// 7-. Arrow function
resultado = carrito.filter(producto => producto.nombre === "Celular");

console.log(resultado);


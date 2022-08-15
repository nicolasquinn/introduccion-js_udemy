// POO - Programación orientada a objetos

// Object Literal

// const producto = {
//     nombre: "Tablet",
//     precio: 500
// }

// // Object Constructor
// function Producto(nombre, precio, color, disponible) {
//     this.nombre = nombre,
//     this.precio = precio,
//     this.color = color,
//     this.disponible = disponible
// }

// const producto2 = new Producto('Monitor', 25000, "Negro", true);
// const producto3 = new Producto('Mouse', 5000, "Negro", true);
// const producto4 = new Producto('Teclado', 6500, "Blanco", true);
// const producto5 = new Producto('Mousepad', 2000, "Gris", false);

// console.log(producto2)
// console.log(producto5) 

// Lo del profe

/** Object Literal */

const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}


function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const cliente = new Cliente('Juan', 'De la torre');


console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );


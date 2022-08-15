// POO - Programación orientada a objetos


// Object Literal
const producto = {
    nombre: "Tablet",
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, color, disponible) {
    this.nombre = nombre,
    this.precio = precio,
    this.color = color,
    this.disponible = disponible
}

const producto2 = new Producto('Monitor', 25000, "Negro", true);
const producto3 = new Producto('Mouse', 5000, "Negro", true);
const producto4 = new Producto('Teclado', 6500, "Blanco", true);
const producto5 = new Producto('Mousepad', 2000, "Gris", false);

console.log(producto2)
console.log(producto5)
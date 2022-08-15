// Classes
// Siempre se debe colocar el nombre de la clase con mayúscula inicial (es opcional en realidad, pero es obligatorio por sintaxis.
// No se coloca paréntesis, sino una llave de apertura.

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
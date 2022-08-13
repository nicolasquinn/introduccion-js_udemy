// Objeto

const producto = {
    nombre : "Manteca", // En vez de usar el = para asignar el valor se reemplaza por : / También se utilizan las , para declarar la siguiente variable
    precio : 200, // Uso la coma devuelta ya que voy a declarar otra
    disponible : true // Acá no es necesaria la coma, ya que es la última
}

// Forma anterior

// precioProducto = producto.precio; 
// nombreProducto = producto.nombre;
// console.log(precioProducto)
// console.log(nombreProducto)

// Forma actual de "deconstruir" objetos

// const {precio} = producto
// const {nombre} = producto
    // O más fácil //
const {precio, nombre} = producto // Lo que hago con la deconstructing es básicamente extraer una variable de un objeto y convertirla en independiente, pero sin borrarla de su lugar original.

console.log(producto) // Printea todo como siempre.
console.log(precio) // Printa el precio sin ningún drama, ya que precio ahora es una variable independiente.
console.log(nombre) // Printa el nombre sin ningún drama, ya que nombre ahora es una variable independiente.
// console.log(disponible) // Me va dar error porque disponible no es una variable independiente, sino un elemento de producto.
// Objetos

const producto = {
    nombre : "Manteca", // En vez de usar el = para asignar el valor se reemplaza por : / También se utilizan las , para declarar la siguiente variable
    precio : 200, // Uso la coma devuelta ya que voy a declarar otra
    disponible : true // Acá no es necesaria la coma, ya que es la última
}

// console.log(producto); // Print de la lista entera
// console.log(producto.precio); // Uso el .variable para printear el valor de la misma
// console.log(producto["precio"]); // Cumple la misma función que antes sólo que con otra sintaxis, no se suele usar mucho.

// Agregar variables con valores a un objeto

producto.imagen = 'imagen.jpg'; // Agrego la variante después del producto. , en este caso sería imagen el nombre de la misma. Seguidamente coloco el valor entre '' o "".

// Remover variables

delete producto.disponible; // Declaro delete para borrar, seguidamente coloco "nombredelobjeto.nombredelavariante" para borrar la variante deseada en determinado objeto.

console.log(producto);
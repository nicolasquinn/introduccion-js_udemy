// Objeto

// "use strict"; // Activa el modo "estricto" en JS, es decir, quue básicamente si tenemos un error se va cancelar todo y nos va decir en consola que es lo que está pasando.

const producto = {
    nombre : "Manteca", // En vez de usar el = para asignar el valor se reemplaza por : / También se utilizan las , para declarar la siguiente variable
    precio : 200, // Uso la coma devuelta ya que voy a declarar otra
    disponible : true // Acá no es necesaria la coma, ya que es la última
}

//Object.freeze(producto); // Freeze lo que hace es básicamente freezear/no permitir que se ejecute ningún tipo de función sobre determinado objeto (ya sea agregarle, eliminarle o modificarle un valor, etc.), en este caso seleccioné producto.

//delete producto.precio;
//producto.precio = 300;

Object.seal(producto); // Seal hace exactamente lo mismo que freeze sólo que con la distinción de que este puede modificar los valores de este objeto.

// delete producto.precio; // Sigue sin funcionar.
producto.precio = 300 // Modifica exitosamente el el valor de "precio" en el objeto producto, ya que seal lo permite a diferencia de freeze.


console.log(producto);

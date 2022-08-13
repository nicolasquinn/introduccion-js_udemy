const producto = {
    nombre : "Manteca", // En vez de usar el = para asignar el valor se reemplaza por : / También se utilizan las , para declarar la siguiente variable
    precio : 200, // Uso la coma devuelta ya que voy a declarar otra
    disponible : true // Acá no es necesaria la coma, ya que es la última
}

const medidas = {
    peso : "1kg",
    longitud : "10 metros"
}

// Acá tengo 2 objetos (producto & medidas), lo que yo voy a hacer es básicamente unir las variables de estos sin modificarlos con "Spread Operator"

const productoCompleto = {...producto, ...medidas}; // Declaro el nombre del nuevo objeto y le asigno los objetos que quiero que se junten con esta sintaxis

console.log(producto)
console.log(medidas)
console.log(productoCompleto)


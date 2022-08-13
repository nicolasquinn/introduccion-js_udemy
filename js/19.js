
// function funcionDePrueba(n1, n2) {
//     return n1 + n2;
// }

// funcionDePrueba(5, 10) // Esto no me va devolver absolutamente nada

// function funcionDePrueba(n1, n2) {
//     return n1 + n2;
// }

// resultado = funcionDePrueba(5, 10); // Creo una variable (resultado) y dentro de esta ejecuto la función especificando los argumentos. En este caso, me devuelve el return de la suma entre 5 + 10 y se almacena en esta variable (resultado).

// console.log(resultado)

let total = 0; // Creo una variable que puede ser modificada en el futuro (let) pero esta tiene valor 0.

function agregarCarrito(precio) { // Declaro la función con un parámetro (precio)
    return total += precio; // Cuando se ejecute la función, me va devolver el total += el parámetro indicado.
}

function calcularImpuesto(total) { 
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: $${totalAPagar}`);
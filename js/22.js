// Estructuras de control

// const puntaje = "1000"

// if(puntaje == 1000) { // Uso el if para decir "si esto es igual a esto, entonces..."
//     console.log("SÍ, puntaje es igual a 1000"); // ...hacé esto.
// } else { // Sino...
//     console.log("No, puntaje no es igual a 1000"); // ...hacé esto.
// }

// const puntajeDos = "500"

// if(puntajeDos !== 1000) { // El !== es para decirle "si esto es distinto a esto, entonces.."
//     console.log("No, puntaje no es igual a 1000"); // ...hacé esto.
// } else { // Sino...
//     console.log("SÍ, puntaje es igual a 1000"); // ...hacé esto.
// }

// Nota
// El signo = se usa para declarar/asignar un valor a una variable
// El signo == es para decir "esto es igual a esto" sin importar el tipo de valor (number o string)
// El signo === es para decir "esto es igual a esto" pero de una forma más estricta, discriminando los tipos de valores.
// El signo !== es para decir "esto es distinto a esto..."

// const efectivo = 1000;
// const carrito = 1000;

// if (efectivo >= carrito) {
//     console.log("Sí, lo puede pagar")
// } else {
//     console.log("No, no lo puede pagar")
// }

const rol = 'Editor';

if(rol === 'Administrador') {
    console.log("Acceso a todo el sistema")
} else if (rol === 'Editor') {
    console.log("Acceso de editor")
} else {
    console.log("No tienes acceso")
} 
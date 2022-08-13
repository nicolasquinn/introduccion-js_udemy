// Declaración de una función

funcionDePrueba(); // Esta si aplica porque funcionDePrueba es una variable como tal y se puede ejecutar previo a haberla declarado.

function funcionDePrueba() {
    console.log(10 + 10);
}

// Expresión de la función

// funcionDePrueba2(); // Esto va dar un error, ya que estoy ejecutando la función previo a haber declarado una variable q

funcionDePrueba2() // Ejecutar la función que está declarada dentro de una variable previo a la misma me va dar un error.

const funcionDePrueba2 = function() {
    console.log(3 + 3);
} // Esta no es una función como tal, ya que está declarada desde un inicio como una variable const.

// Pongo esto como ejemplo porque es exactamente lo mismo, osea, estoy ejecutando una variable sin haberla declarado primero, tendría que ser al revés. Es decir, declaro la variable y luego la ejecuto.
console.log(prueba)
const prueba = 3 + 3 
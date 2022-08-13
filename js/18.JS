// Funciones con parámetros y argumentos

function funcionDePruebaUno(numeroUno, numeroDos) { // Declaro los parámetros entre los () separados por una , pueden tener cualquier nombre.
    console.log(numeroUno + numeroDos); // Acá le digo a la función qué es lo que va a hacer, que vendría a ser la suma entre el parámetro numeroUno y parámetro numeroDos
}
funcionDePruebaUno(5, 10); // Acá le asigno los argumentos, es decir, ¿qué va ser numeroUno y numeroDos? En este caso 5 sería el parámetro numeroUno y 10 el parámetro numeroDos.
funcionDePruebaUno(1, 3); // Puedo poner cualquier argumento
funcionDePruebaUno(7, 4); // Puedo poner cualquier argumento
funcionDePruebaUno(25, 8); // Puedo poner cualquier argumento

const funcionDePruebaDos = function(numeroUno, numeroDos) {
    console.log(numeroUno + numeroDos);
}
funcionDePruebaDos(3, 8);

// Hago otra función para mostrar un ejemplo

function funcionDePruebaTres(numeroUno = 0, numeroDos = 0) { // Ponga "= 0" después del parámetro para asignarle un varlo por defecto, en este caso le asigné el número 0. Podría ser tranquilamente cualquier número o valor, osea, yo acá nomás le estoy diciendo que por defecto numeroUno y numeroDos simplemente van a valer 0.
    console.log(numeroUno + numeroDos);
}
funcionDePruebaTres(10) // Esto me va dar 10 como resultado ya que está declarándose numeroUno como valor 10 pero no especifiqué numeroDos, por lo tanto no me va salir NaN ya que numeroDos es interpretado como 0 por defecto.

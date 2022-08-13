// Objeto Math

let resultado;

resultado = Math.PI;
resultado = Math.round(2.5); // Redondea como se suele hacer normalmente
resultado = Math.ceil(2.1); // Siempre redondea hacia arriba
resultado = Math.floor(2.9); // Siempre redondea hacia abajo
resultado = Math.sqrt(144); // Raíz cuadrada
resultado = Math.abs(-200); // Lo convierte en positivo
resultado = Math.min(2, 6, 1, 8, 4); // Toma el mínimo sin importar el orden
resultado = Math.max(2, 6, 1, 8, 4); // Toma el máximo sin importar el orden
resultado = Math.random(); // Nos da un numero aleatorio, siempre inferior a 1 (o casi)
resultado = Math.floor(Math.random() * 30); // Acá lo que estoy haciendo es ejecutar la función Math.floor, que va a cumplirse cuando la función Math.random se multiplique por 30. Por lo tanto, el número que salga se va multiplicar por 30 y seguidamente se va redondear hacia abajo, es decir, si por ejemplo sale un 2.9 se va redondear a 2.


console.log(resultado);
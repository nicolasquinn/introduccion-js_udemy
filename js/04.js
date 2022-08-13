// Strings o cadenas de texto

// const producto = 'Monitor de 20"'; // Al asignarle un valor string entre '' no es necesario marcar las "" con el \
// const producto = "Monitor de 20\""; // En el hipotético caso de que tenga que usar las "" para declarar mi string para que se muestren las "" extra tengo que poner un \
// console.log(producto);

const tweet = "Esto es un tweet en JavaScript";

// length
console.log(tweet.length) // Esto me devuelve la cantidad de caracteres totales que tiene el str "tweet"

// indexOf
console.log(tweet.indexOf('JavaScript')); // Esto me devuelve a partir de que caracter comienza la palabra que indiqué entre los (), a su vez que comprueba si está o no.
console.log(tweet.indexOf('Pedrito')); // Esto me devuelve un -1, ya que 'Pedrito' no se encuentra en el str "tweet"

// Includes
console.log(tweet.includes('JavaScript')); // Esto me devuelve un valor booleano, es decir true/false, comprueba si la palabra indicada está en el string declarado, en este caso true porque JavaScript está en el str "tweet"
console.log(tweet.includes('Pedrito')); // En este caso me devuelve false, por el simple hecho de que Pedrito no se encuentra en el str "tweet"


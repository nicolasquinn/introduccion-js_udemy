const usuarioAutenticado = new Promise( (resolve, reject) => {
    const autenticado = false
    if(autenticado) {
        resolve('Usuario autenticado')
    } else {
        reject('No pudiste iniciar sesión')
    }
})

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))
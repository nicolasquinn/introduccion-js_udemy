// Async - Await

function descargarNuevosCliente() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere.')

        setTimeout( () => {
            resolve('Los clientes fueron descargados')
        }, 5000 );

    });
}

async function app() {
    try {
        const resultado = await descargarNuevosCliente();
        console.log('Este código sú se bloquea')
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea')


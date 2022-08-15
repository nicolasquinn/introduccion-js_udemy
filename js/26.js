// This

const reservacion = {
    nombre: "Nicolas",
    apellido: "Quinn",
    precio: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} no pagó el costo total de ${this.precio}`)
    }
}

const reservacionDos = {
    nombre: "Pedro",
    apellido: "Quinn",
    precio: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} no pagó el costo total de ${this.precio}`)
    }
}

console.log(reservacion.informacion())
console.log(reservacionDos.informacion())
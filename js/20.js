
// Métodos de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },
    pausar : function() {
        console.log("Pausando...")
    },
    eliminar : function(id) {
        console.log(`Eliminando la canción: ${id}`)
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.reproducir(24);
reproductor.pausar();
reproductor.eliminar(20);
reproductor.crearPlaylist("Cumbia");
reproductor.reproducirPlaylist("Cumbia");




var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

// }enviar información
socket.emit('enviarMensaje', {
    usuario: 'Carlos Hernández',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});
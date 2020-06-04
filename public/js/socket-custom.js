var socket = io();
socket.on('connect', function() {
    console.log('Usuario conectado');
});

//Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Usuario desconectado del servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Noe', //se comenta y sale Todo Salio Mall!!!"}
    mensaje: 'Hola Mundo'
}, function(respuesta) {
    console.log('Respuesta Server', respuesta);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});
const { io } = require('../server');

//client= contiene toda la info de la computadora que hizo la conexion
io.on('connection', (client) => {
    console.log('Usuario Inner conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario Inner Desconectado');
    });

    //Escuchar el cliente lo recibo en mensaje
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', data);

    });

});

// if (mensaje.usuario) {
//     callback({
//         resp: 'Todo Salio Bien'
//     });
// } else {
//     callback({
//         resp: 'Todo Salio Mall!!!'
//     });
// }
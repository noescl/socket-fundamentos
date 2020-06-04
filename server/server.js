const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
//se monta el servidor con la configuracion
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//midleware para habilitar la carpeta publica
app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
// Mantinene una conexion directa con el servidor, Ususario conectados, disparar eventos, etc
//se cambia esto porque el codigo que seguia se coloc en otro archivo socket.js
//let io = socketIO(server);

//se exporta esta variable io que es requerida en socket.js
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
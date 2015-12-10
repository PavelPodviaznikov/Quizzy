var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var path = require('path');

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.use(express.static('public'));

server.listen('3000', function () {
    console.log('Listening on the port 3000');
});

io.on('connection', function (socket) {
    socket.on('message send', function (data) {
        io.sockets.emit('new message', data);
    });
});

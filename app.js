var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var path = require('path');

var app = express();
var server = http.createServer(app);
var io = socketio(server);

var onlineUsers = [];

app.use(express.static('public'));

server.listen('3000', function () {
    console.log('Listening on the port 3000');
});

io.sockets.on('connection', function (socket) {

    io.sockets.emit('online users', onlineUsers);

    socket.on('message send', function (message) {
        io.sockets.emit('new message', {author: getUserByConnectionId(socket.id).name, text: message});
    });

    socket.on('login', function (user) {
        onlineUsers.push({socketId: socket.id, user: user});
        socket.emit('logined', {socketId: socket.id, user: user});
        io.sockets.emit('online users', onlineUsers);
    });

    socket.on('disconnect', function () {
        onlineUsers.forEach(function (connection, index) {
            if(connection.socketId === socket.id) {
                onlineUsers.splice(index, 1);
            }
        });

        io.sockets.emit('online users', onlineUsers);
    });
});

function getUserByConnectionId (id) {
    var user = {};

    onlineUsers.forEach(function (connection) {
        if(id === connection.socketId) {
            user = connection.user;
        }
    });

    return user;
}

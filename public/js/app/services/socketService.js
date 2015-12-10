(function () {
    'use strcit';

    angular.module('quizzy')
        .factory('socketService', socketService);

    socketService.$inject = ['socketFactory'];

    function socketService (socketFactory) {

        var socket = {};

        function createSocket () {
            socket = socketFactory();
        }

        function connect () {
            socket.connect();
        }

        function disconnect () {
            socket.disconnect();
        }

        function send (type, data) {
            socket.emit(type, data);
        }

        function listen (event, callback) {
            socket.on(event, callback);
        }

        return {
            createSocket: createSocket,
            connect: connect,
            disconnect: disconnect,
            send: send,
            listen: listen
        };
    }

})();

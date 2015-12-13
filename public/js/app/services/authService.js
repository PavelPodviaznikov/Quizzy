(function () {
    'use strict';

    angular.module('quizzy')
        .factory('authService', authService);

    authService.$inject = ['socketService', 'userService'];

    function authService (socketService, userService) {

        function login (user) {
            socketService.send('login', user);
            socketService.listen('logined', function (data) {
                userService.setActiveUser(data);
            });
        }

        return {
            login: login
        };

    }

})();

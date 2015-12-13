(function () {
    'use strict';

    angular.module('user')
        .factory('userService', userService);

    function userService () {

        var activeUser = {};

        function getActiveUser() {
            return activeUser;
        }

        function setActiveUser (data) {
            activeUser.name = data.user.name;
            activeUser.connectionId = data.socketId; 
        }

        return {
            setActiveUser: setActiveUser,
            getActiveUser: getActiveUser
        };

    }
})();

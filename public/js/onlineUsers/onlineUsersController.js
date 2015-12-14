(function () {
    'use strict';

    angular.module('onlineUsers').controller('OnlineUsersController', onlineUsersController);

    onlineUsersController.$inject = ['$scope', 'socketService', 'privateDialogService'];

    function onlineUsersController ($scope, socketService, privateDialogService) {

        socketService.listen('online users', function (users) {
            $scope.users = users;
        });

        $scope.openPrivateDialog = function (user) {
            privateDialogService.openPrivateDialog(user);
        };
    }
})();

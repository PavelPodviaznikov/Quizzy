(function () {
    'use strict';

    angular.module('chat')
        .controller('ChatController', chatController);

        chatController.$inject = ['$scope', 'socketService'];

        function chatController ($scope, socketService) {

            $scope.message = '';
            $scope.messages = [];

            socketService.listen('new message', function(message) {
                $scope.messages.push(message);
            });

            $scope.sendMessage = function () {
                socketService.send('message send', $scope.message);
                $scope.message = '';
            };

        }

})();

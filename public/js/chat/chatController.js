(function () {
    'use strict';

    angular.module('chat')
        .controller('ChatController', chatController);

        chatController.$inject = ['$scope', '$element', '$timeout', 'socketService'];

        function chatController ($scope, $element, $timeout, socketService) {

            $scope.message = '';
            $scope.messages = [];
            $scope.sendMessage = sendMessage;

            socketService.listen('new message', addNewMessage);

            function sendMessage () {
                if ($scope.message) {
                    socketService.send('message send', $scope.message);
                    $scope.message = '';
                }
            }

            function addNewMessage (message) {
                $scope.messages.push(message);
                keepScrollInBottom();
            }

            function keepScrollInBottom () {
                var panelBodyElement = $element[0].getElementsByClassName('panel-body')[0];

                $timeout(function () {
                    panelBodyElement.scrollTop = panelBodyElement.scrollHeight - panelBodyElement.offsetHeight;
                }, 50);
            }

        }

})();

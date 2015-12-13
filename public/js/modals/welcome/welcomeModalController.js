(function () {
    'use strict';

    angular.module('modals')
        .controller('WelcomeModalController', welcomeModalController);

        welcomeModalController.$inject = ['$scope', '$modalInstance', 'authService'];

    function welcomeModalController ($scope, $modalInstance, authService) {

        $scope.closeModal = $modalInstance.close;
        $scope.play = play;

        function play (userName) {
            if (!userName) {
                return false;
            }

            authService.login({name: userName});
            $modalInstance.close();
        }

    }

})();

(function () {
    'use strict';

    angular.module('modals')
        .factory('modalService', modalService);

    modalService.$inject = ['$modal'];

    function modalService ($modal) {

        function welcomeModal () {
            return $modal.open({
                animation: true,
                backdrop: true,
                templateUrl: 'js/modals/welcome/welcomeModal.html',
                controller: 'WelcomeModalController',
            });
        }

        return {
            openWelcomeModal: welcomeModal
        };

    }

})();

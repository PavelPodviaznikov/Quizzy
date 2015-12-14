(function () {
    'use strict';

    angular.module('privateDialog').factory('privateDialogService', privateDialogService);

    privateDialogService.$inject = ['socketService'];

    function privateDialogService (socketService) {

        var selectedUser = {};

        function openPrivateDialog (user) {
            selectedUser = user;
        }

        function getUser () {
            return selectedUser;
        }

        return {
            openPrivateDialog: openPrivateDialog,
            getUser: getUser
        };
    }
})();

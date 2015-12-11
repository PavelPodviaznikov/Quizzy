(function () {
    'use strict';

    angular.module('models')
        .factory('User', User);

    function User (name, avatar) {
        this.name = name;
        this.avatar = avatar;
    }

})();

(function () {
    'use strict';

    angular.module('quizzy')
        .run(run);

    run.$inject = ['socketService'];

    function run (socketService) {
        socketService.createSocket();
        socketService.connect();
    }

})();

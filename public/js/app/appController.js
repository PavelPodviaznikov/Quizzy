(function () {
    'use strict';

    angular.module('quizzy')
        .controller('QuizzyController', quizzyController);

    quizzyController.$inject = ['modalService'];

    function quizzyController (modalService) {
        modalService.openWelcomeModal();
    }

})();

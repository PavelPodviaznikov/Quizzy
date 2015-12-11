(function () {
    'use strict';

    angular.module('quizzy', [

        /***** App modules *****/
        'chat',
        'modals',
        'models',

        /***** Vendor modeules *****/
        'btford.socket-io',
        'ui.bootstrap'
    ]);
})();

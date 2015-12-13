(function () {
    'use strict';

    angular.module('quizzy', [

        /***** App modules *****/
        'chat',
        'modals',
        'user',

        /***** Vendor modeules *****/
        'btford.socket-io',
        'ui.bootstrap'
    ]);
})();

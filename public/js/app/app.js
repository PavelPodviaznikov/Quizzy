(function () {
    'use strict';

    angular.module('quizzy', [

        /***** App modules *****/
        'chat',
        'modals',
        'user',
        'onlineUsers',
        'privateDialog',

        /***** Vendor modeules *****/
        'btford.socket-io',
        'ui.bootstrap'
    ]);
})();

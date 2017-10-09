'use strict';

(function () {
    angular
        .module('Prototype', ['ui.router'])
        .config(['$urlRouterProvider', '$stateProvider', routeProvider]);

    function routeProvider($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('form', { url: '/form', templateUrl: '/Partials/Form' })
            .state('form.step1', { url: '/step1', templateUrl: '/Partials/Step1' })
            .state('form.step2', { url: '/step2', templateUrl: '/Partials/Step2' });
        $urlRouterProvider.otherwise('/form/step1');
    }
})();
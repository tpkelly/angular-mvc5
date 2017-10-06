'use strict';

(function () {
    angular
        .module('Prototype', ['ngRoute'])
        .config(['$routeProvider', routeProvider]);

    function routeProvider($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: '/Partials/Home' })
            .otherwise({ redirectTo: '/home' });
    }
})();
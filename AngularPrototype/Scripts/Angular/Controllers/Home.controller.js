'use strict';

(function () {
    angular
        .module('Prototype')
        .controller('HomeController', homeController);

    function homeController() {
        var vm = this;
        vm.title = 'Home View';
    }
})();
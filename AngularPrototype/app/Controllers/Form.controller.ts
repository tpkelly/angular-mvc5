'use strict';

(function () {
    angular
        .module('Prototype')
        .controller('FormController', formController);

    function formController() {
        var vm = this;

        vm.title = 'Home View';
        vm.formData = {};
    }
})();
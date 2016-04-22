(function () {
    'use strict';

    angular
	.module('app')
	.controller('AccountController', AccountController);

    function AccountController($stateParams, PlantsService) {
	var vm = this;

	angular.extend(vm, {
	    settings: {
		enableFriends: true
	    }
	});

    }
})();

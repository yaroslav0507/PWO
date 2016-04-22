(function () {
    'use strict';

    angular
	.module('app')
	.controller('AccountController', AccountController);

    function AccountController(PlantsService, $state, stateAfterClearAll) {
	var vm = this;

	angular.extend(vm, {
	    clearAll: clearAll
	});

	function clearAll(){
	    PlantsService.clearAll();
	    $state.go(stateAfterClearAll);
	}
    }
})();

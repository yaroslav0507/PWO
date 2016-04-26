(function () {
    'use strict';

    angular
	.module('app')
	.controller('AccountController', AccountController);

    function AccountController(PlantsService, $state, stateAfterClearAll, NotificationService) {
	var vm = this;

	angular.extend(vm, {
	    clearAll: clearAll,
	    pushNotification: pushNotification
	});

	function clearAll(){
	    PlantsService.clearAll();
	    $state.go(stateAfterClearAll);
	}

	function pushNotification(){
	    NotificationService.scheduleSingleNotification();
	}
    }
})();

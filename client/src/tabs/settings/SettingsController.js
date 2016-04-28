(function () {
    'use strict';

    angular
	.module('app')
	.controller('SettingsController', SettingsController);

    function SettingsController(PlantsService, $state, targetState, NotificationService) {
	var vm = this;

	angular.extend(vm, {
	    clearAll: clearAll,
	    pushNotification: pushNotification
	});

	function clearAll(){
	    PlantsService.clearAll();
	    $state.go(targetState);
	}

	function pushNotification(){
	    NotificationService.scheduleSingleNotification();
	}
    }
})();

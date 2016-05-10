(function () {
    'use strict';

    angular
	.module('app')
	.controller('SettingsController', SettingsController);

    function SettingsController(PlantsService, ToastService, $state, targetState, NotificationService) {
	var vm = this;

	angular.extend(vm, {
	    clearAll: clearAll,
	    pushNotification: pushNotification,
	    showToast: showToast
	});

	function clearAll(){
	    PlantsService.clearAll();
	    $state.go(targetState);
	}

	function pushNotification(){
	    NotificationService.scheduleSingleNotification();
	}

	function showToast(){
	    ToastService.showToast('Mock toast');
	}
    }
})();

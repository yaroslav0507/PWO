(function () {
    'use strict';

    angular
	.module('app')
	.controller('DashboardController', DashboardController);

    function DashboardController(PlantsService) {
	var vm = this;

	angular.extend(vm, {
	    remove: function (plant) {
		PlantsService.removePlant(plant);
	    }
	});
    }
})();

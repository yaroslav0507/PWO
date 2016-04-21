(function () {
    'use strict';

    angular
	.module('app')
	.controller('PlantsController', PlantsController);

    function PlantsController(PlantsService, plants) {
	let vm = this;

	function removePlant(plant) {
	    PlantsService.removePlant(plant);
	}

	angular.extend(vm, {
	    plants: plants,
	    removePlant: removePlant
	});

    }
})();

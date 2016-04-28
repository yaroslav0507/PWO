(function () {
    'use strict';

    angular
	.module('app')
	.controller('PlantDetailController', PlantDetailController);

    function PlantDetailController(plant, PlantsService, HOURS_TO_MILLISECONDS) {
	var vm = this;

	angular.extend(vm, {
	    plant: plant,
	    watterPlant: watterPlant
	});

	function watterPlant(){
	    vm.plant.nextWatering = Date.now() + plant.wateringFrequency * HOURS_TO_MILLISECONDS;
	    PlantsService.updatePlant(vm.plant);
	}

    }
})();

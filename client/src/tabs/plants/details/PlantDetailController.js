(function () {
    'use strict';

    angular
	.module('app')
	.controller('PlantDetailController', PlantDetailController);

    function PlantDetailController(plant, PlantsService) {
	var hoursToMiliseconds = 60*60*1000;
	var vm = this;

	angular.extend(vm, {
	    plant: plant,
	    watterPlant: watterPlant
	});

	function watterPlant(){
	    vm.plant.nextWatering = Date.now() + plant.wateringFrequency * hoursToMiliseconds;
	    PlantsService.updatePlant(vm.plant);
	}

    }
})();

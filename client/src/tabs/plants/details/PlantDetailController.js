(function () {
    'use strict';

    angular
	.module('app')
	.controller('PlantDetailController', PlantDetailController);

    function PlantDetailController(plant) {
	var vm = this;

	angular.extend(vm, {
	    plant: plant
	});

    }
})();

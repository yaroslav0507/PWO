(function () {
    'use strict';

    angular
	.module('app')
	.controller('PlantDetailController', PlantDetailController);

    function PlantDetailController(plant) {
	let vm = this;

	angular.extend(vm, {
	    plant: plant
	});

    }
})();

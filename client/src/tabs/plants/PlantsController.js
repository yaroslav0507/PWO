(function () {
    'use strict';

    angular
	.module('app')
	.controller('PlantsController', PlantsController);

    function PlantsController(PlantsService, plants) {
	var vm = this;

	angular.extend(vm, {
	    plants: plants,
	    removePlant: removePlant,
	    onItemClick: onItemClick,
	    isSelectedItem: isSelectedItem
	});

	function onItemClick(item){
	    vm.itemSelected = item;
	}

	function removePlant(plant) {
	    PlantsService.removePlant(plant);
	}

	function isSelectedItem(item){
	    return item === vm.itemSelected;
	}
	console.log('>> list init');
    }
})();

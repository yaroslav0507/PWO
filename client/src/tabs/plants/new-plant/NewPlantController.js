(function () {
    'use strict';

    angular
	.module('app')
	.controller('NewPlantController', NewPlantController);

    function NewPlantController(PlantsService, $state, targetState, DEFAULT_CHART_OPTIONS) {
	var DEFAULT_WATERING_FREQUENCY = 8;
	var vm = this;

	angular.extend(vm, {
	    plant: {
		wateringFrequency: DEFAULT_WATERING_FREQUENCY
	    },
	    options: DEFAULT_CHART_OPTIONS,
	    onFrequencyChange: setChartData,
	    isFormInValid: isFormInValid,
	    onSubmit: onSubmit
	});

	setChartData();

	function isFormInValid(){
	    return vm.form.$invalid && vm.submitted;
	}

	function setChartData(){
	    vm.data = [
		{label: "Water in", value: vm.plant.wateringFrequency, color: "#16a085", suffix: "hr."}
	    ];
	}

	function onSubmit(){
	    vm.submitted = true;

	    if(vm.form.$valid){
		PlantsService.addPlant(vm.plant);
		$state.go(targetState);
	    }
	}
    }
})();

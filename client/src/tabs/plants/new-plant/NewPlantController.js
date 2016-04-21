(function () {
    'use strict';

    angular
	.module('app')
	.controller('NewPlantController', NewPlantController);

    function NewPlantController() {
	var vm = this;

	angular.extend(vm, {
	    wateringFrequency: 8,
	    onFrequencyChange: setChartData
	});

	setChartData();

	vm.options = {thickness: 10, mode: "gauge", total: 100};

	function setChartData(){
	    vm.data = [
		{label: "Water in", value: vm.wateringFrequency, color: "#16a085", suffix: "hr."}
	    ];
	}
    }
})();

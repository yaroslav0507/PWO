(function () {
    'use strict';

    angular
	.module('app')
	.controller('DashboardController', DashboardController);

    function DashboardController(PlantsService, PlantsAnalyticsService, DEFAULT_CHART_OPTIONS) {
	var vm = this;
	var hoursToMiliseconds = 60*60*1000;

	angular.extend(vm, {
	    options: DEFAULT_CHART_OPTIONS,
	    remove: remove,
	    hottest: PlantsAnalyticsService.getHottest()
	});

	initialize();

	function remove (plant) {
	    PlantsService.removePlant(plant);
	}

	function initialize(){
	    if(vm.hottest){
		var chartLabel = "Watter " + vm.hottest.name + " in";
		var timeLast = Math.ceil(vm.hottest.timeLast / hoursToMiliseconds);
		vm.chartData = [
		    {label: chartLabel, value: timeLast, color: "#16a085", suffix: 'h.'}
		];
	    } else {
		vm.chartData = [
		    {label: "You have no plants", value: 0, color: "#16a085"}
		];
	    }
	}

    }
})();

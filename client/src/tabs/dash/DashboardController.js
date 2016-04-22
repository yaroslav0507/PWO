(function () {
    'use strict';

    angular
	.module('app')
	.controller('DashboardController', DashboardController);

    function DashboardController(PlantsAnalyticsService, PlantsService, hottest) {
	var vm = this;
	var hoursToMiliseconds = 60*60*1000;

	angular.extend(vm, {
	    options: {thickness: 10, mode: "gauge", total: 100},
	    remove: remove,
	    hottest: hottest
	});

	setChartData();

	function remove (plant) {
	    PlantsService.removePlant(plant);
	}

	function setChartData(){
	    var chartLabel = "Watter " + vm.hottest.name + " in";
	    var timeLast = vm.hottest.timeLast / hoursToMiliseconds;
	    vm.chartData = [
		{label: chartLabel, value: timeLast, color: "#16a085", suffix: 'h.'}
	    ];
	}

    }
})();

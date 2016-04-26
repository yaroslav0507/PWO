(function(){
    'use strict';

    angular
	.module('app')
    	.factory('PlantsAnalyticsService', PlantsAnalyticsService);

    function PlantsAnalyticsService(PlantsService){
	return {
	    getHottest: getHottest
	};

	function getHottest(){
	    var plants = PlantsService.getAll();

	    var minLast = Math.min.apply(Math, plants.map(function(plant){return plant.timeLast;}));
	    var hottest = plants.filter(function(plant){
		return plant.timeLast === minLast;
	    });

	    return hottest[0];
	}
    }
})();

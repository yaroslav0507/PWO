(function () {
    'use strict';

    angular
	.module('app')
	.config(plantDetailState);

    function plantDetailState($stateProvider) {
	$stateProvider
	    .state('tab.plant-detail', {
		url: '/plants/:plantId',
		views: {
		    'tab-plants': {
			templateUrl: 'tabs/plants/plant-detail/plant-detail.html',
			controller: 'PlantDetailController',
			controllerAs: 'plantDetailCtrl',
			resolve: {
			    plant: resolvePlantDetails
			}
		    }
		}
	    });

	function resolvePlantDetails(PlantsService, $stateParams) {
	    return PlantsService.getPlant($stateParams.plantId)
	}
    }

})();



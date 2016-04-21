(function () {
    'use strict';

    angular
	.module('app')
	.config(appRouterConfig);

    function appRouterConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
	    .state('tab.plants', {
		url: '/plants',
		views: {
		    'tab-plants': {
			templateUrl: 'tabs/plants/tab-plants.html',
			controller: 'PlantsController',
			controllerAs: 'plantsCtrl',
			resolve: {
			    plants: resolvePlants
			}
		    }
		}
	    })
	    .state('tab.plant-detail', {
		url: '/plants/:plantId',
		views: {
		    'tab-plants': {
			templateUrl: 'tabs/plants/details/plant-detail.html',
			controller: 'PlantDetailController',
			controllerAs: 'plantDetailCtrl',
			resolve: {
			    plant: resolvePlantDetails
			}
		    }
		}
	    })
	    .state('tab.new-plant', {
		url: '/plants/new',
		views: {
		    'tab-plants': {
			templateUrl: 'tabs/plants/new-plant/new-plant.html',
			controller: 'NewPlantController',
			controllerAs: 'newPlantCtrl'
		    }
		}
	    });

	function resolvePlants(PlantsService) {
	    return PlantsService.getAll();
	}

	function resolvePlantDetails(PlantsService, $stateParams) {
	    return PlantsService.getPlant($stateParams.plantId)
	}
    }

})();



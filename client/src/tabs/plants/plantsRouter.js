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
	    .state('tab.new-plant', {
		url: '/new',
		views: {
		    'tab-plants': {
			templateUrl: 'tabs/plants/new-plant/new-plant.html',
			controller: 'NewPlantController',
			controllerAs: 'newPlantCtrl',
			resolve: {
			    targetState: function(){ return '^.plants' }
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
	    });


	function resolvePlants(PlantsService) {
	    var plants = PlantsService.getAll();
	    console.log("Resolved", plants);
	    return plants;
	}

	function resolvePlantDetails(PlantsService, $stateParams) {
	    return PlantsService.getPlant($stateParams.plantId)
	}
    }

})();



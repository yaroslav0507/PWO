(function () {
    'use strict';

    angular
	.module('app')
	.config(appRouterConfig);

    function appRouterConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
	    .state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'tabs/tabs.html'
	    })
	    .state('tab.dash', {
		url: '/dash',
		views: {
		    'tab-dash': {
			templateUrl: 'tabs/dash/tab-dash.html',
			controller: 'DashboardController',
			controllerAs: 'dashboardCtrl'
		    }
		}
	    })
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
	    .state('tab.account', {
		url: '/account',
		views: {
		    'tab-account': {
			templateUrl: 'tabs/account/tab-account.html',
			controller: 'AccountController'
		    }
		}
	    });

	$urlRouterProvider.otherwise('/tab/dash');

	function resolvePlants(PlantsService) {
	    return PlantsService.getAll();
	}

	function resolvePlantDetails(PlantsService, $stateParams) {
	    return PlantsService.getPlant($stateParams.plantId)
	}
    }

})();



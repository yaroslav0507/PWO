(function () {
    'use strict';

    angular
	.module('app')
	.config(plantsListState);

    function plantsListState($stateProvider) {
	$stateProvider
	    .state('tab.plants', {
		url: '/plants',
		views: {
		    'tab-plants': {
			templateUrl: 'tabs/plants/plants-list/tab-plants-list.html',
			controller: 'PlantsListController',
			controllerAs: 'plantsListCtrl',
			resolve: {
			    plants: resolveAllPlants
			}
		    }
		}
	    });

	function resolveAllPlants(PlantsService) {
	    return PlantsService.getAll();
	}
    }

})();



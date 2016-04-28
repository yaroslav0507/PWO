(function () {
    'use strict';

    angular
	.module('app')
	.config(newPlantState);

    function newPlantState($stateProvider) {
	$stateProvider
	    .state('tab.new-plant', {
		url: '/new',
		views: {
		    'tab-plants': {
			templateUrl: 'tabs/plants/plant-new/new-plant.html',
			controller: 'NewPlantController',
			controllerAs: 'newPlantCtrl',
			resolve: {
			    targetState: resolveTargetState
			}
		    }
		}
	    });

	function resolveTargetState(){
	    return '^.plants'
	}
    }

})();



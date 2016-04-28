(function(){
    'use strict';

    angular
	.module('app')
	.config(dashboardStateConfig);

    function dashboardStateConfig($stateProvider) {
	$stateProvider
	    .state('tab.dashboard', {
		url: '/dashboard',
		views: {
		    'tab-dash': {
			templateUrl: 'tabs/dashboard/tab-dashboard.html',
			controller: 'DashboardController',
			controllerAs: 'dashboardCtrl',
			resolve: {
			    hottest: resolveHottest
			}
		    }
		}
	    });

	function resolveHottest(PlantsAnalyticsService){
	    return PlantsAnalyticsService.getHottest();
	}
    }
})();

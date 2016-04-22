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
	    .state('tab.account', {
		url: '/account',
		views: {
		    'tab-account': {
			templateUrl: 'tabs/account/tab-account.html',
			controller: 'AccountController'
		    }
		}
	    });

	$urlRouterProvider.otherwise('/tab/plants');
    }

})();



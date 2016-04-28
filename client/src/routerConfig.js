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
	    });

	$urlRouterProvider.otherwise('/tab/plants');
    }

})();



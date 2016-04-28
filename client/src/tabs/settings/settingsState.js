(function(){
    'use strict';

    angular
	.module('app')
	.config(settingsStateConfig);

    function settingsStateConfig($stateProvider){
	$stateProvider
	    .state('tab.settings', {
		url: '/account',
		views: {
		    'tab-account': {
			templateUrl: 'tabs/settings/tab-settings.html',
			controller: 'SettingsController',
			controllerAs: 'settingsCtrl',
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

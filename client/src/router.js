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
			controller: 'DashController'
		    }
		}
	    })
	    .state('tab.chats', {
		url: '/chats',
		views: {
		    'tab-chats': {
			templateUrl: 'tabs/chats/tab-chats.html',
			controller: 'ChatsController',
			controllerAs: 'chatsCtrl'
		    }
		}
	    })
	    .state('tab.chat-detail', {
		url: '/chats/:chatId',
		views: {
		    'tab-chats': {
			templateUrl: 'tabs/chats/details/chat-detail.html',
			controller: 'ChatDetailController',
			controllerAs: 'chatDetailCtrl'
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
    }
})();



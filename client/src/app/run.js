(function () {
    'use strict';

    angular
	.module('app')
	.run(function ($ionicPlatform, $rootScope, $cordovaVibration) {
	    $ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
		    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		    cordova.plugins.Keyboard.disableScroll(true);
		}

		if (window.StatusBar) {
		    StatusBar.styleDefault();
		}

		$rootScope.$on('$cordovaLocalNotification:trigger', function(event, notification, state) {
		    $cordovaVibration.vibrate(1000);
		})
	    });
	})
})();

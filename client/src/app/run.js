(function () {
    'use strict';

    angular
	.module('app')
	.run(function ($ionicPlatform, $rootScope, $cordovaVibration, $ionicPopup) {
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
		    $ionicPopup.show({
			title: notification.title,
			subTitle: 'then check it in plant details',
			template: '<div style="text-align: center">' + notification.text + '</div>',
			buttons: [{
			    text: 'Ok'
			}]
		    });
		    $cordovaVibration.vibrate(1000);
		})
	    });
	})
})();

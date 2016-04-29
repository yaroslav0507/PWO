(function () {
    'use strict';

    angular
	.module('app')
	.factory('NotificationService', NotificationService);

    function NotificationService($cordovaLocalNotification, $ionicPlatform) {
	return {
	    scheduleSingleNotification: scheduleSingleNotification,
	    scheduleDelayedNotification: scheduleDelayedNotification
	};

	function scheduleSingleNotification() {
	    _ionicPlatformReady(function () {
		var now = Date.now();
		$cordovaLocalNotification.schedule({
		    id: 1,
		    text: 'Mock notification',
		    title: 'Notification happened',
		    at: now + 10000
		});
	    });
	}

	function scheduleDelayedNotification(config) {
	    _ionicPlatformReady(function () {
		$cordovaLocalNotification
		    .schedule(config);
	    });
	}

	function _ionicPlatformReady(cb) {
	    $ionicPlatform.ready(function () {
		if (ionic.Platform.isWebView()) {
		    cb()
		}
	    })
	}
    }


})();

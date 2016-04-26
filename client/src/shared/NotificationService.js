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
		$cordovaLocalNotification.schedule({
		    id: 1,
		    text: 'Instant Notification',
		    title: 'Instant'
		}).then(function () {
		    alert("Instant Notification set");
		});
	    });
	}

	function scheduleDelayedNotification(config) {
	    _ionicPlatformReady(function () {
		$cordovaLocalNotification
		    .schedule(config)
		    .then(function () {
			console.log('--> Delayed notification triggered');
		    });
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

(function(){
    'use strict';

    angular
    	.module('app')
    	.factory('NotificationService', NotificationService);

    function NotificationService($http){
	var jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYTBlMzM5ZS1iZWNlLTRiODQtOGM1OC0zNWY1YzBlM2FlYzYifQ.rBYRkuDWwRNzao0SzOW96CXALKWZIdvXQ2acdxZPXrM';
	var tokens = ['ed90cf4f'];
	var profile = 'ionic_pot_app';

	return {
	    notify: notify
	};

	function notify(){
	    var req = {
		method: 'POST',
		url: 'https://api.ionic.io/push/notifications',
		headers: {
		    'Content-Type': 'application/json',
		    'Authorization': 'Bearer ' + jwt
		},
		data: {
		    "tokens": tokens,
		    "profile": profile,
		    "notification": {
			"title": "Hi",
			"message": "Hello world!",
			"android": {
			    "title": "Hey",
			    "message": "Hello Android!"
			},
			"ios": {
			    "title": "Howdy",
			    "message": "Hello iOS!"
			}
		    }
		}
	    };

	    $http(req).success(function(resp){
		// Handle success
		console.log("Ionic Push: Push success", resp);
	    }).error(function(error){
		// Handle error
		console.log("Ionic Push: Push error", error);
	    });
	}
    }


})();

(function(){
    'use strict';

    angular
    	.module('app')
    	.factory('ToastService', ToastService);

    function ToastService($ionicPlatform){
	return {
	    showToast: showToast
	};

	function showToast(title){
	    _ionicPlatformReady(function(){
		navigator.showToast(title);
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


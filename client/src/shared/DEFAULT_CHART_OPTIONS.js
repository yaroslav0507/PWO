(function(){
    'use strict';

    angular
    	.module('app')
    	.constant('DEFAULT_CHART_OPTIONS', {
	    thickness: 10,
	    mode: "gauge",
	    total: 100
	});
})();

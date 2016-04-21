(function(){
    'use strict';

    angular
	.module('app')
    	.directive('ionAddItem', ionAddItem);

    function ionAddItem(){
	return {
	    templateUrl: 'tabs/plants/ion-add-item/ion-add-item.html',
	    restrict: 'EA',
	    scope: {
		targetState: '@'
	    }
	}
    }
})();

(function(){
    'use strict';

    angular
	.module('app')
    	.directive('ionAddItem', ionAddItem);

    function ionAddItem(){
	return {
	    restrict: 'EA',
	    templateUrl: 'tabs/plants/ion-add-item/ion-add-item.html'
	}
    }
})();

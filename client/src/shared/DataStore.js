(function(){
    'use strict';

    angular
    	.module('app')
    	.factory('DataStore', DataStore);

    function DataStore(){
	var STORAGE_NAME = 'PlantAppStore';

	return {
	    update: update,
	    get: get
	};

	function update(data) {
	    window.localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
	}

	function get() {
	    return JSON.parse(window.localStorage.getItem(STORAGE_NAME)) || [];
	}
    }

})();

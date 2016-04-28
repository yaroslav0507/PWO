(function(){
    'use strict';

    angular
    	.module('app')
    	.factory('DataStore', DataStore);

    function DataStore(LOCAL_STORAGE_KEY){

	return {
	    update: update,
	    get: get,
	    clear: clear
	};

	function update(data) {
	    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
	}

	function get() {
	    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
	}

	function clear() {
	    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
	}
    }

})();

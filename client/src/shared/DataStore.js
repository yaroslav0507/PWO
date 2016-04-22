(function(){
    'use strict';

    angular
    	.module('app')
    	.factory('DataStore', DataStore);

    function DataStore(){
	var STORAGE_NAME = 'PlantAppStore';
	var store = {};

	return {
	    update: update,
	    get: get
	};

	function update(data){
	    store = JSON.stringify(data);
	    window.localStorage.setItem(STORAGE_NAME, store);
	}

	function get(){
	    var storedData = window.localStorage.getItem(STORAGE_NAME);
	    return JSON.parse(storedData) || new Array();
	}
    }

})();

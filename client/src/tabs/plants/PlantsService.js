(function () {
    'use strict';

    angular
	.module('app')
	.factory('PlantsService', PlantsService);

    function PlantsService(DataStore) {
	var plants;
	initialize();

	return {
	    getAll: getAll,
	    addPlant: addPlant,
	    removePlant: removePlant,
	    clearAll: clearAll
	};

	function initialize(){
	    plants = getAll();
	}

	function getAll() {
	    return plants ? plants : DataStore.get();
	}

	function addPlant(plant) {
	    var DEFAULT_PLANT_IMAGE = './img/Graphicloads-Food-Drink-Leaf.ico';

	    if (!plants) {
		plants = [];
	    }

	    angular.extend(plant, {
		id: generateIndex(),
		image: DEFAULT_PLANT_IMAGE,
		lastWatering: getLastWatering(),
		nextWatering: getNextWatering(plant.wateringFrequency)
	    });

	    plants.push(plant);
	    DataStore.update(plants);

	    function getLastWatering(){
		return new Date().getTime();
	    }

	    function getNextWatering(wateringFrequency){
		return new Date(new Date().getTime() + wateringFrequency*60*60*1000)
	    }

	    function generateIndex(){
		return plants.length ? (plants[plants.length - 1].id + 1) : 0;
	    }
	}

	function removePlant(plant) {
	    plants.splice(plants.indexOf(plant), 1);
	    DataStore.update(plants);
	}

	function clearAll() {
	    plants.splice(0, plants.length);
	    DataStore.clear();
	}

/*	_updateLocalPlants();

	function getLocalPlants(){
	    return plants;
	}

	function getAll() {
	    return DataStore.get();
	}

	function _updateLocalPlants(){
	    plants = DataStore.get();
	}

	function removePlant(plant) {
	    plants.splice(plants.indexOf(plant), 1);
	}

	function getPlant(plantId) {
	    for (var i = 0; i < plants.length; i++) {
		if (plants[i].id === parseInt(plantId)) {
		    return plants[i];
		}
	    }
	    return null;
	}

	function addPlant(plant) {
	    var DEFAULT_PLANT_IMAGE = './img/Graphicloads-Food-Drink-Leaf.ico';

	    if(plant){
		angular.extend(plant, {
		    id: generateIndex(),
		    image: DEFAULT_PLANT_IMAGE,
		    lastWatering: getLastWatering(),
		    nextWatering: getNextWatering(plant.wateringFrequency)
		});

		_updateLocalPlants();
		plants.push(plant);
		DataStore.update(plants);
	    }

	    function getLastWatering(){
		return new Date().getTime();
	    }

	    function getNextWatering(wateringFrequency){
		return new Date(new Date().getTime() + wateringFrequency*60*60*1000)
	    }

	    function generateIndex(){
		var lastIndex = plants.length && plants[plants.length - 1].id || 0;
		var nextIndex = lastIndex + 1;
		return nextIndex;
	    }

	}*/

    }
})();

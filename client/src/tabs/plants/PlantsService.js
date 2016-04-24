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
	    var hoursToMiliseconds = 3600000;

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
		return new Date().getTime() + wateringFrequency * hoursToMiliseconds;
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

    }
})();

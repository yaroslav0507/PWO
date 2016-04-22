(function () {
    'use strict';

    angular
	.module('app')
	.factory('PlantsService', PlantsService);

    function PlantsService(DataStore) {
	var plants = DataStore.get();

	return {
	    getAll: getAll,
	    removePlant: removePlant,
	    getPlant: getPlant,
	    addPlant: addPlant
	};

	function getAll() {
	    return plants;
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

	}

    }
})();

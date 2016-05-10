(function () {
    'use strict';

    angular
	.module('app')
	.factory('PlantsService', PlantsService);

    function PlantsService(DataStore, NotificationService, ToastService, DEFAULT_PLANT_IMAGE, HOURS_TO_MILLISECONDS) {
	var plants;
	initialize();

	return {
	    getAll: getAll,
	    addPlant: addPlant,
	    removePlant: removePlant,
	    clearAll: clearAll,
	    getPlant: getPlant,
	    updatePlant: updatePlant
	};

	function initialize(){
	    plants = getAll();
	}

	function getAll() {
	    return plants ? plants : DataStore.get();
	}

	function getPlant(plantId) {
	    for (var i = 0; i < plants.length; i++) {
		if (plants[i].id === parseInt(plantId)) {
		    return plants[i];
		}
	    }
	    return null;
	}

	function updatePlant(plant) {
	    for (var i = 0; i < plants.length; i++) {
		if (plants[i].id === parseInt(plant.id)) {
		    plants[i] = plant;
		    DataStore.update(plants);
		    schedulePlantWateringNotification(plant);
		}
	    }
	    return null;
	}

	function addPlant(plant) {

	    if (!plants) {
		plants = [];
	    }

	    angular.extend(plant, {
		id: generateIndex(),
		image: DEFAULT_PLANT_IMAGE,
		lastWatering: getLastWatering(),
		nextWatering: getNextWatering(plant.wateringFrequency)
	    });
	    schedulePlantWateringNotification(plant);
	    ToastService.showToast(plant.name + ' is need to be watered every ' + plant.wateringFrequency + (plant.wateringFrequency != 1 ? 'hrs.' : 'hr'));

	    plants.push(plant);
	    DataStore.update(plants);

	    function getLastWatering(){
		return new Date().getTime();
	    }

	    function getNextWatering(wateringFrequency){
		return new Date().getTime() + wateringFrequency * HOURS_TO_MILLISECONDS;
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

	function schedulePlantWateringNotification(plant){
	    var notificationText = plant.name + ' is need to be watered';
	    var notificationConfig = {
		id: plant.id,
		title: 'Watter your plant',
		text: notificationText,
		at: plant.nextWatering
	    };

	    NotificationService.scheduleDelayedNotification(notificationConfig);
	}

    }
})();

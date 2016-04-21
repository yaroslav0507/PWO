(function () {
    'use strict';

    angular
	.module('app')
	.factory('PlantsService', PlantsService);

    function PlantsService() {
	var plants = [{
	    id: 0,
	    name: 'Ben Sparrow',
	    lastText: 'You on your way?',
	    face: 'img/ben.png'
	}, {
	    id: 1,
	    name: 'Max Lynx',
	    lastText: 'Hey, it\'s me',
	    face: 'img/max.png'
	}, {
	    id: 2,
	    name: 'Adam Bradleyson',
	    lastText: 'I should buy a boat',
	    face: 'img/adam.jpg'
	}, {
	    id: 3,
	    name: 'Perry Governor',
	    lastText: 'Look at my mukluks!',
	    face: 'img/perry.png'
	}, {
	    id: 4,
	    name: 'Mike Harrington',
	    lastText: 'This is wicked good ice cream.',
	    face: 'img/mike.png'
	}];

	return {
	    getAll: getAll,
	    removePlant: removePlant,
	    getPlant: getPlant
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

    }
})();

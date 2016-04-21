(function () {
    'use strict';

    angular
	.module('app')
	.controller('AccountController', AccountController);

    function AccountController($stateParams, Chats) {
	let vm = this;

	angular.extend(vm, {
	    settings: {
		enableFriends: true
	    }
	});

    }
})();

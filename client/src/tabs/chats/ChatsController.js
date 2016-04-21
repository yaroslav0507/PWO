(function () {
    'use strict';

    angular
	.module('app')
	.controller('ChatsController', ChatsController);

    function ChatsController($stateParams, Chats) {
	let vm = this;

	angular.extend(vm, {
	    chats: Chats.getAll(),
	    remove: function (chat) {
		Chats.removeChat(chat);
	    }
	});

    }
})();

(function () {
    'use strict';

    angular
	.module('app')
	.controller('DashController', DashController);

    function DashController(Chats) {
	let vm = this;

	angular.extend(vm, {
	    chats: Chats.getAll(),
	    remove: function (chat) {
		Chats.removeChat(chat);
	    }
	});
    }
})();

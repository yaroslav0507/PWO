(function () {
    'use strict';

    angular
	.module('app')
	.controller('ChatDetailController', ChatDetailController);

    function ChatDetailController(Chats, $stateParams) {
	let vm = this;

	angular.extend(vm, {
	    chat: Chats.getChat($stateParams.chatId)
	});

    }
})();


var MessageDisp = function (_t, notificationModel) {

	this.flash = function (text, type) {
		var message = {
			title: _t('Zpráva aplikace'),
			viewed: false,
			type: type,
			text: _t(text),
			image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACDUlEQVR4Xu2Yz6/BQBDHpxoEcfTjVBVx4yjEv+/EQdwa14pTE04OBO+92WSavqoXOuFp+u1JY3d29rvfmQ9r7Xa7L8rxY0EAOAAlgB6Q4x5IaIKgACgACoACoECOFQAGgUFgEBgEBnMMAfwZAgaBQWAQGAQGgcEcK6DG4Pl8ptlsRpfLxcjYarVoOBz+knSz2dB6vU78Lkn7V8S8d8YqAa7XK83ncyoUCjQej2m5XNIPVmkwGFC73TZrypjD4fCQAK+I+ZfBVQLwZlerFXU6Her1eonreJ5HQRAQn2qj0TDukHm1Ws0Ix2O2260RrlQqpYqZtopVAoi1y+UyHY9Hk0O32w3FkI06jkO+74cC8Dh2y36/p8lkQovFgqrVqhFDEzONCCoB5OSk7qMl0Gw2w/Lo9/vmVMUBnGi0zi3Loul0SpVKJXRDmphvF0BOS049+n46nW5sHRVAXMAuiTZObcxnRVA5IN4DJHnXdU3dc+OLP/V63Vhd5haLRVM+0jg1MZ/dPI9XCZDUsbmuxc6SkGxKHCDzGJ2j0cj0A/7Mwti2fUOWR2Km2bxagHgt83sUgfcEkN4RLx0phfjvgEdi/psAaRf+lHmqEviUTWjygAC4EcKNEG6EcCOk6aJZnwsKgAKgACgACmS9k2vyBwVAAVAAFAAFNF0063NBAVAAFAAFQIGsd3JN/qBA3inwDTUHcp+19ttaAAAAAElFTkSuQmCC'
		};
		notificationModel.addMessage(message);
	};

};

myRetail.factory('messageDisp', function (_t, notificationModel) {
	var messageDisp = new MessageDisp(_t, notificationModel);
	return messageDisp;
});

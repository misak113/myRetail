
var MessageDisp = function () {

	this.flash = function (text, type) {
		alert(text);
	};

};

myRetail.factory('messageDisp', function () {
	var messageDisp = new MessageDisp();
	return messageDisp;
});

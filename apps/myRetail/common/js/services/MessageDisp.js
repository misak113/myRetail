
var MessageDisp = function (_t) {

	this.flash = function (text, type) {
		alert(_t(text));
	};

};

myRetail.factory('messageDisp', function (_t) {
	var messageDisp = new MessageDisp(_t);
	return messageDisp;
});

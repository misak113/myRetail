
/* JavaScript content from js/services/Translator.js in folder common */

var Translator = function () {

	this.translate = function (text) {
		return text;
	};

};

myRetail.factory('translator', function () {
	var translator = new Translator();
	return translator;
});
// helper function _t
myRetail.factory('_t', function (translator) {
	return translator.translate;
});

/* JavaScript content from js/plugins/TestPlugin.js in folder common */
/**
 * 
 */

var TestPlugin = function () {
	
	this.test = function (text, cb) {
		if (typeof cordova === 'undefined') return setTimeout(function () {cb({message: 'Action is not suported', code: 1113});}, 0);
		cordova.exec(function (res) {cb(null, res);}, function (e) {cb(e);}, 'TestPlugin', 'test', [text]);
	};
};
/*
cordova.addConstructor(function () {
	
});
*/
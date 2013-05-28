
/* JavaScript content from js/config/config.js in folder common */

var config = {
		serverUrl: 'http://myretail.avantcore.cz:14500',
		baseUrl: 'http://myretail.avantcore.cz:14500'
};
config = _.extend(config, configLocal);

myRetail.factory('config', function () {
	return config;
});

// Render init
$(document).ready(function () {
	$.pullDown.start({container: $('.ng-view')});
});
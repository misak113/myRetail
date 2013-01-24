
var config = {
		serverUrl: 'http://myretail.avantcore.cz:14500'
};
config = _.extend(config, window.configLocal);

myRetail.factory('config', function () {
	return config;
});
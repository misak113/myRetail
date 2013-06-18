

myRetail.factory('config', function () {
	var config = {
			serverUrl: 'http://myretail.avantcore.cz:14500',
			baseUrl: 'http://myretail.avantcore.cz:14500'
	};
	config = _.extend(config, configLocal);
	return config;
});

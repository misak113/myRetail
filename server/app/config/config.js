
// Libraries
var _ = require('underscore');

// Local config
var configLocal = require('./config.local');

// Deafault config
var config = {
	db: {
		url: 'mongodb://localhost:27017/myretail'
	},
	server: {
		port: 80
	},
	path: {
		frontendBasePath: __dirname+'/../../../apps/myRetail/common/'
	}
};

// AppFog envirnoment
if (process.env.VCAP_SERVICES) {
	var env = JSON.parse(process.env.VCAP_SERVICES);
	var envConfig = {
		db: env['mongodb-1.8'][0]['credentials']
	};
} else {
	var envConfig = {};
}

module.exports = _.extend(config, envConfig, configLocal);


var mongoose = require('mongoose');

var config = require('./config/config');

var l = require('./services/logDispatcher');


var db = null;

exports.start = function (app) {

	app.listen(config.server.port);
	l.info('Server is running on port '+config.server.port);
};

exports.dbReconnect = function (app) {
	l.info('Server is restarting');
	db = null;
	app.close();
	dbConnect();
};

var connection = function () {
	if (!db) {
		l.error('Tried to get connection which doesn`t exists');
	}

	return db;
};

var dbConnect = exports.dbConnect = function () {
	mongoose.connect(config.db.url);
	db = mongoose.connection;
	return db;
};

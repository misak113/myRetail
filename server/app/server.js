
var mongoose = require('mongoose');

var config = require('./config/config');

var l = require('./services/logDispatcher');


exports.start = function (app) {

	app.listen(config.server.port);
	app.on('error', function (e) { // @todo jinam
		l.error(e);
	});
	l.info('Server is running on port '+config.server.port);
};

exports.stop = function (app) {

};

var dbReconnect = exports.dbReconnect = function () {
	l.info('Server is restarting');
	var db = dbConnect();
};

var dbConnect = exports.dbConnect = function () {
	mongoose.connect(config.db.url);
	return mongoose.connection;
};

var delayedDbReconnect = function () {
	setTimeout(dbReconnect, 2000);
};


var errorDbConnect = function (e) {
	l.error('Failed to reconnect database');
	delayedDbReconnect();
};
mongoose.connection.on('error', errorDbConnect);

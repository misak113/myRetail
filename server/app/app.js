
var mongoose = require('mongoose');
var express = require('express');

var config = require('./config/config');

var l = require('./services/logDispatcher');
var router = require('./router');

var app = express();


var startServer = function () {

	app.listen(config.server.port).on('error', function (e) {
		l.error(e);
	});
	l.info('Server is running on port '+config.server.port);
};

var stopServer = function () {

};

var dbReconnect = function () {
	l.info('Server is restarting');
	var db = dbConnect();
};

var dbConnect = function () {
	mongoose.connect(config.db.url);
	return mongoose.connection;
};

var delayedDbReconnect = function () {
	setTimeout(dbReconnect, 2000);
};




// Start app
router.route(app);
var db = dbConnect();



// Events
mongoose.connection.on('error', function (e) {
	l.error('Failed to reconnect database');
	delayedDbReconnect();
});

db.on('open', function () {
	l.info('Database connection opened');
	startServer();
});

db.on('close', function () {
	l.error('Database connection closed');
	stopServer();
	dbReconnect();
});

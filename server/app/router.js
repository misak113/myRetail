
var express = require('express');

var config = require('./config/config');

var allowCrossDomain = require('./plugins/allowCrossDomain');

var OfferCtrl = require('./controllers/OfferCtrl');


exports.route = function (app) {
	
	app.configure(function () {
		app.use(allowCrossDomain);
		app.use(app.router);
		app.use(express.static(config.path.frontendBasePath));
	});

	app.all('/offers', OfferCtrl.offers);
};
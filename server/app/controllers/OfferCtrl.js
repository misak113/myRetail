
var Offer = require('../models/Offer');
var l = require('../services/logDispatcher');



exports.offers = function (data, cb) {
	Offer.find({}, function (e, offers) {
		if (e) {
			l.error(e);
			cb(404);
		}

		l.d('returned offers from mongoDB');
		cb(offers);
	});
};




// maping for AJAX
exports.offersAction = function (req, res) {
	exports.offers({}, function (offers) {
		res.send(offers);
	});
	
};
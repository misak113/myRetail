
var Offer = require('../models/Offer');
var l = require('../services/logDispatcher');


exports.offers = function (req, res) {

	Offer.find({}, function (e, offers) {
		if (e) {
			l.error(e);
			return res.send(404);
		}
		l.d('vráceny offers from mongoDB');
		res.send(offers);
	});
};
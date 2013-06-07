
var mongoose = require('mongoose');
var l = require('log-dispatch');

var offerSchema = mongoose.Schema({
	id: Number, 
	name: String, 
	price: Number
});

var Offer = mongoose.model('Offer', offerSchema);

Offer.getOffers = function (cb) {
	Offer.find({}, function (e, offers) {
		if (e) cb(e);

		var offersObj = [];
		// mark offers viewed by user
		offers.forEach(function (offer) {
			var offerObj = offer.toObject();
			offerObj.viewed = true;
			offersObj.push(offerObj);
		});
		if (typeof offersObj[0] !== 'undefined') offersObj[0].viewed = false; // @todo
		cb(e, offersObj);
	});
};


module.exports = Offer;

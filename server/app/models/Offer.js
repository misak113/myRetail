
var mongoose = require('mongoose');


var offerSchema = mongoose.Schema({
	id: Number, 
	name: String, 
	price: Number
});

var Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;

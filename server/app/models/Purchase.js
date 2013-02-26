
var mongoose = require('mongoose');


var purchaseSchema = mongoose.Schema({
	id: Number, 
	name: String, 
	price: Number
});

var Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;

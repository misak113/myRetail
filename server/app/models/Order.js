
var mongoose = require('mongoose');


var orderSchema = mongoose.Schema({
	id: Number, 
	name: String, 
	price: Number
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;

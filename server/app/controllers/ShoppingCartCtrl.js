
var l = require('log-dispatch');




exports.shoppingCarts = function (data, cb) {
	l.d('returned shoppingCarts');
	cb(shoppingCarts);
};


var shoppingCarts = [
	
];

/* JavaScript content from js/models/ShoppingCartModel.js in folder common */
/**
 * 
 */

var ShoppingCartModel = function (socket) {
	
	this.getShoppingCarts = function (cb) {
        socket.emit('/shopping-carts', {}, function (data) {
        	cb(data);
        });
	};
	
};

myRetail.factory('shoppingCartModel', function (socket) {
	var model = new ShoppingCartModel(socket);
	return model;
});

/* JavaScript content from js/models/LoyaltyModel.js in folder common */
/**
 * 
 */

var LoyaltyModel = function (socket) {
	
	this.getPoints = function (callback) {
		callback(87);
	};
};

myRetail.factory('loyaltyModel', function (socket) {
	var loyaltyModel = new LoyaltyModel(socket);
	return loyaltyModel;
});
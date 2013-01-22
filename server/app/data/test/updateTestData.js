

var app = require('../../app');

var mongoose = require('mongoose');
var Col = mongoose.Collection;

var l = require('../../services/logDispatcher');

var data = {
	offers: require('./offers')
};


mongoose.connection.on('open', function() {

	Object.keys(data).forEach(function (collectionName) {
		var items = data[collectionName];
		var collection = Col(collectionName, mongoose.connection);
		items.forEach(function (item) {
			collection.insert(item);
		});
	});
});
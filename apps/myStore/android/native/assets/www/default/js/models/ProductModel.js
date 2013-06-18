
/* JavaScript content from js/models/ProductModel.js in folder common */
/**
 * 
 */

var ProductModel = function ($http, config) {
	
	this.getProduct = function (id, cb) {
        $http.get(config.serverUrl+'/product').success(function(res) {
            cb(res);
        });
	};
	
};

myRetail.factory('productModel', function ($http, config) {
	var productModel = new ProductModel($http, config);
	return productModel;
});
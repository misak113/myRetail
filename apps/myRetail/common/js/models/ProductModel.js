/**
 * 
 */

var ProductModel = function ($http) {
	
	this.getProduct = function (id, cb) {
        $http.get(config.serverUrl+'/product').success(function(res) {
            cb(res);
        });
	};
	
};

myRetail.factory('productModel', function ($http) {
	var productModel = new ProductModel($http);
	return productModel;
});
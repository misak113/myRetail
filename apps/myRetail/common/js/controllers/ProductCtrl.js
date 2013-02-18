

function ProductCtrl($scope, $routeParams, productModel) {
	var id = $routeParams.productId;
	
	productModel.getProduct(id, function (product) {
		$scope.product = product;
	});
	
	$scope.goBack = function() {
		window.history.back(); // @todo předělat na angular $location
	};
};
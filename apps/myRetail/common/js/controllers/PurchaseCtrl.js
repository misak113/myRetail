
function PurchaseCtrl($scope, $routeParams, purchaseModel) {
	var id = $routeParams.purchaseId;
	
	purchaseModel.getPurchase(id, function (purchase) {
		$scope.purchase = purchase;
		angular.forEach(purchase.items, function (item, key) {
			if (item.product === null && item.price < 0) {
				$scope.purchase.items[key].product = {
					name: _t('Odečtení slevy'),
					image: {
						small: config.baseUrl+'/images/sale.png'
					}
				};
			}
			if (item.offer === null) {
				$scope.purchase.items[key].hideSalePrice = true;
			}
		});
	});
	
	$scope.paymentTypes = {
		visa: {
			image: config.baseUrl+'/images/paymentType/visa.png'
		},
		cash: {
			image: config.baseUrl+'/images/paymentType/cash.png'
		}
	};
};
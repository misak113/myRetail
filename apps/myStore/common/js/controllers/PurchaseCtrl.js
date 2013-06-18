
function PurchaseCtrl($scope, $routeParams, purchaseModel, _t, config) {
	var id = $routeParams.purchaseId;
	
	purchaseModel.getPurchase(id, function (purchase) {
		$scope.purchase = purchase;
		angular.forEach(purchase.items, function (item, key) {
			// view options
			$scope.purchase.items[key].detailHref = '#'; // @todo to není pěkné... url jsem zatím zvolil aby byly v šablonách (takhle se to rozhází)
			if (item.product !== null) {
				$scope.purchase.items[key].detailHref = '#/product/'+item.product._id; // @todo to není pěkné... url jsem zatím zvolil aby byly v šablonách (takhle se to rozhází)
			}
			if (item.offer !== null) {
				$scope.purchase.items[key].additionalClass = 'reduced';
				$scope.purchase.items[key].detailHref = '#/offer/'+item.offer._id; // @todo to není pěkné... url jsem zatím zvolil aby byly v šablonách (takhle se to rozhází)
			} else {
				$scope.purchase.items[key].hideSalePrice = true;
			}
			if (item.offer === null && item.product === null) {
				$scope.purchase.items[key].additionalClass = 'summed-discounts';
			}

			// content options
			if (item.product === null && item.price < 0) {
				$scope.purchase.items[key].product = {
					name: _t('Odečtení slevy'),
					image: {
						small: config.baseUrl+'/images/sale.png'
					}
				};
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
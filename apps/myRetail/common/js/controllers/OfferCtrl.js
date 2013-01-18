


function OfferCtrl ($scope, $routeParams, offerModel) {
	var id = $routeParams.offerId;
	
	offerModel.getOffer(id, function (offer) {
		$scope.offer = offer;
	});
	
	$scope.goBack = function() {
		window.history.back();
	};
};
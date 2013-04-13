


function OfferCtrl ($scope, $routeParams, offerModel) {
	$scope.offer = [];

	var id = $routeParams.offerId;
	
	offerModel.getOffer(id, function (offer) {
		$scope.offer = offer;
	});
	
	$scope.goBack = function() {
		window.history.back(); // @todo předělat na angular $location
	};
};

/* JavaScript content from js/controllers/OfferCtrl.js in folder common */



function OfferCtrl ($scope, $routeParams, offerModel) {
	
	var id = $routeParams.offerId;
	
	offerModel.getOffer(id, function (offer) {
		$scope.offer = offer;
		$scope.$apply();
	});
	
	$scope.goBack = function() {
		window.history.back(); // @todo předělat na angular $location
	};
};
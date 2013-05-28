
/* JavaScript content from js/controllers/HomeCtrl.js in folder common */
/**
 * 
 */

function HomeCtrl($scope, offerModel) {

	offerModel.getOffers(function (offers) {
		$scope.countOffers = offers.length;
		$scope.countNewOffers = _.filter(offers, function (offer) { return !offer.viewed; }).length;
		$scope.$apply();
	});
};
'use strict';
// use jQuery.hammer

/**
 * 
 */
function HomeCtrl($scope, offerModel, loyaltyModel) {

	offerModel.getOffers(function (offers) {
		$scope.countOffers = offers.length;
		$scope.countNewOffers = _.filter(offers, function (offer) { return !offer.viewed; }).length;
		$scope.$apply();
	});

	loyaltyModel.getPoints(function (loyaltyPoints) {
		var edges = [40, 50, 60];
		
		$scope.loyaltyPoints = loyaltyPoints;
		$scope.estPercent = [];
		$scope.levelPercent = [];
		var maxEdge = _.reduce(edges, function(memo, num){ return memo + num; }, 0);
		_.forEach(edges, function (edge, i) {
			var est = edge / maxEdge * 100;
			$scope.estPercent.push(est);

			var percent = (loyaltyPoints < edge ?loyaltyPoints :edge) / maxEdge * 100;
			$scope.levelPercent.push(percent);
			loyaltyPoints-=edge;
		});
	});

	// bind slide on QR code
	$scope.nextQR = function ($event) {
		alert('next QR');
	};

	// @todo předělat do dirktiv angular
	jQuery('#qr-code-container .qr-code').hammer().on('swipeleft', $scope.nextQR);
};
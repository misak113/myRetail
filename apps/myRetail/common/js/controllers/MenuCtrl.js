/**
 * 
 */

function MenuCtrl($scope) {
	$scope.title = 'Nabídky - myRetail';
	
	$scope.menuItems = [
		{
			name: 'Načíst Účet',
			controller: 'LoadAccountCtrl',
			url: '/load-account'
		},{
			name: 'Nabídka',
			controller: 'OfferListCtrl',
			url: '/offer-list'
		},{
			name: 'QR code',
			controller: 'QRCodeCtrl',
			url: '/qr-code'
		}
	];
}
/**
 * 
 */

function MenuCtrl($scope) {
	
	$scope.menuItems = [
		{
			name: 'Načíst Účet',
			controller: 'LoadAccountCtrl',
			url: '/loadAccount'
		},{
			name: 'Nabídka',
			controller: 'OfferListCtrl',
			url: '/offer-list'
		},{
			name: 'QR code',
			controller: 'ShowQRCodeCtrl',
			url: '/show-qr-code'
		}
	];
}
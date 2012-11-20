/**
 * 
 */

function MenuCtrl($scope) {
	
	$scope.menuItems = [
		{
			name: 'Načíst Účet',
			url: '/loadAccount'
		},{
			name: 'Nabídka',
			url: '/offer-list'
		},{
			name: 'QR code',
			url: '/show-qr-code'
		}
	];
}
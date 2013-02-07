/**
 * 
 */

function MenuCtrl($scope) {

	$scope.title = 'Menu - myRetail - můj obchodní řetězec';
	
	$scope.items = [
	            		{
	            			name: 'Můj účet',
	            			controller: 'AccountCtrl',
	            			url: '/moje-id',
	            			icon: 'user'
	            		},{
	            			name: 'Nákupy',
	            			controller: 'OrderListCtrl',
	            			url: '/order-list',
	            			icon: 'list-alt'
	            		},{
	            			name: 'Skupina',
	            			controller: 'GroupCtrl',
	            			url: '/group',
	            			icon: 'qrcode'
	            		},{
	            			name: 'Nastavení',
	            			controller: 'SettingCtrl',
	            			url: '/setting',
	            			icon: 'wrench'
	            		},{
	            			name: 'Exit',
	            			controller: 'GroupQRCodeCtrl',
	            			url: '/exit',
	            			icon: 'off'
	            		}
	            	];
}
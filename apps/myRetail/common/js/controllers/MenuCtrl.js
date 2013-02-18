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
	            			icon: 'shopping-cart'
	            		},{
	            			name: 'Skupina',
	            			controller: 'GroupCtrl',
	            			url: '/group',
	            			icon: 'group'
	            		},{
	            			name: 'Nastavení',
	            			controller: 'SettingCtrl',
	            			url: '/setting',
	            			icon: 'cogwheel'
	            		},{
	            			name: 'Exit',
	            			controller: 'GroupQRCodeCtrl',
	            			url: '/exit',
	            			icon: 'power'
	            		}
	            	];
};
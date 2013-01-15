/**
 * 
 */

function HtmlCtrl($scope) {

	$scope.title = 'myRetail - můj obchodní řetězec';
	
	$scope.moreItems = [
	            		{
	            			name: 'Moje ID - účet',
	            			controller: 'Ctrl',
	            			url: '/moje-id'
	            		},{
	            			name: 'Čárkový kód',
	            			controller: 'Ctrl',
	            			url: '/bar-code'
	            		},{
	            			name: 'QR kód skupiny',
	            			controller: 'GroupQRCodeCtrl',
	            			url: '/group-qr-code'
	            		},{
	            			name: 'Věrnostní body',
	            			controller: 'PointsCtrl',
	            			url: '/points'
	            		},{
	            			name: 'Přehled objednávek',
	            			controller: 'OrderListCtrl',
	            			url: '/order-list'
	            		},{
	            			name: 'Pobočky v okolí',
	            			controller: 'BranchesCtrl',
	            			url: '/branches'
	            		},{
	            			name: 'Nastavení',
	            			controller: 'SettingCtrl',
	            			url: '/setting'
	            		},{
	            			name: 'Zaplatit Kartou',
	            			controller: 'GroupQRCodeCtrl',
	            			url: '/pay-card'
	            		},{
	            			name: 'Zaplatit Mobito',
	            			controller: 'GroupQRCodeCtrl',
	            			url: '/pay-mobito'
	            		},{
	            			name: 'Zaplatit NFC',
	            			controller: 'GroupQRCodeCtrl',
	            			url: '/pay-nfc'
	            		},{
	            			name: 'Exit',
	            			controller: 'GroupQRCodeCtrl',
	            			url: '/exit'
	            		}
	            	];
}
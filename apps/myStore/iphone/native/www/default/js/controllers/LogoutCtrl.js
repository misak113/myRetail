
/* JavaScript content from js/controllers/LogoutCtrl.js in folder common */

function LogoutCtrl ($scope, userModel, $location) {
	
	userModel.logout(function () {
		$location.path('/login');
		//$scope.$apply();
	});
};
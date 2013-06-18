
function LogoutCtrl ($scope, userModel, $location) {
	
	userModel.logout(function () {
		$location.path('/login');
		//$scope.$apply();
	});
};
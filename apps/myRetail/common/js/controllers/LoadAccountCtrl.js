
function LoadAccountCtrl ($scope, $timeout) {
	
	$scope.progressStatus = 0;
	
	var progress = function () {
		$scope.progressStatus+=5;
		if ($scope.progressStatus < 100) $timeout(progress, 100);
	};
	
	$timeout(progress, 200);
}
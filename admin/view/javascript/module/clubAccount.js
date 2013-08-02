
function Module() {
	this.layout_id = 0;
	this.position = '';
	this.status = 1;
	this.sort_order = 1;
}

function ClubAccount($scope, $http, $location) {

	$scope.modules = !modules ?[] :modules;
	var originalModules = angular.copy($scope.modules);
	$scope.layouts = layouts;

	$scope.removeModule = function (moduleToRemove) {
		var i_x = null;
		angular.forEach($scope.modules, function (module, i) {
			if (module == moduleToRemove)
				i_x = i;
		});
		$scope.modules.splice(i_x, 1);
	};
	$scope.addModule = function (e) {
		$scope.modules.push(new Module());
	};
	$scope.save = function ($event) {
		$event.preventDefault();
		$http.post($location.$url, {action: 'save', clubAccount_module: $scope.modules})
		.success(function (resp) {
			if (resp.status == 'ok')
				return alert('Uloženo');

			alert('Při ukládání nastala chyba.');
		}).error(function () {
			alert('Při ukládání nastala chyba.');
		});
	};
	$scope.storno = function ($event) {
		$event.preventDefault();
		$scope.modules = angular.copy(originalModules);
	};
}
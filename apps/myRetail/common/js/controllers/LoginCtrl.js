

function LoginCtrl ($scope, $location, userModel, loadingDisp, messageDisp, _t) {
	$scope.loading = false;

	$scope.login = function () {
		$scope.loading = true;
		loadingDisp.loading(true, function () {
			$scope.loading = false;
			$scope.$apply();
		});

		userModel.login($scope.username, $scope.password, $scope.remember, function (e) {
			// pokud bylo zastaveno uživatelem
			if ($scope.loading === false) return;

			loadingDisp.loading(false);
			if (e) {
				if (e.code === userModel.WRONG_CREDENTIALS)
					return messageDisp.flash(_t('Zadal jste nesprávné jméno nebo heslo. Zkontrolujte a opakujte.'), 'error');
				return messageDisp.flash(_t('Při přihlašování nastala chyba, zkuste znovu později.'), 'error');
			}

			//messageDisp.flash(_t('Byl jste úspěšně přihlášen.'));
			$location.path('/home');
			$scope.$apply();
		});
	}

};
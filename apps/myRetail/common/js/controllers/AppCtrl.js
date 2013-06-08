
// tento controller je spuštěn vždy, proto je využíván jako spouštěč všech must-run služeb
function AppCtrl($scope, pullDown, $timeout, userModel, $location, messageDisp, $route, $window) {
	// funkce, která checkuje, zda je přihlášen
	var checkAuth = function (next) {
		var loggedIn = userModel.isLoggedIn();
		if (loggedIn === false) {
			var currentCtrl = typeof $route.current !== 'undefined' && 
				typeof $route.current.$route !== 'undefined' ?$route.current.$route.controller.name :null;
			
			if (currentCtrl !== 'LoginCtrl') {
				$location.path('/login');
				messageDisp.flash('Byl jste automaticky odhlášen. Přihlaste se znovu.', 'warning');
				$scope.$apply();
			}
		}
		if (typeof next === 'function')
			next(loggedIn);		
	};

	// každou vteřinu kontroluje, zda je přihlášen. Pokud ne, vrátí na logovací stránku
	var interval;
	interval = function (fn, time) {
		$timeout(function () {
			fn(function () { 
				interval(fn, time); 
			});
		}, time);
	};
	interval(checkAuth, 2000);

	// při načtení jiné stránky @todo moc se mi to takhle nelíbí
	$scope.$on('$routeChangeSuccess', function(ngEv, current, previous) { 
 		var previousCtrl = typeof previous !== 'undefined' 
			&& typeof previous.$route !== 'undefined' ?previous.$route.controller.name :null;
		var currentCtrl = typeof current !== 'undefined' 
			&& typeof current.$route !== 'undefined' ?current.$route.controller.name :null;
		
		var loggedIn = userModel.isLoggedIn();
		if (loggedIn !== false) {
			if (currentCtrl === 'LoginCtrl') {
				$location.path('/home');
			}
		} else {
			$location.path('/login');
			if (previousCtrl === 'LoginCtrl') {
				messageDisp.flash('Není možné používat aplikaci, pokud nejste přihlášen.', 'warning');
			} else if (currentCtrl !== 'LoginCtrl') {
				messageDisp.flash('Byl jste automaticky odhlášen. Přihlaste se znovu.', 'warning');
			}
		}
 	});



 	$scope.goBack = function() {
		$window.history.back(); // @todo předělat na angular $location
	};
};

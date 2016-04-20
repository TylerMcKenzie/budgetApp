var registrationControllers = angular.module('registrationControllers', []);



registrationControllers.controller('RegistrationController', ['$scope', '$http', '$window', function ($scope, $http, $window){ 

	$scope.register = function() {
		$http.post('/users', $scope.user);
		$window.location.replace('/');
	};

}]);

registrationControllers.controller('LoginController', ['$scope', '$http', function ($scope, $http){
	
	$scope.login = function() {
		// $http.post('/login', $scope.user);
	};
}]);
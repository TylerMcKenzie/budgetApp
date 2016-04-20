var myApp = angular.module('myApp', [
	'ngRoute',
	'indexControllers',
	'tableControllers',
	'registrationControllers'
	]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/home.html',
		controller: 'IndexController'
	}).
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	}).
	when('/register', {
		templateUrl: 'partials/register.html',
		controller: 'RegistrationController'
	}).
	when('/tables', {
		templateUrl: 'partials/tables.html',
		controller: 'TableController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);
var tableControllers = angular.module('tableControllers', []);

tableControllers.controller('TableController', ['$scope', '$http', 'TaxMath', 'PerCalc',  function ($scope, $http, TaxMath, PerCalc){
	$scope.period = "yearly";

	$scope.evaluate = function() {
		var income, net;
		$scope.sheet = {};
		if($scope.gross) {
			income = $scope.gross;
		} else {
			income = 50000;
		}	

		if($scope.checkBox==false) {
			if($scope.valueSwitch==="%"){
				$scope.sheet = PerCalc.getUniquePercents(income, $scope.incForm);
			} else {
				var formCopy = angular.copy($scope.incForm);
				$scope.sheet = formCopy;

				if(!$scope.sheet.taxes) {
					$scope.sheet.taxes = parseInt(TaxMath.getTaxes(income).toFixed(2));
				}
				if(!$scope.sheet.tithe || $scope.sheet.tithe===""){
					$scope.sheet.tithe = 0;
				}
				net = income - (parseInt($scope.sheet.tithe) + parseInt($scope.sheet.taxes));
				$scope.sheet.remainder = PerCalc.getRemVal(income, formCopy);
				$scope.sheet.net = net;

				if($scope.period==="monthly"){ 
					for(item in $scope.sheet) {
						$scope.sheet[item] = ($scope.sheet[item]/12).toFixed(2);
					}
				}
			}

		} else {
			if($scope.valueSwitch==="%"){
				$scope.sheet = PerCalc.getDefaultPercents(income);
			} else {
				var tithe = parseInt((income*0.1).toFixed(2));
				var taxes = parseInt((TaxMath.getTaxes(income)).toFixed(2));
				net = income - (tithe + taxes);
				$scope.sheet = PerCalc.calcDefaultValues(net);
				$scope.sheet.tithe = tithe;
				$scope.sheet.taxes = taxes;
				$scope.sheet.remainder = PerCalc.getRemVal(net, $scope.sheet);
				$scope.sheet.gross = income;
				$scope.sheet.net = net;

				if($scope.period==="monthly"){ 
					for(item in $scope.sheet) {
						$scope.sheet[item] = ($scope.sheet[item]/12).toFixed(2);
					}
				}
			}
		}
	};

}]);
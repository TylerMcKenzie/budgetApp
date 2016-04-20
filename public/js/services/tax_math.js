angular.module('myApp').service('TaxMath', function() {
	var taxRate,
	bracket1 = 9225, 
	bracket2 = 37450,
	bracket3 = 90750,
	bracket4 = 189300,
	bracket5 = 411500,
	bracket6 = 413200;

	var first = bracket1 * 0.1, 
	second = bracket2 * 0.15, 
	third = bracket3 * 0.25, 
	fourth = bracket4 * 0.28,
	fifth = bracket5 * 0.33, 
	sixth = bracket6 * 0.35, 
	seventh;

	function getTaxRate(inc) {
		if(inc <= bracket1){
			taxRate = 0.1;
		} else if(inc > bracket1 && inc <= bracket2){
			taxRate = 0.15;
		} else if(inc > bracket2 && inc <= bracket3){
			taxRate = 0.25;
		} else if(inc > bracket3 && inc <= bracket4){
			taxRate = 0.28;
		} else if(inc > bracket4 && inc <= bracket5) {
			taxRate = 0.33;
		} else if(inc > bracket5 && inc <= bracket6){
			taxRate = 0.35;
		} else if(inc > bracket6) {
			taxRate = 0.396;
		}
		return taxRate;
	};

	this.getTaxes = function(income) {
		var tr = getTaxRate(income);

		switch (tr) {
			case 0.15:
				second = (income - bracket1)*tr;
				return (first + second);
				break;
			case 0.25:
				third = (income - bracket2)*tr;
				return (first + second + third);
				break;
			case 0.28:
				fourth = (income - bracket3)*tr;
				return (first + second + third + fourth);
				break;
			case 0.33:
				fifth = (income - bracket4)*tr;
				return (first + second + third + fourth);
				break;
			case 0.35:
				sixth = (income	- bracket5)*tr;
				return (first + second + third + fourth + fifth);
				break;
			case 0.396:
				seventh = (income - bracket6)*tr;
				return (first + second + third + fourth + fifth + sixth + seventh);
				break;
			default:
				return income*tr;
				break;
		}
	};

});

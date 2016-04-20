angular.module('myApp').service('PerCalc', function() {
	this.calcDefaultValues = function(income) {
		var percents = defaultPercent(income);
		var valueSheet = {
			housing: 0,
			food: 0,
			auto: 0,
			insurance: 0,
			debts: 0,
			ent: 0,
			clothing: 0,
			savings: 0,
			medical: 0,
			misc: 0,
			school: 0
		};

		for(i in valueSheet) {
			valueSheet[i] = (income * percents[i]).toFixed(2);
		}

		return valueSheet;
		
	};

	this.getDefaultPercents = function(income) {
		var percentStuff = defaultPercent(income);

		for(per in percentStuff) {
			percentStuff[per] = (percentStuff[per]*100).toFixed(2);
		}

		return percentStuff;
	};

	this.getUniquePercents = function(income, form) {
		var newForm = uniquePercents(income, form);
		
		for(percent in newForm) {
			newForm[percent] = (newForm[percent]*100).toFixed(2);
		}

		return newForm;
	};

	this.getRemVal = function(number, obj){
		var total = 0;

		for(val in obj) {
			if(obj[val]===""){
				delete val;
			} else {
				total += parseInt(obj[val]);
			}
		}

		return number - total;
	};

	function uniquePercents(income, form) {
		var percentForm = {
			housing: 0,
			food: 0,
			auto: 0,
			insurance: 0,
			debts: 0,
			ent: 0,
			clothing: 0,
			savings: 0,
			medical: 0,
			misc: 0,
			school: 0
		};

		for(pfKey in percentForm) {
			for(fKey in form) {
				if(pfKey===fKey) {
					percentForm[pfKey] = form[fKey];
				}
			}
		}

		for(item in percentForm) {
			percentForm[item] = (percentForm[item]/income);
		}

		return percentForm;
	};
	
	function defaultPercent(income) {
		perSheet = {};
		if(income < 15000){
			perSheet.housing = 0.35;
			perSheet.food = 0.15;
			perSheet.auto = 0.15;
			perSheet.insurance = 0.05;
			perSheet.debts = 0.05;
			perSheet.ent = 0.05;
			perSheet.clothing = 0.05;
			perSheet.savings = 0.05;
			perSheet.medical = 0.05;
			perSheet.misc = 0.05;
			perSheet.school = 0.1;
		} else if(income > 15000 && income <= 25000) {
			perSheet.housing = 0.38;
			perSheet.food = 0.12;
			perSheet.auto = 0.15;
			perSheet.insurance = 0.05;
			perSheet.debts = 0.05;
			perSheet.ent = 0.05;
			perSheet.clothing = 0.05;
			perSheet.savings = 0.05;
			perSheet.medical = 0.05;
			perSheet.misc = 0.05;
			perSheet.school = 0.08;
		} else if(income > 25000 && income <= 40000){
			perSheet.housing = 0.30;
			perSheet.food = 0.12;
			perSheet.auto = 0.12;
			perSheet.insurance = 0.05;
			perSheet.debts = 0.05;
			perSheet.ent = 0.07;
			perSheet.clothing = 0.05;
			perSheet.savings = 0.05;
			perSheet.medical = 0.04;
			perSheet.misc = 0.07;
			perSheet.school = 0.06;
		} else if(income > 40000 && income <= 50000){
			perSheet.housing = 0.27;
			perSheet.food = 0.12;
			perSheet.auto = 0.12;
			perSheet.insurance = 0.05;
			perSheet.debts = 0.05;
			perSheet.ent = 0.07;
			perSheet.clothing = 0.06;
			perSheet.savings = 0.05;
			perSheet.medical = 0.04;
			perSheet.misc = 0.08;
			perSheet.school = 0.05;
		} else if(income > 50000) {
			perSheet.housing = 0.25;
			perSheet.food = 0.10;
			perSheet.auto = 0.12;
			perSheet.insurance = 0.05;
			perSheet.debts = 0.05;
			perSheet.ent = 0.07;
			perSheet.clothing = 0.06;
			perSheet.savings = 0.05;
			perSheet.medical = 0.04;
			perSheet.misc = 0.08;
			perSheet.school = 0.05;
		}
		return perSheet;
	};
});
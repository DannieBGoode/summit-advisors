function addCommas() {
	let givenNumber = document.getElementById("gross-salary-input").value;
	givenNumber=givenNumber.replace(/\,/g,''); // 1125, but a string, so convert it to number
	givenNumber=parseInt(givenNumber,10);
	nfObject = new Intl.NumberFormat('en-US');
    output = nfObject.format(givenNumber);

    document.getElementById("gross-salary-input").value  = output;
}

function calculate() {
	let income = document.getElementById("gross-salary-input").value;
	income= income.replace(/\,/g,''); // 1125, but a string, so convert it to number
	income= parseInt(income,10);
	let tax = 0;
    if (income < 24000) {
        tax = 0;
    } else if (income >= 24000 && income < 40000) {
        tax = 0.05 * (income - 24000);
    } else {
        tax = 0.10 * (income - 40000) + 600;
    }
    let netIncomeYearly = income - tax;
    let netIncomeMonthly = netIncomeYearly / 12;

    let GrossYearly = document.querySelectorAll('.gross-salary');
    let netSalaryYearly = document.querySelectorAll('.net-salary-yearly');
	let netSalaryMonthly = document.querySelectorAll('.net-salary-monthly');
	let taxYearly = document.querySelectorAll('.tax');

	let options = { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 };
	
	GrossYearly.forEach(function(element) {
		element.innerHTML = income.toLocaleString("de-DE", options);
	});
	netSalaryYearly.forEach(function(element) {
		element.innerHTML = netIncomeYearly.toLocaleString("de-DE", options);
	});
	netSalaryMonthly.forEach(function(element) {
		element.innerHTML = netIncomeMonthly.toLocaleString("de-DE", options);
	});

	taxYearly.forEach(function(element) {
		element.innerHTML = tax.toLocaleString("de-DE", options);
	});

    document.getElementsByClassName("result")[0].style.display = "block";
}
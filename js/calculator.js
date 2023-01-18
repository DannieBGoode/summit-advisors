function addCommas() {
    let givenNumber = document.getElementById("gross-salary-input").value;
    givenNumber=givenNumber.replace(/\,/g,''); // remove any existing commas
    if (isNaN(givenNumber) || givenNumber === '') {
        // if the value is not a number or is empty, don't format it
        document.getElementById("gross-salary-input").value = givenNumber;
    } else {
        let nfObject = new Intl.NumberFormat('en-US');
        let output = nfObject.format(givenNumber);
        document.getElementById("gross-salary-input").value = output;
    }
}
   


function calculate() {
	let incomeInput = document.getElementById("gross-salary-input");
	let income = incomeInput.value;
	income= income.replace(/\,/g,''); // 1125, but a string, so convert it to number
	income= parseInt(income,10);


    if (isNaN(income) || income < 0) {
        incomeInput.classList.add("calculator-error");  //add the error class
        return;
    } else {
        incomeInput.classList.remove("calculator-error");  //remove the error class if it previously existed
    }

	let tax = 0;
    if (income < tramoMin) {
        tax = 0;
    } else if (income >= tramoMin && income < tramoMax) {
        tax = tributacionMin * (income - tramoMin);
    } else {
        tax = tributacionMax * (income - tramoMax) + (tramoMax - tramoMin) * tributacionMin;
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
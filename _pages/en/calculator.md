---
layout: page
permalink: /en/tax-calculator/
ref: calculator
smallImage: true
title: Tax Caculator
description: Andorra Tax Calculator
image: /assets/uploads/image_2023-01-15_172707289.png
language: en
---
Calculate your net salary if you lived in Andorra

<div class="flex-center">
    <div class="hero__subscribe calculator">
        <form class="subscribe-form" action="javascript:void(0);">
            <!-- Annual Gross Salary field -->
            <label class="screen-reader-text" for="gross-salary-input">Annual Gross Salary €:</label>
            <input class="subscribe-email required email" id="gross-salary-input" type="number" name="gross-salary" placeholder="Enter your annual gross salary" min="1" step="any">

            <!-- Other Deductible Expenses field -->
            <label class="screen-reader-text" for="deductible-expenses-input">Other Deductible Expenses €:</label>
            <input class="subscribe-email required email" id="deductible-expenses-input" type="number" name="deductible-expenses" placeholder="Enter other deductible expenses" min="0" step="any">

            <!-- Net Income from Rentals field -->
            <label class="screen-reader-text" for="rental-income-input">Net Income from Rentals €:</label>
            <input class="subscribe-email required email" id="rental-income-input" type="number" name="rental-income" placeholder="Enter net income from rentals" min="0" step="any">

            <!-- Capital Gains/Losses field -->
            <label class="screen-reader-text" for="capital-gains-input">Capital Gains/Losses €:</label>
            <input class="subscribe-email required email" id="capital-gains-input" type="number" name="capital-gains" placeholder="Enter capital gains or losses" min="0" step="any">

            <!-- Dividends field -->
            <label class="screen-reader-text" for="dividends-input">Dividends €:</label>
            <input class="subscribe-email required email" id="dividends-input" type="number" name="dividends" placeholder="Enter dividends received" min="0" step="any">

            <!-- Net Income from Self-Employment field -->
            <label class="screen-reader-text" for="self-employment-income-input">Net Income from Self-Employment €:</label>
            <input class="subscribe-email required email" id="self-employment-income-input" type="number" name="self-employment-income" placeholder="Enter net income from self-employment" min="0" step="any">

            <button class="button button--primary button--small" type="submit">Calculate</button>
        </form>
    </div>
</div>
<div class="result hidden">
	<div>
		Si tuvieras un sueldo bruto anual de <span class="gross-salary"></span> en Andorra se traduciría en un sueldo neto de <b><span class="net-salary-yearly"></span> anuales</b> ó <b><span class="net-salary-monthly"></span> mensuales</b> de los cuales se habrían deducido {{ site.data.calculator.seguridadSocial }} € al mes por Seguridad Social y <span class="tax"></span> anuales en IRPF.
	</div>
	<div class="margin-section">
		<table>
			<thead>
				<tr>
					<th> Sueldo Bruto Anual</th>
					<th> Sueldo Neto Anual </th>
					<th> Sueldo Neto Mensual </th>
					<th> Impuestos Anuales (IRPF / IS) </th>
					<th> Seguridad Social </th>
					<th> Impuestos Efectivos </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td data-label="Sueldo Bruto Anual" class="gross-salary"></td>
					<td data-label="Sueldo Neto Anual" class="net-salary-yearly"></td>
					<td data-label="Sueldo Neto Mensual" class="net-salary-monthly"></td>
					<td data-label="Impuestos Anuales (IRPF / IS)" class="tax"></td>
					<td data-label="Seguridad Social" class="social-security"></td>
					<td data-label="Impuestos Efectivos" class="tax-percentage"></td>
				</tr>
			</tbody>
		</table>
	</div>

</div>

<div>
	<h2> Qué impuestos tendría un autónomo en Andorra </h2>
	<h3> IRPF - Impuesto de la Renta </h3>
	<div>
		En Andorra el IRPF únicamente presenta tres tramos:
	</div>
	<div>
		<table class="no-invert">
			<thead>
				<tr>
					<th>Tramos</th>
					<th>IRPF</th>
				</tr>	
			</thead>
			<tbody>
				<tr>
					<td>Hasta {{ site.data.calculator.tramoMin }} €</td>
					<td>0%</td>
				</tr>	
				<tr>
					<td>De {{ site.data.calculator.tramoMin }} € a {{ site.data.calculator.tramoMax }} €</td>
					<td>{{ site.data.calculator.tributacionMin }}%</td>
				</tr>	
				<tr>
					<td>De {{ site.data.calculator.tramoMax }} € en adelante</td>
					<td>{{ site.data.calculator.tributacionMax }}%</td>
				</tr>	
			</tbody>
		</table>
	</div>
	<div>
		<h3>Impuesto de Sociedades</h3>
		<div>
			En Andorra el IS o Impuesto de Sociedades es del {{ site.data.calculator.impuestoSociedades }}%. Es importante remarcar dos cosas:
			<ul>
				<li>El salario neto de un trabajador pagado por la empresa no aplica el IS puesto que para la empresa supone un gasto y no una ganancia. A este salario se le aplicarían las reglas de IRPF explicadas anteriormente, y incluyen también a empresas con un solo trabajador.</li>
				<li>Los dividendos pagados de un empresario a sí mismo cotizan al 0%, por lo que si un empresario decide no pagarse un salario y pagarse a sí mismo a través de dividendos, se le aplicaría únicamente el 10% de IS.</li>
			</ul>
		</div>
	</div>
	<div>
		<h3> Seguridad Social </h3>
		<div>
			El aporte para un autónomo (profesional por cuenta propia) en Andorra es fijo con una mensualidad de {{ site.data.calculator.seguridadSocial }} €.
		</div>
	</div>
</div>
<div class="contact-section margin-section">
	<div>
		<h2> Cada caso es único</h2>
		<div>
			Puede haber muchas pequeñas variaciones dependiendo del número de trabajadores de la empresa, sector de trabajo, título universitario, país de procedencia de los clientes, por lo que para poder darte los números exactos de tu caso no dudes en <a href="/es/contacto/">ponerte en contacto con nosotros</a> y te ayudaremos a entender tu mejor escenario.
		</div>
		<div class="button-center">
			<a href="/contact/">
				<button class="button button--primary button--small subscribe-button" onclick="void()">{{ site.data.calculator.contactCTA }}</button>
			</a>
		</div>
	</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.subscribe-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        calculate();
    });
});

function addCommas(element) {
    let value = element.value;
    value = value.replace(/\.|,/g, ''); // Remove any existing commas and dots
    if (!isNaN(value) && value !== '') {
        let nfObject = new Intl.NumberFormat('de-DE');
        element.value = nfObject.format(value);
    }
}

function calculate() {
    // Retrieve and parse form values
    let salarioNeto = parseLocaleNumber(document.getElementById('gross-salary-input').value);
    let otrosGastosDeducibles = parseLocaleNumber(document.getElementById('deductible-expenses-input').value || '0');
    let beneficioAlquileres = parseLocaleNumber(document.getElementById('rental-income-input').value || '0');
    let gananciasCapital = parseLocaleNumber(document.getElementById('capital-gains-input').value || '0');
    let dividendos = parseLocaleNumber(document.getElementById('dividends-input').value || '0');
    let ingresosNetosActividades = parseLocaleNumber(document.getElementById('self-employment-income-input').value || '0');

    // Calculate net income from work
    let rentaNetaTrabajo = salarioNeto - otrosGastosDeducibles;

    // Calculate Renta Neta del Capital Inmobiliario
    let rentaNetaCapitalInmobiliario = beneficioAlquileres; // Directly taken as it is

    // Calculate Total Ganancias y Pérdidas de Capital
    let totalGananciasPerdidasCapital = gananciasCapital; // Assuming direct value

    // Calculate Total Base de Tributación General
    let totalBaseTributacionGen = rentaNetaTrabajo + rentaNetaCapitalInmobiliario + ingresosNetosActividades; // Sum of relevant incomes

    // Calculate Total Base Liquidación General (You might need to adjust this with additional inputs)
    let totalBaseLiquidacionGeneral = totalBaseTributacionGen; // Placeholder, adjust as needed

    // Calculate Total Base de Tributación Ahorro (You might need to adjust this with additional inputs)
    let totalBaseTributacionAhorro = dividendos; // Placeholder, adjust as needed

    // Calculate Total Base Liquidación Ahorro (You might need to adjust this with additional inputs)
    let totalBaseLiquidacionAhorro = totalBaseTributacionAhorro; // Placeholder, adjust as needed


    // Calculate taxes
    let tax = calculateTaxes(rentaNetaTrabajo);

    // Calculate net yearly and monthly income
    let netIncomeYearly = rentaNetaTrabajo - tax;
    let netIncomeMonthly = netIncomeYearly / 12;

    // Calculate effective tax rate
    let effectiveTaxRate = (tax / salarioNeto) * 100;

    // Format numbers to currency
    let options = { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 };

    // Update the DOM with the results
    document.querySelector('.gross-salary').textContent = formatNumberToCurrency(salarioNeto, options);
    document.querySelector('.net-salary-yearly').textContent = formatNumberToCurrency(netIncomeYearly, options);
    document.querySelector('.net-salary-monthly').textContent = formatNumberToCurrency(netIncomeMonthly, options);
    document.querySelector('.tax').textContent = formatNumberToCurrency(tax, options);
    document.querySelector('.social-security').textContent = formatNumberToCurrency({{ site.data.calculator.seguridadSocial }} * 12, options);
    document.querySelector('.tax-percentage').textContent = effectiveTaxRate.toFixed(2) + '%';

    // Unhide the results section
    document.querySelector('.result').classList.remove('hidden');
}

function parseLocaleNumber(stringNumber) {
    return parseInt(stringNumber.replace(/\./g, ''), 10);
}

function calculateTaxes(income) {
    // Ensure these values are taken from the site data
    let tramoMin = parseInt("{{ site.data.calculator.tramoMin }}", 10);
    let tributacionMin = parseFloat("{{ site.data.calculator.tributacionMin }}", 10) / 100;
    let tramoMax = parseInt("{{ site.data.calculator.tramoMax }}", 10);
    let tributacionMax = parseFloat("{{ site.data.calculator.tributacionMax }}", 10) / 100;

    let tax = 0;
    if (income < tramoMin) {
        tax = 0;
    } else if (income >= tramoMin && income <= tramoMax) {
        tax = tributacionMin * (income - tramoMin);
    } else {
        tax = (tributacionMax * (income - tramoMax)) + ((tramoMax - tramoMin) * tributacionMin);
    }
    return tax;
}

function formatNumberToCurrency(number, options) {
    return number.toLocaleString('de-DE', options);
}
</script>

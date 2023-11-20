---
layout: page
title: Calculadora
permalink: /es/calculadora/
image: /assets/uploads/image_2023-01-15_172707289.png
smallImage: true
language: es
---
Cálcula cuanto sería tu sueldo neto si vivieras en Andorra:

<div class="flex-center">
	<div class="hero__subscribe calculator">
		<form class="subscribe-form" action="javascript:void(0);">
			<label class="screen-reader-text" for="gross-salary">Sueldo Bruto Anual €</label>
			<input class="subscribe-email required email transparent-input" id="gross-salary-input" type="text" name="gross-salary" placeholder="{{ site.data.calculator.placeholder }}" min="1" step="any" onkeyup="addCommas()">
			<button class="button button--primary button--small subscribe-button" onclick="calculate()">{{ site.data.calculator.buttonCTA }}</button>
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
			Puede haber muchas pequeñas variaciones dependiendo del número de trabajadores de la empresa, sector de trabajo, título universitario, país de procedencia de los clientes, por lo que para poder darte los números exactos de tu caso no dudes en <a href="/contact/">ponerte en contacto con nosotros</a> y te ayudaremos a entender tu mejor escenario.
		</div>
		<div class="button-center">
			<a href="/contact/">
				<button class="button button--primary button--small subscribe-button" onclick="void()">{{ site.data.calculator.contactCTA }}</button>
			</a>
		</div>
	</div>
</div>

<script>
	const tramoMin = parseInt("{{ site.data.calculator.tramoMin }}");
	const tramoMax = parseInt("{{ site.data.calculator.tramoMax }}");
	const tributacionMin = parseFloat(parseInt("{{ site.data.calculator.tributacionMin }}")) / 100;
	const tributacionMax = parseFloat(parseInt("{{ site.data.calculator.tributacionMax }}")) / 100;
	const socialSecurity = parseInt("{{ site.data.calculator.seguridadSocial }}");
</script>

<script src="/js/calculator.js"/>
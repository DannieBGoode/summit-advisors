---
layout: page
title: Calculadora
permalink: /calculadora/
image: /assets/uploads/image_2023-01-15_172707289.png
---



<div style="display: flex; justify-content: center;">
	<div class="hero__subscribe" style="margin-bottom: 50px; min-width: 430px;">
		<form class="subscribe-form" action="javascript:void(0);">
			<label class="screen-reader-text" for="gross-salary">Sueldo Bruto Anual €</label>
			<input class="subscribe-email required email" id="gross-salary-input" type="text" name="gross-salary" placeholder="{{ site.data.calculator.placeholder }}" min="1" step="any" onkeyup="addCommas()">
			<button class="button button--primary button--small subscribe-button" onclick="calculate()">{{ site.data.calculator.buttonCTA }}</button>
		</form>
	</div>
</div>


<div class="result" style="display: none">
	<div>
		Si tuvieras un sueldo bruto anual de <span class="gross-salary"></span> en Andorra se traduciría en un sueldo neto de <span class="net-salary-yearly"></span> anuales ó <span class="net-salary-monthly"></span> mensuales.
	</div>
	<div style="margin-top: 50px">
		<table>
			<thead>
				<tr>
					<td> Sueldo Bruto </td>
					<td> Sueldo Neto Anual </td>
					<td> Sueldo Neto Mensual </td>
					<td> Impuesto Anuales </td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="gross-salary"></td>
					<td class="net-salary-yearly"></td>
					<td class="net-salary-monthly"></td>
					<td class="tax"></td>
				</tr>
			</tbody>
		</table>
	</div>

</div>

<div>
	<h2> Explicación </h2>
	<h3> IRPF - Impuesto de la Renta </h3>
	<div>
		En Andorra el IRPF únicamente presenta tres tramos:
	</div>
	<div>
		<table>
			<thead>
				<tr>
					<th>Tramos</th>
					<th>IRPF</th>
				</tr>	
			</thead>
			<tbody>
				<tr>
					<td>Hasta {{ site.data.calculator.tramoMin }}</td>
					<td>0%</td>
				</tr>	
				<tr>
					<td>De {{ site.data.calculator.tramoMin }} a {{ site.data.calculator.tramoMax }}</td>
					<td>{{ site.data.calculator.tributacionMin }}%</td>
				</tr>	
				<tr>
					<td>De {{ site.data.calculator.tramoMax }} en adelante</td>
					<td>{{ site.data.calculator.tributacionMax }}%</td>
				</tr>	
			</tbody>
		</table>
	</div>
	<h3> Impuesto de Sociedades </h3>
	<div>
		En Andorra el IS o Impuesto de Sociedades es del {{ site.data.calculator.impuestoSociedades }}%.
	</div>
</div>


<script src="/js/calculator.js"/>
---
layout: page
title: Calculadora
permalink: /calculadora/
image: /assets/uploads/image_2023-01-15_172707289.png
---




<label>Sueldo Bruto Anual € </label>
<input id="gross-salary-input" type="text"  min="1" step="any" onkeyup="addCommas()" />
<button class="btn" onclick="calculate()">Calcular</button>


<div class="result" style="display: none">
	<div>
		Si tuvieras un sueldo bruto anual de <span class="gross-salary"></span> en Andorra se traduciría en un sueldo neto de <span class="net-salary-yearly"></span> anuales ó <span class="net-salary-monthly"></span> mensuales.
	</div>

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

<div>
	<h2> Explicación </h2>
	<h3> IRPF </h3>
	<div>
		En Andorra el IRPF únicamente presenta tres tramos:
	</div>
	<table>
		<thead>
			<tr>
				<th>Tramos</th>
				<th>IRPF</th>
			</tr>	
		</thead>
		<tbody>
			<tr>
				<td>Hasta 24.000€</td>
				<td>0%</td>
			</tr>	
			<tr>
				<td>De 24.000€ a 40.000€</td>
				<td>5%</td>
			</tr>	
			<tr>
				<td>De 40.000€ en adelante</td>
				<td>10%</td>
			</tr>	
		</tbody>
	</table>
</div>


<script src="/js/calculator.js"/>
import React, { Component } from 'react';

class ProgramDetailPricing extends Component {
	render() {
		return(
			<div className="pricing-container">
				<table>
					<thead>
						<tr className="pricing-table-header">
							<th>Price Name</th>
							<th>Current</th>
							<th>1- Year</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="price-name-item">Monthly Unlimited</td>
							<td className="price-current-item">$4,260</td>
							<td className="price-graph-item" rowspan="7">
								<img className="price-graph-image" src="./assets/spark_lines.png" alt="Line graphs of sales" />
							</td>
						</tr>
						<tr>
							<td className="price-name-item">Student 1 month</td>
							<td className="price-current-item">$1,750</td>
						</tr>
						<tr>
							<td className="price-name-item">Single Visit</td>
							<td className="price-current-item">$560</td>
						</tr>
						<tr>
							<td className="price-name-item">10 class pass</td>
							<td className="price-current-item">$475</td>
						</tr>
						<tr>
							<td className="price-name-item">Student Single Visit</td>
							<td className="price-current-item">$445</td>
						</tr>						
						<tr>
							<td className="price-name-item">20 class pass</td>
							<td className="price-current-item">$230</td>
						</tr>
						<tr>
							<td className="price-name-item">5 class pass</td>
							<td className="price-current-item">$520</td>
						</tr>						
					</tbody>
				</table>
			</div>
		);
	}
}

export default ProgramDetailPricing;
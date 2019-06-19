import React, { Component } from 'react';

class ProgramDetailPricing extends Component {

	state ={
		prices:[],
		isLoading: true,
		errors: null
	};

	fetchPrices() {
		fetch('https://api.myjson.com/bins/47axv')
			.then(response => response.json())
			.then(data =>
				this.setState({
					prices: data,
					isLoading:false,
				})
			)

			.catch(error => this.setState({ error, isLoading: false }));
	}

	componentDidMount() {
		this.fetchPrices();
	}

	render() {
		const { isLoading, prices, error } = this.state;

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
							<td className="price-graph-item" rowSpan="7">
								<img className="price-graph-image" src="./assets/spark_lines.png" alt="Line graphs of sales" />
							</td>
						</tr>
						{error ? <p>{error.message }</p> : null}
						
						{!isLoading ? (
							prices.map(price => {
								const { PricingOptionID, Name, Sales, ProgramID } = price;
								if (ProgramID === this.props.prgid && Name !== "Monthly Unlimited") {
									return (
									<React.Fragment key={price.PricingOptionID}>
										<tr >
											<td className="price-name-item">{Name}</td>
											<td className="price-current-item">${Sales.toLocaleString()}</td>
										</tr>
									</React.Fragment>

									);
								};
							})
							) : (<tr><td>Loading</td></tr>)
						}					
					</tbody>
				</table>
			</div>
		);
	}
}

export default ProgramDetailPricing;
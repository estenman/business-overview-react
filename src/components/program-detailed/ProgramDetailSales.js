import React, {Component} from 'react';

class ProgramDetailSales extends Component {
	render(){
		return(
			<div className="sales-container">
				<h3 className="sales-header">Total&nbsp;Monthly Sales</h3>
				<div className="sales-num-container">
					<div className="sales-num-current">
						<h4 className="sales-num-headers">Current</h4>
						<p>$23,483</p>
					</div>
					<div className="sales-num-graph">
						<h4 className="sales-num-headers">1- Year</h4>
						<img src="./assets/spark_line.png" alt="line chart showing sales" />
					</div>
				</div>
			</div>
		);
	}
}

export default ProgramDetailSales;
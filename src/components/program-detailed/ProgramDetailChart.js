import React, { Component} from 'react';

class ProgramDetailChart extends Component {
	render(){
		return(
			<div className="chart-container">
				<h3 className="chart-header">Sales by month</h3>
				<img className="chart-image" src="./assets/graph.png" />
			</div>
		);
	}
}

export default ProgramDetailChart;
import React, { Component} from 'react';

class ProgramDetailChart extends Component {
	render(){
		return(
			<div className="chart-container">
				<p className="chart-header">Sales by month</p>
				<img className="chart-image" src="./assets/graph.png" />
			</div>
		);
	}
}

export default ProgramDetailChart;
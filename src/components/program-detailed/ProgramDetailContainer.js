import React, { Component } from 'react';
import ProgramDetailHeader from './ProgramDetailHeader.js';
import ProgramDetailChart from './ProgramDetailChart.js';
import ProgramDetailSales from './ProgramDetailSales.js';

class ProgramDetailContainer extends Component {

	render(){
		return(
			<section className="program-container">
				<ProgramDetailHeader />
				<ProgramDetailChart />
				<ProgramDetailSales />
			</section>
		);
	}
}

export default ProgramDetailContainer;
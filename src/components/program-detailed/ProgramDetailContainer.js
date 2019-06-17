import React, { Component } from 'react';
import ProgramDetailHeader from './ProgramDetailHeader.js';
import ProgramDetailChart from './ProgramDetailChart.js';
import ProgramDetailSales from './ProgramDetailSales.js';
import ProgramDetailToggle from './ProgramDetailToggle.js';

class ProgramDetailContainer extends Component {

	render(){
		return(
			<section className="program-container">
				<ProgramDetailHeader />
				<ProgramDetailChart />
				<ProgramDetailSales />
				<ProgramDetailToggle />
			</section>
		);
	}
}

export default ProgramDetailContainer;
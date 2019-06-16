import React, { Component } from 'react';
import ProgramDetailHeader from './ProgramDetailHeader.js';
import ProgramDetailChart from './ProgramDetailChart.js'

class ProgramDetailContainer extends Component {

	render(){
		return(
			<section className="program-container">
				<ProgramDetailHeader />
				<ProgramDetailChart />
			</section>
		);
	}
}

export default ProgramDetailContainer;
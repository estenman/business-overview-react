import React, { Component } from 'react';
import ProgramDetailHeader from './ProgramDetailHeader.js';

class ProgramDetailContainer extends Component {

	render(){
		return(
			<section className="program-container">
				<ProgramDetailHeader />
			</section>
		);
	}
}

export default ProgramDetailContainer;
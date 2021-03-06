import React, { Component } from 'react';
import ProgramDetailPricing from './ProgramDetailPricing.js';

class ProgramDetailToggle extends Component {
	constructor(){
		super();
		this.state = {isToggleOn: true};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		{/* Opens and closes pricing details */}
		return(
			<div>
				{!this.state.isToggleOn && <ProgramDetailPricing prgid={this.props.prgid}/>}
				<button onClick={this.handleClick} className="toggle-copy">
					{this.state.isToggleOn ? 'more' : 'less'}
				</button>
			</div>
		);
	}
}

export default ProgramDetailToggle;
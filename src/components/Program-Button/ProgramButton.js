import React, { Component } from 'react';

class ProgramButton extends Component {
	render() {
		return(
			<aside className="new-program-wrapper">
				<button aria-label="New Program" aria-describedby="descriptionNewProgram" className="program-button">
					<img src="/assets/plus_icon.png" alt="plus sign" />
				</button>
				<p className="program-button-copy">New Program</p>
				<div id="descriptionNewProgram">Clicking the button will open a window to add a new program</div>
			</aside>
		);
	}
}

export default ProgramButton;
import React, { Component } from 'react';

class ProgramShortItem extends Component {

	render(){
		return(
			<React.Fragment>
				<tr className="program-short-item">
					<td>Open Practice<br /><span className="program-short-expand">more</span></td>
					<td>$572.00</td>
					<td>276 visits</td>
				</tr>
				<tr className="program-short-item">
					<td>Yoga Videos<br /><span className="program-short-expand">more</span></td>
					<td>$391.32</td>
					<td>82 views</td>
				</tr>
			</React.Fragment>
		);
	}
}

export default ProgramShortItem;
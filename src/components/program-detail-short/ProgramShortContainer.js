import React, { Component } from 'react';
import ProgramShortItem from './ProgramShortItem.js';

class ProgramShortContainer extends Component {

	render(){
		return(
			<section className="program-short-container">
				<table>
					<thead>
						<tr className="program-table-header">
							<th>All Programs</th>
							<th>Monthly Sales</th>
							<th>Monthly Attendence</th>
							
						{/* Placeholder for spacing */}
							<th aria-hidden="true" className="hide-header-mobile table-spacer"><span className="hide-header">holder</span></th>
						</tr>
					</thead>
					<tbody>
						<ProgramShortItem />
					</tbody>

				</table>
			</section>
		);
	}
}

export default ProgramShortContainer;
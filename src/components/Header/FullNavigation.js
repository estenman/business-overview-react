import React, { Component } from 'react';

class FullNavigation extends Component {
	render(){
		return (
			<nav role="navigation" className="header-nav">
				<ul>
					<li className="selected-tab">Dashboard
						<ul className="sub-nav-content">
							<li>Dashboard</li>
							<li className="selected-tab-item">Business Overview</li>
							<li>Schedule</li>
							<li>Reports</li>
						</ul>
					</li>
					<li>Sign In</li>
					<li>Classes</li>
					<li>Workshops</li>
					<li>Appointments</li>
					<li>Client Home</li>
					<li>Retail</li>
				</ul>
			</nav>
		);
	}
}

export default FullNavigation;
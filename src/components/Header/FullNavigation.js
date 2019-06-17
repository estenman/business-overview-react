import React, { Component } from 'react';

class FullNavigation extends Component {
	render(){
		return (
			<React.Fragment>
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

				<nav role="navigation" className="header-nav-mobile">
					<img src="./assets/mobile-menu-icon.png" alt="menu icon" />
				</nav>
			</React.Fragment>
		);
	}
}

export default FullNavigation;
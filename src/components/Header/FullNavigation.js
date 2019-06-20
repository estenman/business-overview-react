import React, { Component } from 'react';

class FullNavigation extends Component {
	render(){
		return (
			<React.Fragment>
				<nav role="navigation" className="header-nav">
					<ul>
						<li className="selected-tab"><a href="#">Dashboard</a>
							<ul className="sub-nav-content">
								<li><a href="#">Dashboard</a></li>
								<li className="selected-tab-item"><a href="#">Business Overview</a></li>
								<li><a href="#">Schedule</a></li>
								<li><a href="#">Reports</a></li>
							</ul>
						</li>
						<li><a href="#">Sign In</a></li>
						<li><a href="#">Classes</a></li>
						<li><a href="#">Workshops</a></li>
						<li><a href="#">Appointments</a></li>
						<li><a href="#">Client Home</a></li>
						<li><a href="#">Retail</a></li>
					</ul>
				</nav>

			{/* Mobile Nav */}
				<nav role="navigation" className="header-nav-mobile">
					<img src="./assets/mobile-menu-icon.png" alt="menu icon" />
				</nav>
			</React.Fragment>
		);
	}
}

export default FullNavigation;
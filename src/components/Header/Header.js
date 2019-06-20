import React, { Component} from 'react';
import FullNavigation from './FullNavigation.js';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<header>
					<div className="header-logo-container">
						<img className="header-logo" src="/assets/logo.png" alt="Urban Yoga logo" />
					</div>
					<FullNavigation />
				</header>
			{/* Subnavigation full width background */}
				<div className="subnav-background"></div>
			</React.Fragment>
		);
	}
}

export default Header;
import React, { Component} from 'react';
import FullNavigation from './FullNavigation.js';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<header>
					<img className="header-logo" src="/assets/logo.png" alt="Urban Yoga logo" />
					<FullNavigation />
				</header>
				<div className="subnav-background"></div>
			</React.Fragment>
		);
	}
}

export default Header;
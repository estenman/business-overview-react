import React, { Component} from 'react';
import FullNavigation from './FullNavigation.js';

class Header extends Component {
	render() {
		return (
			<header>
				<img className="header-logo" src="/assets/logo.png" alt="Urban Yoga logo" />
				<FullNavigation />
			</header>
		);
	}
}

export default Header;
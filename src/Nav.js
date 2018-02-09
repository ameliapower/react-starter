import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

export const Nav = () => {
	return(
		<nav>
			<NavLink className="nav-item" to="/">Home</NavLink>
			<NavLink className="nav-item" to="/page">Page</NavLink>
		</nav>
	)
}
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './index.css'
import {  Link } from "react-router-dom";


const Navbar = () => {
	return (

		<nav>
			<ul>
				<li>
					<Link to="/home">Home</Link>
				</li>
				{/* <li>
					<Link to="/records">records</Link>
				</li> */}
				{/* <li>
					<Link to="/profile">Profile</Link>
				</li> */}
				<li>
					<Link to="/ranking">Ranking</Link>
				</li>
				<li>
					<Link to="/seasonRanking">Season</Link>
				</li>
			</ul>
		</nav>
		
		// <Nav class = 'nav'>
		// 	<NavMenu class = 'ul'>
		// 		<NavLink to="/home" class = 'li' >
		// 			Home
		// 		</NavLink>
		// 		<NavLink to="/records" class = 'li' >
		// 			Records
		// 		</NavLink>
		// 		<NavLink to="/ranking" class = 'li' >
		// 			Ranking
		// 		</NavLink>
		// 		<NavLink to="/seasonRanking" class = 'li' >
		// 			Season
		// 		</NavLink>
		// 	</NavMenu>
		// </Nav>
		
	);
};

export default Navbar;

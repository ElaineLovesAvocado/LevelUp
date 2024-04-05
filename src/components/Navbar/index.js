import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './index.css'

const Navbar = () => {
	return (

		<nav>
			<ul>
				<li>
					<a href="/home">Home</a>
				</li>
				<li>
					<a href="/records">Records</a>
				</li>
				<li>
					<a href="/ranking">Ranking</a>
				</li>
				<li>
					<a href="/seasonRanking">SeasonRanking</a>
				</li>
			</ul>
		</nav>
		
			// <Nav>
			// 	<NavMenu>
			// 		<NavLink to="/home" activeStyle>
			// 			Home
			// 		</NavLink>
			// 		<NavLink to="/records" activeStyle>
			// 			Records
			// 		</NavLink>
			// 		<NavLink to="/ranking" activeStyle>
			// 			Ranking
			// 		</NavLink>
			// 		<NavLink to="/seasonRanking" activeStyle>
			// 			Season
			// 		</NavLink>
			// 	</NavMenu>
			// </Nav>
		
	);
};

export default Navbar;

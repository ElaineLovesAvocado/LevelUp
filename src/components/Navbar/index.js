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
				{/* <li>
					<Link to="/ranking">Ranking</Link>
				</li> */}
				{/* <li>
					<Link to="/seasonRanking">Season</Link>
				</li> */}
				<li>
					<Link to="/score">Ranking</Link>
				</li>
			</ul>
		</nav>
		
	);
};

export default Navbar;
